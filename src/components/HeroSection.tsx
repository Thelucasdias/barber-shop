import { Session } from "next-auth";

interface HeroProps {
  session: Session | null;
}

export default function HeroSection({ session }: HeroProps) {
  return (
    <div className="mx-auto max-w-xl text-center">
      <h2 className="text-4xl font-bold m-20">
        Gerencie sua barbearia com eficiência
      </h2>
      <p className="text-gray-600 mb-6">
        Controle de agendamentos, produtos, atendimentos e mais. Tudo em um só
        lugar.
      </p>
      <button className="bg-black text-white px-6 py-3 mt-6 rounded-lg hover:bg-gray-800 transition">
        Comece agora
      </button>
    </div>
  );
}
