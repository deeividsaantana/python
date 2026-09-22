import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Logos, Features, Demo, Testimonials, Pricing, Faq, Cta, Footer } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Features />
        <Demo />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
