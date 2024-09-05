"use client"
import { Button } from "@instamate/ui"
import { useSession } from "next-auth/react";
import { signIn } from "@/auth/helper";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Steps from "./steps";
import { useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Checkbox } from "@instamate/ui"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
} from "@instamate/ui"

const FormSchema = z.object({
    businessOrCreatorAccount: z.boolean().refine((data) => data === true, {
        message: "You must have an Instagram Business or Creator account",
    }),
    facebookPageLinked: z.boolean().refine((data) => data === true, {
        message: "You must have a Facebook page linked to your Instagram account",
    }),
})

export default function SignIn() {
    const session = useSession()
    const router = useRouter()
    const searchParams = useSearchParams()
    const [steps, setSteps] = useState()

    console.log(session)
    if (session.status === "authenticated") {
        router.push(searchParams.get("callback") || "/")
    }

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        await signIn(
            "facebook",
            {},
            {
                scope:
                    "instagram_basic,instagram_content_publish,instagram_manage_comments,instagram_manage_insights,pages_show_list,pages_read_engagement,business_management,email",
                response_type: "code",
                redirect_uri:
                    "http://localhost:3000/api/auth/callback/facebook",
                extras: JSON.stringify({
                    setup: { channel: "IG_API_ONBOARDING" },
                }),
                display: "page",
            },
        );
    }

    return (
        <div className="flex ">
            <Steps />
            <div className="flex flex-col gap-4 justify-center items-center w-full">
                <div className="flex flex-col gap-2 justify-center items-center text-center py-12 px-20">
                    <h1 className="text-2xl font-bold">Connect your Instagram and Facebook accounts</h1>
                    <p>Instamate uses your Facebook account to authenticate with Instagram. This allows us to access your Instagram account and manage your content.</p>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="">
                        <FormField
                            control={form.control}
                            name="businessOrCreatorAccount"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 -my-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            I confirm that I have an <b>Instagram Business</b> or <b>Creator</b> account
                                        </FormLabel>
                                        {/* <FormDescription>
                                        You can manage your mobile notifications in the{" "}
                                        <Link href="/examples/forms">mobile settings</Link> page.
                                    </FormDescription> */}
                                    </div>

                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="facebookPageLinked"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel>
                                            I confirm that I have a <b>Facebook page</b> linked to my Instagram account
                                        </FormLabel>
                                        {/* <FormDescription>
                                        You can manage your mobile notifications in the{" "}
                                        <Link href="/examples/forms">mobile settings</Link> page.
                                    </FormDescription> */}
                                    </div>

                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full flex gap-2 items-center justify-center p-2 bg-blue-600">
                            <BsFacebook className="w-6 h-6" />
                            <p>Authenticate with facebook</p>
                        </Button>
                    </form>
                </Form>
            </div>

        </div>
    );
}