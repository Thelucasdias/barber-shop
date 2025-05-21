import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

export default function Header({ session }: HeaderProps) {
  return (
    <header className="w-full flex justify-between items-start max-w-4xl mx-auto mb-12">
      <h1 className="text-2xl font-bold">Barbershop App</h1>

      {session ? (
        <button
          onClick={() => signOut()}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Sair
        </button>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Login
        </button>
      )}
    </header>
  );
}
