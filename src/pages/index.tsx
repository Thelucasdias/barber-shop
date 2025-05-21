import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";

interface HomeProps {
  session: Session | null;
}

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const session = await getServerSession(context.req, context.res, authOptions);

  return {
    props: { session },
  };
};

export default function Home({ session }: HomeProps) {
  return (
    <main>
      <Header session={session} />
      <HeroSection session={session} />
    </main>
  );
}
