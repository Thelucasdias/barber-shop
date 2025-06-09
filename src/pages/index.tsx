import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SignupSection from "@/components/SignupSection";
import AboutSection from "@/components/AboutSection";

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
