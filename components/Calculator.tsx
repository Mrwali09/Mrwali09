"use client";

import { useMemo, useState } from "react";

type CalculatorProps = { onSelectPackage: (pkg: string) => void };

const options = [
  { label: "Need a Website?", price: 7999 },
  { label: "Need Hosting?", price: 1999 },
  { label: "Need Social Media Management?", price: 3499 },
  { label: "Need SEO?", price: 3999 },
  { label: "Need Ads?", price: 2999 },
  { label: "Need WhatsApp Automation?", price: 2499 },
  { label: "Need E-Commerce?", price: 4999 },
  { label: "Need Maintenance?", price: 1999 },
];

export default function Calculator({ onSelectPackage }: CalculatorProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const subtotal = useMemo(() => options.filter((o) => selected.includes(o.label)).reduce((a, b) => a + b.price, 0), [selected]);
  const discount = selected.length >= 3 ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  return (
    <section id="calculator" className="scroll-mt-24 bg-[#121212] py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] sm:p-8">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight sm:text-4xl">Build Your Custom Package</h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#D0D5DD]">Select only the services you need. The total updates automatically, and bundle discounts apply when you combine more services.</p>
          <p className="mt-2 text-sm font-semibold text-[#C5A059]">Add more, save more. Your custom total appears instantly.</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">{options.map((item) => {
            const active = selected.includes(item.label);
            return <button key={item.label} type="button" onClick={() => setSelected((s) => (s.includes(item.label) ? s.filter((x) => x !== item.label) : [...s, item.label]))} className={`flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${active ? "border-[#128C7E] bg-[#128C7E]/15 text-white" : "border-white/15 bg-white/0 text-[#EAECF0]"}`}><span>{item.label}</span><span>₹{item.price.toLocaleString("en-IN")}</span></button>;
          })}</div>
          <div className="mt-6 rounded-2xl border border-white/15 bg-black/20 p-4">
            <p className="text-sm text-[#EAECF0]">Subtotal: ₹{subtotal.toLocaleString("en-IN")}</p>
            {discount > 0 ? <p className="text-sm font-semibold text-[#C5A059]">Bundle Discount Applied: -₹{discount.toLocaleString("en-IN")}</p> : null}
            <p className="mt-2 font-[var(--font-sora)] text-2xl font-bold">Total: ₹{total.toLocaleString("en-IN")}</p>
          </div>
          <a href="#lead-form" onClick={() => onSelectPackage("Custom Package")} className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]">Get My Custom Quote</a>
        </div>
      </div>
    </section>
  );
}
