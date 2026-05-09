export default function LeadForm() {
  return (
    <section id="lead-form" className="scroll-mt-24 bg-[#FAFAFA] py-12 pb-32 md:py-20 md:pb-24">
      <div className="mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-8">
          <h2 className="font-[var(--font-sora)] text-2xl font-bold tracking-tight text-[#121212] sm:text-3xl">Get Your Custom Growth Plan</h2>
          <p className="mt-2 text-sm font-medium text-[#475467]">Tell us about your business and we will reach out with the best setup for your goals.</p>

          <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="sm:col-span-1">
              <span className="mb-1.5 block text-sm font-semibold text-[#344054]">Name</span>
              <input type="text" className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none ring-[#128C7E] focus:ring-2" />
            </label>

            <label className="sm:col-span-1">
              <span className="mb-1.5 block text-sm font-semibold text-[#344054]">Phone / WhatsApp</span>
              <input type="tel" className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none ring-[#128C7E] focus:ring-2" />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-[#344054]">Business Type</span>
              <input type="text" className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none ring-[#128C7E] focus:ring-2" />
            </label>

            <label className="sm:col-span-2">
              <span className="mb-1.5 block text-sm font-semibold text-[#344054]">What do you need help with?</span>
              <textarea rows={4} className="w-full rounded-xl border border-[#D0D5DD] px-4 py-3 text-sm outline-none ring-[#128C7E] focus:ring-2" />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#128C7E] px-6 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]"
              >
                Request Strategy Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
