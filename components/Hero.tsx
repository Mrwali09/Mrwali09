export default function Hero() {
  return (
    <section className="relative isolate bg-[#FAFAFA] pb-24 pt-8 md:pt-14">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-10 h-52 w-52 -translate-x-1/2 rounded-full bg-[#128C7E]/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 md:items-center md:gap-12 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-[#E5E7EB] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[#667085] shadow-sm">
            Hybrid Trust System v1.0
          </p>
          <h1 className="font-[var(--font-sora)] text-4xl font-extrabold leading-tight tracking-tight text-[#121212] sm:text-5xl lg:text-6xl">
            We Build & Grow Businesses Online
          </h1>
          <p className="mt-4 max-w-xl text-base font-medium leading-relaxed text-[#475467] sm:text-lg">
            Websites, social media, SEO, ads, WhatsApp funnels, and automation — all in one place for local businesses that want real growth.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]"
            >
              Get Started on WhatsApp
            </a>
            <a
              href="#packages"
              className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-[#121212] bg-transparent px-6 text-sm font-semibold text-[#121212] transition hover:bg-[#121212] hover:text-white"
            >
              View Packages
            </a>
          </div>

          <p className="mt-4 text-sm font-medium text-[#667085]">
            Fast setup. Clear pricing. Real business growth.
          </p>
        </div>

        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-7">
          <div className="space-y-4">
            {[
              "Website setup with domain, hosting, and SSL",
              "WhatsApp enquiry flow connected to your business",
              "Growth-ready base for SEO, social, and ads",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-4">
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#128C7E]" />
                <p className="text-sm font-medium text-[#475467]">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
