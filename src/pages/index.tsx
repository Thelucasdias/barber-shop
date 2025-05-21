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

  if (session) {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default function Home({ session }: HomeProps) {
  return (
    <main className="">
      <Header session={session} />
      <HeroSection session={session} />
    </main>
  );
}
