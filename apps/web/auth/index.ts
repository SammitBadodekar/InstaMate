import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Instagram from "next-auth/providers/instagram";
import { prisma } from "@instamate/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma as any),
  providers: [
    Google({
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    Facebook({
      //   authorization: {
      //     params: {
      //       scopes: [
      //         "instagram_basic",
      //         "instagram_content_publish",
      //         "instagram_manage_comments",
      //         "instagram_manage_insights",
      //         "pages_show_list",
      //         "pages_read_engagement",
      //       ],
      //       redirect_uri: `http://localhost:3000/callback/facebook`,
      //       config_id: 466535422773862,
      //     },
      //   },
    }),
  ],
  callbacks: {
    // @ts-ignore
    async jwt(props) {
      const { token, account, user, profile } = props;
      // console.log("here in jwt", props);
      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account?.expires_at
            ? account?.expires_at * 1000
            : null,
          user: profile ? profile : user,
        };
      }

      //   const xBeforeExpiration =
      //     (token?.accessTokenExpires as number) - 59.5 * 60 * 1000;
      //   const isTokenExpired = Date.now() > xBeforeExpiration;

      //   const newToken = await refreshAccessToken(token);
      //   if (!isTokenExpired) {
      //     return {
      //       ...token,
      //       ...newToken,
      //     };
      //   }

      // Refresh the token if it's expired
      return {
        ...token,
        // ...newToken,
      };
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.accessTokenExpires = token.accessTokenExpires;
      session.error = token.error;
      session.user = token.user;

      return session;
    },
    authorized: async ({ auth }) => {
      return !!auth;
    },
  },
  pages: {
    signIn: "/signin",
  },
  session: { strategy: "jwt" },
});
