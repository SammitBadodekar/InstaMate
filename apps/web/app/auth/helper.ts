"use server";
import { signIn as naSignIn, signOut as naSignOut } from "./auth";

export async function signIn(params: string) {
    await naSignIn(params);
}

export async function signOut() {
    await naSignOut();
}