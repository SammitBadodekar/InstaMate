import { validateRequest } from "./validate-request";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ActionResult } from "next/dist/server/app-render/types";
import { lucia } from "@/lib/auth";

export async function logout(): Promise<ActionResult> {
  "use server";
  const { session } = await validateRequest();
  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect("/login");
}
