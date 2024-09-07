import NextAuth, { Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Google from "next-auth/providers/google";
import Facebook from "next-auth/providers/facebook";
import Instagram from "next-auth/providers/instagram";
import { PrismaClient, User } from "@instamate/db";
import axios from "axios";

export const prisma = new PrismaClient();
export interface InstamateSession extends Session {
  instagramBusinessAccount: { id: string };
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  error: string;
}

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
    Facebook,
  ],
  callbacks: {
    // @ts-ignore
    async jwt(props) {
      const { token, account, user, profile } = props;

      let instagramBusinessAccount = token.instagramBusinessAccount;

      if (!instagramBusinessAccount) {
        try {
          const { data } = await axios.get(
            `https://graph.facebook.com/v20.0/me/accounts?fields=id%2Cname%2Caccess_token%2Cinstagram_business_account&access_token=${account?.access_token}`,
          );
          console.log("here jwt data", data?.data);
          instagramBusinessAccount = data?.data[0]?.instagram_business_account;
        } catch (error) {
          console.log("here jwt error", error);
        }
      }

      if (account && user) {
        return {
          accessToken: account.access_token,
          refreshToken: account.refresh_token,
          accessTokenExpires: account?.expires_at
            ? account?.expires_at * 1000
            : null,
          user: profile ? profile : user,
          instagramBusinessAccount,
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
    async session({
      session,
      token,
    }: {
      session: Session;
      token: any;
    }): Promise<InstamateSession> {
      return {
        ...session,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        accessTokenExpires: token.accessTokenExpires,
        error: token.error,
        user: token.user,
        instagramBusinessAccount: token.instagramBusinessAccount,
      };
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
