// import { auth } from "@/auth";
import { validateRequest } from "@/lib/validate-request";
import Insights from "./insights";
import { logout } from "@/lib/logout";

export default async function Home() {
  const session = await validateRequest()
  console.log("user", session?.user)
  return (
    <main className="p-8 flex flex-col gap-8 w-full">
      <h1 className="text-4xl font-black">Hello, {session?.user?.name}!</h1>
      <Insights />
    </main>
  );
}