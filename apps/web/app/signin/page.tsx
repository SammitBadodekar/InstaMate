import SignInForm from "./signinform";
import { Suspense } from "react";

export default function SignIn() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
