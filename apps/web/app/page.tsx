import Dashboard from "@/components/dashboard";
import Image from "next/image";
import { auth } from "@/auth"
import axios, { AxiosError } from "axios";
import { Button } from "@instamate/ui";

export default async function Home() {
  const session = await auth()
  // console.log("session", session);

  try {
    // const { data } = await axios.get(`https://graph.facebook.com/v20.0/me/accounts?fields=id%2Cname%2Caccess_token%2Cinstagram_business_account&access_token=${session?.accessToken}`)
    const { data } = await axios.get(`https://graph.facebook.com/v3.2/17841467625423384?fields=business_discovery.username(instamate.in){followers_count,media_count,media{comments_count,like_count,media_url,media_type}}&access_token=EAAORA6oYO4sBO6ZCx7DVP06JZAbPdGrHUHIarFekIGjWZBjIxiqqZAHB3EtCe3zcLZBHbuqbvNM0IvOjSCvDR194DZBmeLdmJOuGTVKg2AAeyUdF52AJwR9y8gGDKEJZCxZCJs5t76XenFgZCeVD48jwEdsiaWiKMAl08NluSJY1PLDApQVhgMqfWT9rl3oorxurI`)
    console.log("data", data?.business_discovery?.media?.data)
  } catch (error: any) {
    console.log("error", error.response.data)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      instamate
    </main>
  );
}

//17841467625423384/media?fields=like_count,media_url,media_type,comments_count,caption,is_comment_enabled,is_shared_to_feed,thumbnail_url,boost_ads_list{ad_id,ad_status},comments{id,like_count,media,replies{text,media,like_count,user,replies},text,from,user}

//389828867543305
//17841467625423384
//EAAORA6oYO4sBO66HZCcjZBkSyXZCsv7KYd5ZBz3JsoEOzAkUWi61UP7HQJz7IbXgWFgdIXA8ZADRTzNwdjDwZCDZCR1EIBCORatAxrJLyIZB75o5z1w9gQG3JwAmwDgAsDUS8qX3Pwy13519WP1bbB93Qgv5MzRZCngDE9c3nQ6sun1ZAsdJZCZCHzjbyu7QVwFVmjk71djPd68ip40xIKgx4zDZC4yRx1u8Q9Fvb9W1AZAjYucjY9L4Mlf0LLRy45zyvGNC5tVCOMXpxotywxLGJU0ZB13NpMUZB9cuX0c6mDz7QdTdWWotXwZDZD"
//EAAORA6oYO4sBO6ZCx7DVP06JZAbPdGrHUHIarFekIGjWZBjIxiqqZAHB3EtCe3zcLZBHbuqbvNM0IvOjSCvDR194DZBmeLdmJOuGTVKg2AAeyUdF52AJwR9y8gGDKEJZCxZCJs5t76XenFgZCeVD48jwEdsiaWiKMAl08NluSJY1PLDApQVhgMqfWT9rl3oorxurI