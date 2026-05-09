import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Ecosystem from "@/components/Ecosystem";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="relative overflow-x-clip">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Services />
        <Pricing />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
