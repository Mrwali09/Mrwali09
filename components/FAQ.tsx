"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "How long does it take to build a website?",
    a: "Most business websites are ready in 3–7 working days, depending on content and revisions.",
  },
  {
    q: "Are hosting, domain, and SSL included in the package?",
    a: "Yes. They are included in the Starter Plan and above. Renewal terms are shown clearly.",
  },
  {
    q: "Is a monthly plan required?",
    a: "No. One-time setup is available. Monthly plans are for clients who want ongoing growth, support, and management.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-8 space-y-3">
          {faqs.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <article key={item.q} className="rounded-2xl border border-[#E5E7EB] bg-white p-4 shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="flex w-full items-center justify-between gap-3 text-left"
                >
                  <span className="font-semibold text-[#121212]">{item.q}</span>
                  <ChevronDown className={`h-4 w-4 text-[#667085] transition ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen ? <p className="mt-3 text-sm font-medium leading-relaxed text-[#475467]">{item.a}</p> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
