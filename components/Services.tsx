import { Bot, Megaphone, Search, Smartphone, Wrench } from "lucide-react";

const services = [
  {
    title: "Website Development",
    description: "Custom business websites that look professional and convert visitors into leads.",
    icon: Smartphone,
  },
  {
    title: "Social Media Management",
    description: "Instagram and Facebook pages managed with posts, captions, and regular brand activity.",
    icon: Megaphone,
  },
  {
    title: "SEO & Google Presence",
    description: "Get found on Google Search and Google Maps by local customers.",
    icon: Search,
  },
  {
    title: "Ads & Growth",
    description: "Run Meta and Google ads to bring faster traffic, leads, and enquiries.",
    icon: Megaphone,
  },
  {
    title: "WhatsApp & Automation",
    description: "Direct enquiry funnels, chatbots, and instant lead routing to save time.",
    icon: Bot,
  },
  {
    title: "Maintenance & Support",
    description: "Keep your website fast, secure, updated, and working without stress.",
    icon: Wrench,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#FAFAFA] pb-16 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-[var(--font-sora)] text-3xl font-bold tracking-tight text-[#121212] sm:text-4xl">
          Services That Drive Real Enquiries
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                key={service.title}
                className="rounded-[24px] border border-[#E5E7EB] bg-white p-5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] transition hover:-translate-y-1"
              >
                <span className="mb-4 inline-flex rounded-2xl border border-[#E5E7EB] bg-[#FCFCFD] p-3">
                  <Icon className="h-5 w-5 text-[#121212]" />
                </span>
                <h3 className="font-[var(--font-sora)] text-lg font-bold text-[#121212]">{service.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-[#475467]">{service.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
