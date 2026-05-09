const flow = [
  "Website builds trust",
  "Social media builds attention",
  "SEO brings discovery",
  "Ads bring faster leads",
  "WhatsApp closes the conversation",
];

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">
            One Website Becomes a Full Growth System
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#475467]">
            Start with one strong website. Connect it to social media, search visibility, ads, and WhatsApp. That is how attention becomes enquiries.
          </p>
        </div>

        <div className="mt-10 rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {flow.map((item, idx) => (
              <div key={item} className="relative rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-4 transition hover:-translate-y-0.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">Step {idx + 1}</p>
                <p className="mt-1 text-sm font-semibold text-[#121212]">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center font-[var(--font-sora)] text-xl font-bold tracking-tight text-[#121212] sm:text-2xl">
            One system. One team. One place to manage everything.
          </p>
        </div>
      </div>
    </section>
  );
}
