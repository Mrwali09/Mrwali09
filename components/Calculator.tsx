"use client";

import { useMemo, useState } from "react";

const items = [
  { key: "website", label: "Need a Website?", price: 7999 },
  { key: "hosting", label: "Need Hosting?", price: 1999 },
  { key: "social", label: "Need Social Media Management?", price: 3499 },
  { key: "seo", label: "Need SEO?", price: 3999 },
  { key: "ads", label: "Need Ads?", price: 2999 },
  { key: "wa", label: "Need WhatsApp Automation?", price: 3499 },
  { key: "ecom", label: "Need E-Commerce?", price: 5999 },
  { key: "maintenance", label: "Need Maintenance?", price: 2499 },
] as const;

export default function Calculator() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (key: string) => {
    setSelected((prev) => (prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key]));
  };

  const { subtotal, discount, total } = useMemo(() => {
    const raw = items.filter((i) => selected.includes(i.key)).reduce((sum, i) => sum + i.price, 0);
    const cut = selected.length >= 3 ? Math.round(raw * 0.12) : 0;
    return { subtotal: raw, discount: cut, total: raw - cut };
  }, [selected]);

  return (
    <section id="calculator" className="bg-[#121212] pb-16 text-white md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-white/15 bg-white/5 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:p-7">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight sm:text-4xl">Build Your Custom Package</h2>
          <p className="mt-3 text-sm font-medium text-[#D0D5DD]">Add more, save more. Your custom total appears instantly.</p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {items.map((item) => {
              const active = selected.includes(item.key);
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggle(item.key)}
                  className={`flex min-h-12 items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    active
                      ? "border-[#128C7E] bg-[#128C7E]/15 text-white"
                      : "border-white/15 bg-white/5 text-[#EAECF0] hover:border-white/30"
                  }`}
                >
                  <span>{item.label}</span>
                  <span>₹{item.price.toLocaleString("en-IN")}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-6 rounded-2xl border border-white/15 bg-black/20 p-4">
            <div className="flex items-center justify-between text-sm text-[#D0D5DD]">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-[#D0D5DD]">
              <span>Bundle Discount</span>
              <span>-₹{discount.toLocaleString("en-IN")}</span>
            </div>
            {discount > 0 ? <p className="mt-2 text-xs font-semibold text-[#C5A059]">Bundle Discount Applied</p> : null}
            <div className="mt-3 flex items-center justify-between border-t border-white/15 pt-3">
              <span className="text-sm font-semibold text-white">Total</span>
              <span className="font-[var(--font-sora)] text-2xl font-bold">₹{total.toLocaleString("en-IN")}</span>
            </div>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]"
          >
            Get My Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
