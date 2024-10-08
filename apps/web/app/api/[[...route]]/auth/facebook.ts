import { Hono } from "hono";
import { cookies } from "next/headers";
import { FacebookTokens, OAuth2RequestError } from "arctic";
import { generateIdFromEntropySize } from "lucia";
import { getLuciaClient } from "../../../../lib/auth";
import { Facebook, generateState } from "arctic";
import { getCookie, setCookie } from "hono/cookie";
import { buildLibsqlClient, eq, userTable } from "@instamate/db";
import { env } from "hono/adapter";
import { Env } from "../route";
import { drizzle } from "drizzle-orm/d1";

const app = new Hono();

app.get("/login/facebook", async (c) => {
  try {
    const {
      AUTH_FACEBOOK_ID,
      AUTH_FACEBOOK_SECRET,
      NODE_ENV,
      NEXT_PUBLIC_URL,
      NEXT_PUBLIC_FAST_MODE,
      NEXT_PUBLIC_API_URL,
    } = env<Env>(c);
    const redirectURI = `${NEXT_PUBLIC_URL}/api/auth/callback/facebook`;
    const facebook = new Facebook(
      AUTH_FACEBOOK_ID,
      AUTH_FACEBOOK_SECRET,
      redirectURI,
    );

    const state = generateState();
    const url: URL = await facebook.createAuthorizationURL(state, {
      scopes: [
        "instagram_basic",
        "instagram_content_publish",
        "instagram_manage_comments",
        "instagram_manage_insights",
        "pages_show_list",
        "pages_read_engagement",
        "business_management",
        "email",
      ],
    });

    setCookie(c, "state", state, {
      secure: (c.env as any).NODE_ENV === "production",
      path: "/",
      httpOnly: true,
      maxAge: 60 * 10,
    });

    console.log("here in facebook url", url.toString());
    return c.redirect(url.toString(), 302);
  } catch (error) {
    console.log(error);
    return c.json(null, 400);
  }
});

app.get("/callback/facebook", async (c) => {
  const {
    AUTH_FACEBOOK_ID,
    AUTH_FACEBOOK_SECRET,
    NODE_ENV,
    NEXT_PUBLIC_URL,
    DATABASE_URL,
    DATABASE_AUTH_TOKEN,
    NEXT_PUBLIC_FAST_MODE,
    NEXT_PUBLIC_API_URL,
  } = env<Env>(c);
  const redirectURI = `${NEXT_PUBLIC_URL}/api/auth/callback/facebook`;
  const facebook = new Facebook(
    AUTH_FACEBOOK_ID,
    AUTH_FACEBOOK_SECRET,
    redirectURI,
  );

  const code = c.req.queries("code");
  const state = c.req.queries("state");
  const storedState = getCookie(c, "state");

  if (!code || !storedState || state?.[0] !== storedState) {
    return c.json(null, 400);
  }

  try {
    const tokens: FacebookTokens = await facebook.validateAuthorizationCode(
      code?.[0],
    );
    const commonParams = { access_token: tokens.accessToken };

    const userInfoApiUrl = buildFacebookApiUrl(
      "https://graph.facebook.com/me",
      {
        ...commonParams,
        fields: ["id", "name", "picture", "email"].join(","),
      },
    );

    const instagramBusinessAccountApiUrl = buildFacebookApiUrl(
      "https://graph.facebook.com/v20.0/me/accounts",
      {
        ...commonParams,
        fields: [
          "id",
          "name",
          "access_token",
          "instagram_business_account",
        ].join(","),
      },
    );

    const [user, instagramBusinessAccount] = await Promise.all([
      fetch(userInfoApiUrl).then((res) => res.json()),
      fetch(instagramBusinessAccountApiUrl).then((res) => res.json()),
    ]);

    if (user) {
      const instagramBusinessAccountId =
        instagramBusinessAccount?.data?.[0]?.instagram_business_account?.id;

      const db = buildLibsqlClient(DATABASE_URL, DATABASE_AUTH_TOKEN);
      const lucia = getLuciaClient(DATABASE_URL, DATABASE_AUTH_TOKEN, NODE_ENV);
      const existingUser = await db
        .select()
        .from(userTable)
        .where(
          eq(userTable.instagramBusinessAccountId, instagramBusinessAccountId),
        )
        .limit(1);

      if (existingUser.length > 0) {
        const session = await lucia.createSession(existingUser?.[0]?.id!, {});
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
        return c.redirect("/", 302);
      }

      const userId = generateIdFromEntropySize(10);
      await db.insert(userTable).values({
        id: userId,
        name: user?.name,
        email: user?.email ?? null,
        image: user?.picture?.data?.url,
        instagramBusinessAccountId,
        instagramPageName: instagramBusinessAccount?.data?.[0]?.name,
        accessToken: tokens?.accessToken,
      });

      const session = await lucia.createSession(userId, {
        instagramBusinessAccountId,
        instagramPageName: instagramBusinessAccount?.data?.[0]?.name,
        accessToken: tokens?.accessToken,
        name: user?.name,
        email: user?.email ?? null,
        image: user?.picture?.data?.url,
      });
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
      );
    }
    return c.redirect(`${NEXT_PUBLIC_URL}/`, 302);
  } catch (e: any) {
    if (e instanceof OAuth2RequestError) {
      const { message, description, request } = e;
      return c.json({ error: message, description }, 400);
    }
    return c.json({ error: e.message }, 400);
  }
});

const buildFacebookApiUrl = (
  baseUrl: string,
  params: Record<string, string>,
) => {
  const url = new URL(baseUrl);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value),
  );
  return url;
};

export default app;
