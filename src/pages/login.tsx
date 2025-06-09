import { getProviders, signIn } from "next-auth/react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    getProviders().then((prov) => {
      setProviders(prov);
    });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>

        <form className="space-y-4 mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Senha"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-blue-600 hover:underline text-center cursor-pointer mb-6">
          Esqueci minha senha
        </p>

        {providers?.google && (
          <div className="flex justify-center">
            <button
              onClick={() => signIn(providers.google.id)}
              className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full hover:bg-gray-100 transition"
              aria-label="Entrar com Google"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 488 512"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M488 261.8C488 403.3 391.1 504 248 504c-137 0-248-111-248-248S111 8 248 8c66.8 0 122.7 24.5 165.2 64.9l-66.9 64.3C317.5 90.6 285.4 80 248 80 152.6 80 76 156.6 76 252s76.6 172 172 172c87.5 0 132.5-62.7 138-119.8H248v-95.4h240z" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
