import { validateRequest } from "./validate-request";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ActionResult } from "next/dist/server/app-render/types";
import { getLuciaClient } from "@/lib/auth";

export async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  const lucia = getLuciaClient(
    process.env.DATABASE_URL!,
    process.env.DATABASE_AUTH_TOKEN!,
    process.env.NODE_ENV!,
  );
  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/login");
}
