import React from "react";

export default function AboutSection() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mt-10 mb-6 text-center">Sobre o App</h2>
      <p className="max-w-2xl text-center px-4 text-lg text-gray-800">
        Nosso sistema foi criado para barbearias que querem modernizar o
        atendimento, controlar melhor seus agendamentos, produtos e equipe, e
        facilitar a comunicação com os clientes — tudo em um só lugar.
      </p>
    </section>
  );
}
