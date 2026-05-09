const faqs = [
  {
    q: "How quickly can you launch my website?",
    a: "Most starter websites go live in 5 to 10 working days once content and details are shared.",
  },
  {
    q: "Do you only work with local businesses?",
    a: "We mainly support local and regional businesses, but we can work with brands anywhere in India.",
  },
  {
    q: "Can I start with one service and add more later?",
    a: "Yes. We can begin with website setup and add SEO, social, ads, and automation as you grow.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-24 bg-[#FAFAFA] py-12 pb-32 md:py-20 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((item) => (
            <article key={item.q} className="rounded-2xl border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
              <h3 className="text-base font-semibold text-[#121212]">{item.q}</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-[#475467]">{item.a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
