"use server";
import { signIn as naSignIn, signOut as naSignOut } from ".";

export async function signIn(
  provider?: string | undefined,
  options?:
    | FormData
    | ({
        redirectTo?: string;
        redirect?: true | undefined;
      } & Record<string, any>)
    | undefined,
  authorizationParams?:
    | string[][]
    | Record<string, string>
    | string
    | URLSearchParams,
) {
  await naSignIn(provider, options, authorizationParams);
}

export async function signOut() {
  await naSignOut();
}
