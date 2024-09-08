import { auth } from "@/auth";
import Insights from "./insights";

export default async function Home() {
  const session: any = await auth();
  console.log("session", session);
  return (
    <main className="p-8 flex flex-col gap-8 w-full">
      <h1 className="text-4xl font-black">Hello, {session?.user?.name}!</h1>
      <Insights />
    </main>
  );
}
