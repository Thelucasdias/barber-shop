import { signIn } from "next-auth/react";

export function useLogin() {
  async function signInWithCredentials(email: string, password: string) {
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      window.location.href = "/dashboard";
    }

    return res;
  }

  return { signInWithCredentials };
}
