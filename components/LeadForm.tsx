"use client";

import { FormEvent, useState } from "react";

type LeadFormProps = { selectedPackage: string };

export default function LeadForm({ selectedPackage }: LeadFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hi, I am interested in the ${selectedPackage} for my business. My name is ${name}, and my number is ${phone}.${message ? ` ${message}` : ""}`;
    window.open(`https://wa.me/919999999999?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <section id="lead-form" className="scroll-mt-24 bg-[#FAFAFA] py-12 md:py-20">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-8">
          <h2 className="font-[var(--font-sora)] text-2xl font-bold tracking-tight text-[#121212] sm:text-3xl">Get Your Custom Growth Plan</h2>
          <form onSubmit={submit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input required placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="min-h-12 rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none ring-[#128C7E] focus:ring-2 sm:col-span-1" />
            <input required placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} className="min-h-12 rounded-xl border border-[#D0D5DD] px-4 text-sm outline-none ring-[#128C7E] focus:ring-2 sm:col-span-1" />
            <input readOnly value={selectedPackage} className="min-h-12 rounded-xl border border-[#D0D5DD] bg-[#F9FAFB] px-4 text-sm font-semibold text-[#344054] sm:col-span-2" />
            <textarea placeholder="Optional Message" value={message} onChange={(e) => setMessage(e.target.value)} rows={4} className="rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none ring-[#128C7E] focus:ring-2 sm:col-span-2" />
            <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65] sm:col-span-2">Send Enquiry on WhatsApp</button>
          </form>
        </div>
      </div>
    </section>
  );
}
