import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Calculator from "@/components/Calculator";
import Ecosystem from "@/components/Ecosystem";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LeadForm from "@/components/LeadForm";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="relative overflow-x-clip bg-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Services />
        <Pricing />
        <Calculator />
        <LeadForm />
        <FAQ />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
