import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { useRouter } from "next/router";

interface HeaderProps {
  session: Session | null;
}

export default function Header({ session }: HeaderProps) {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div>
      <header className="w-full flex justify-between items-center px-6 py-4 mx-auto">
        <h1 className="text-2xl">Barbershop App</h1>
        <div>
          <button
            onClick={handleLogin}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-24"
          >
            Login
          </button>
        </div>
      </header>
    </div>
  );
}
