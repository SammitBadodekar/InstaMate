"use client"
import { Button } from "@instamate/ui"
import { useSession } from "next-auth/react";
import { signIn } from "@/auth/helper";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignIn() {
    const session = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()

    if (session.status === "authenticated") {
        router.push(searchParams.get("callback") || "/")
    }

    return (
        <form
            action={async () => {
                await signIn("facebook")
            }}
        >
            <Button type="submit">Signin with facebook</Button>
        </form>
    )
} 