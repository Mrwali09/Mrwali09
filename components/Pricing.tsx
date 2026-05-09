const plans = [
  {
    name: "Starter Plan",
    price: "₹7,999 One-Time",
    line: "Get your business online",
    description: "Best for businesses that want a proper online presence with the basics done right.",
    includes: ["Website", "Hosting", "Domain", "SSL", "Business email", "Google profile", "WhatsApp funnel"],
  },
  {
    name: "Growth Plan",
    price: "₹12,999 One-Time + ₹2,499/month or ₹25,000/year",
    line: "Turn visibility into leads",
    description: "This is the plan for owners who want visibility, branding, and regular customer enquiries.",
    badge: "Best for Tier-2 Businesses",
    includes: ["Everything in Starter", "Social media management", "SEO", "Launch boost", "Ads setup", "Reporting"],
  },
  {
    name: "Premium Plan",
    price: "₹19,999 One-Time + ₹4,999/month or ₹50,000/year",
    line: "Run your digital system on autopilot",
    description: "For businesses that want full digital handling, automation, maintenance, and priority support.",
    includes: ["Everything in Growth", "Chatbot", "Payment gateway", "Ad management", "Backups", "Security", "Support"],
  },
];

export default function Pricing() {
  return (
    <section id="packages" className="bg-[#121212] py-16 text-white md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight sm:text-4xl">Choose the Right Growth Package</h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3 lg:items-end">
          {plans.map((plan) => {
            const isGrowth = plan.name === "Growth Plan";

            return (
              <article
                key={plan.name}
                className={`rounded-[24px] border p-6 backdrop-blur-xl ${
                  isGrowth
                    ? "scale-[1.05] border-[#128C7E]/70 bg-white/10 shadow-[0_0_0_1px_rgba(18,140,126,0.45),0_20px_60px_rgba(0,0,0,0.35)] lg:scale-110"
                    : "border-white/15 bg-white/5 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                }`}
              >
                {plan.badge ? (
                  <span className="mb-3 inline-flex rounded-full border border-[#C5A059]/70 bg-[#C5A059]/15 px-3 py-1 text-xs font-semibold text-[#EEDBB2]">
                    {plan.badge}
                  </span>
                ) : null}

                <h3 className="font-[var(--font-sora)] text-2xl font-bold">{plan.name}</h3>
                <p className="mt-2 text-lg font-semibold text-white">{plan.price}</p>
                <p className="mt-2 text-sm font-semibold text-[#D0D5DD]">{plan.line}</p>
                <p className="mt-3 text-sm text-[#EAECF0]">{plan.description}</p>

                <ul className="mt-5 space-y-2 text-sm text-[#F2F4F7]">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#128C7E]" />
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#128C7E] px-5 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65]"
                >
                  Choose {plan.name}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
