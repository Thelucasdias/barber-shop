import Head from "next/head";
import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import SignupSection from "@/components/sections/SignupSection";
import AboutSection from "@/components/sections/AboutSection";
import { GetStaticProps } from "next";

export default function Home() {
  return (
    <>
      <Head>
        <title>Barber Control - Gestão de Barbearias</title>
        <meta
          name="description"
          content="Sistema de gestão para barbearias com agendamentos, finanças e controle de clientes."
        />
        <meta property="og:title" content="Barber Control" />
        <meta
          property="og:description"
          content="Controle completo e automatizado para sua barbearia."
        />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <main>
        <Header />
        <HeroSection />
        <AboutSection />
        <SignupSection />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};
