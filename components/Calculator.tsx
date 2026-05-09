type CalculatorProps = {
  selectedPackage: string;
  onSelectPackage: (planName: string) => void;
};

const suggestedPackages = ["Starter Plan", "Growth Plan", "Premium Plan"];

export default function Calculator({ selectedPackage, onSelectPackage }: CalculatorProps) {
  return (
    <section id="calculator" className="scroll-mt-24 bg-[#FAFAFA] py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[24px] border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] sm:p-8">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">Growth Budget Calculator</h2>
          <p className="mt-3 max-w-2xl text-sm font-medium leading-relaxed text-[#475467] sm:text-base">
            Estimate what plan fits your goals. Pick a package to continue and we will tailor the strategy in the form below.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {suggestedPackages.map((plan) => (
              <button
                key={plan}
                type="button"
                onClick={() => onSelectPackage(plan)}
                className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  selectedPackage === plan
                    ? "border-[#128C7E] bg-[#128C7E] text-white"
                    : "border-[#D0D5DD] bg-white text-[#344054] hover:border-[#128C7E]/50"
                }`}
              >
                {plan}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
