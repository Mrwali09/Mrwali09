const flowItems = [
  "Website builds trust",
  "Social media builds attention",
  "SEO brings discovery",
  "Ads bring faster leads",
  "WhatsApp closes the conversation",
];

export default function Ecosystem() {
  return (
    <section id="services" className="bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">
            One Website Becomes a Full Growth System
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-[#475467]">
            Start with one strong website. Connect it to social media, search visibility, ads, and WhatsApp. That is how attention becomes enquiries.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] md:col-span-2">
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {flowItems.map((item, i) => (
                <div
                  key={item}
                  className="group rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#128C7E]/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#667085]">Step {i + 1}</p>
                  <p className="mt-1 text-sm font-semibold text-[#121212]">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)]">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-dashed border-[#128C7E]/40 bg-[#128C7E]/5 p-5">
              <p className="text-sm font-semibold text-[#128C7E]">Growth Loop</p>
              <p className="mt-3 font-[var(--font-sora)] text-2xl font-bold tracking-tight text-[#121212]">One system. One team.</p>
              <p className="mt-2 text-sm font-medium text-[#475467]">One place to manage everything.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
