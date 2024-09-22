import { cookies } from "next/headers";
import { cache } from "react";

import type { Session, User } from "lucia";
import { getLuciaClient } from "@/lib/auth";

export const validateRequest = cache(
  async (): Promise<
    { user: User; session: Session } | { user: null; session: null }
  > => {
    const lucia = getLuciaClient(
      process.env.DATABASE_URL!,
      process.env.DATABASE_AUTH_TOKEN!,
      process.env.NODE_ENV!,
    );
    const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
    if (!sessionId) {
      return {
        user: null,
        session: null,
      };
    }

    let result: any = {};
    try {
      result = await lucia.validateSession(sessionId);
    } catch (error) {
      console.log("error", error);
    }

    const { user, session } = result;

    // next.js throws when you attempt to set cookie when rendering page
    try {
      if (session && session.fresh) {
        const sessionCookie = lucia.createSessionCookie(session.id);
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
      if (!session) {
        const sessionCookie = lucia.createBlankSessionCookie();
        cookies().set(
          sessionCookie.name,
          sessionCookie.value,
          sessionCookie.attributes,
        );
      }
    } catch {}
    return result;
  },
);
