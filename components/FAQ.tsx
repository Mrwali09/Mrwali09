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
  return (
    <section id="faq" className="scroll-mt-24 bg-[#FAFAFA] py-12 pb-32 md:py-20 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4">{faqs.map((item) => <article key={item.q} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]"><h3 className="text-base font-semibold text-[#121212]">{item.q}</h3><p className="mt-2 text-sm font-medium leading-relaxed text-[#475467]">{item.a}</p></article>)}</div>

        <div className="mt-10 rounded-[24px] border border-[#E5E7EB] bg-white p-6 text-center shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-8">
          <h3 className="font-[var(--font-sora)] text-2xl font-bold tracking-tight text-[#121212]">Ready To Grow Your Business?</h3>
          <p className="mt-2 text-sm font-medium text-[#475467]">Message us on WhatsApp today and choose the right package for your business.</p>
          <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="mx-auto mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]">Chat on WhatsApp Now</a>
          <p className="mt-3 text-xs font-semibold text-[#667085]">Quick reply. Clear pricing. Simple process. No time waste.</p>
        </div>
      </div>
    </section>
  );
}
