import Dashboard from "@/components/dashboard";
import Image from "next/image";
import { auth } from "@/app/auth/auth"

export default async function Home() {
  const session = await auth()
  console.log("session", session);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      instamate

      <Dashboard />
    </main>
  );
}
