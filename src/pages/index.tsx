import Header from "@/components/layout/Header";
import HeroSection from "@/components/sections/HeroSection";
import SignupSection from "@/components/sections/SignupSection";
import AboutSection from "@/components/sections/AboutSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutSection />
      <SignupSection />
    </main>
  );
}
