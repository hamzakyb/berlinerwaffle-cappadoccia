import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Marquee />
        <Menu />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
}
