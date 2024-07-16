import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Google from "next-auth/providers/google"
import Facebook from "next-auth/providers/facebook"

const prisma = new PrismaClient()

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
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

        })
    ],
    callbacks: {
        authorized: async ({ auth }) => {
            return !!auth;
        },
    },
    pages: {
        signIn: "/signin",
    },
    session: { strategy: "jwt" },
});