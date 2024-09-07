import Dashboard from "@/components/dashboard";
import Image from "next/image";
import { auth } from "@/auth";
import axios, { AxiosError } from "axios";
import { Button } from "@instamate/ui";

export default async function Home() {
  const session: any = await auth();
  // console.log("session", session);

  try {
    const { data } = await axios.get(
      `https://graph.facebook.com/v3.2/17841467625423384?fields=business_discovery.username(instamate.in){followers_count,media_count,media{comments_count,like_count,media_url,media_type}}&access_token=${session?.accessToken}`,
    );
    // console.log("data", data?.business_discovery?.media?.data);
  } catch (error: any) {
    console.log("error", error.response.data);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      instamate
    </main>
  );
}
