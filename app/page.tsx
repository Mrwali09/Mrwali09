"use client";

import { useMemo, useState } from "react";
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
  const [selectedPackage, setSelectedPackage] = useState("Growth Plan");

  const packageMessage = useMemo(() => selectedPackage, [selectedPackage]);

  return (
    <div className="relative overflow-x-clip bg-[#FAFAFA]">
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <Services />
        <Pricing onSelectPackage={setSelectedPackage} />
        <Calculator onSelectPackage={setSelectedPackage} />
        <LeadForm selectedPackage={packageMessage} />
        <FAQ />
      </main>
      <FloatingWhatsApp />
    </div>
  );
}
