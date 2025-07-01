import { useRouter } from "next/router";
import { useState } from "react";

type SignupData = {
  fullName: string;
  email: string;
  phone: string;
  barbershopName: string;
  password: string;
  address: string;
};

export function useSignup() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function registerBarbershop(data: SignupData) {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          phone: data.phone,
          address: data.address,
          barbershopName: data.barbershopName,
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        return { ok: false, error: result.error };
      }

      router.push("/login");
      return { ok: true };
    } catch (err) {
      return { ok: false, error: "Erro de rede ou servidor." };
    } finally {
      setLoading(false);
    }
  }

  return { registerBarbershop, loading };
}
