"use client";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  Checkbox,
} from "@instamate/ui";
import { useSession } from "next-auth/react";
// import { signIn } from "@/auth/helper";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Sidebar from "./sidebar";
import { Suspense, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { fascinate } from "../fonts";

const FormSchema = z.object({
  businessOrCreatorAccount: z.boolean().refine((data) => data === true, {
    message: "You must have an Instagram Business or Creator account",
  }),
  facebookPageLinked: z.boolean().refine((data) => data === true, {
    message: "You must have a Facebook page linked to your Instagram account",
  }),
});

const SignInForm = () => {
  // const session = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [steps, setSteps] = useState();

  // console.log(session);
  // if (session.status === "authenticated") {
  //   router.push(searchParams.get("callback") || "/");
  // }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {},
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    router.push(`/api/auth/login/facebook`);
    //${process.env.NEXT_PUBLIC_FAST_MODE === "true" ? process.env.NEXT_PUBLIC_API_URL : process.env.NEXT_PUBLIC_URL}
  }
  return (
    <div className="flex flex-col md:grid md:grid-cols-2 w-full h-dvh">
      <Sidebar />
      <div className="flex flex-col gap-4 justify-center items-center w-full h-full bg-lightTheme px-8">
        <div className="flex flex-col gap-2 justify-center items-center text-center py-12 px-12">
          <h1 className="text-3xl font-bold hidden md:block">
            Get Started with Instamate
          </h1>
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
                      I confirm I have an <b>Instagram Business</b> or{" "}
                      <b>Creator</b> account
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
                      I confirm I have a <b>Facebook page</b> linked to my
                      Instagram account
                    </FormLabel>
                    {/* <FormDescription>
                                        You can manage your mobile notifications in the{" "}
                                        <Link href="/examples/forms">mobile settings</Link> page.
                                    </FormDescription> */}
                  </div>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full flex gap-2 items-center justify-center p-2 bg-blue-600"
            >
              <BsFacebook className="w-6 h-6" />
              <p>Authenticate with facebook</p>
            </Button>
          </form>
        </Form>
        <Dialog>
          <DialogTrigger className="underline text-blue-600">
            Video Guide for required steps
          </DialogTrigger>
          <DialogContent>
            <h1 className="text-2xl font-bold">Videos to guide you</h1>
            <div className="w-full flex justify-center items-center">
              <div className="grid grid-cols-2 gap-4 w-80">
                <a
                  className="block rounded-lg overflow-hidden border relative"
                  href="/onboarding_link.mp4"
                  target="_blank"
                >
                  <video className="object-contain">
                    <source src="/onboarding_link.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white p-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-5 h-5 text-black"
                      >
                        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                      </svg>
                    </div>
                    <div className="text-white text-sm font-medium leading-4">
                      How to link your Facebook page
                    </div>
                  </div>
                </a>
                <a
                  className="block rounded-lg overflow-hidden border relative"
                  href="/onboarding_switch.mp4"
                  target="_blank"
                >
                  <video className="object-contain">
                    <source src="/onboarding_switch.mp4" type="video/mp4" />
                  </video>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-2 pt-4 flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-white p-2.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        data-slot="icon"
                        className="w-5 h-5 text-black"
                      >
                        <path d="M6.3 2.84A1.5 1.5 0 0 0 4 4.11v11.78a1.5 1.5 0 0 0 2.3 1.27l9.344-5.891a1.5 1.5 0 0 0 0-2.538L6.3 2.841Z"></path>
                      </svg>
                    </div>
                    <div className="text-white text-sm font-medium leading-4">
                      How to switch to Business?
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default SignInForm;
