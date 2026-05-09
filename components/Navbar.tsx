import { Boxes, CircleHelp, MessageCircleMore, Package } from "lucide-react";

const navItems = [
  { label: "Packages", href: "#packages", icon: Package },
  { label: "Services", href: "#services", icon: Boxes },
  { label: "FAQ", href: "#faq", icon: CircleHelp },
  { label: "WhatsApp", href: "https://wa.me/919999999999", icon: MessageCircleMore, external: true },
];

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-40 hidden border-b border-[#E5E7EB]/80 bg-[#FAFAFA]/95 backdrop-blur md:block">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-2 font-[var(--font-sora)] text-lg font-extrabold tracking-tight lg:text-xl">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-[#121212] text-white">WG</span>
            Web & Growth Solutions
          </a>

          <ul className="flex items-center gap-6 text-sm font-semibold text-[#475467]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="transition-colors hover:text-[#121212]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <nav className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <ul className="mx-auto grid max-w-md grid-cols-4 rounded-full border border-[#E5E7EB] bg-white/95 p-1.5 shadow-[0_10px_24px_-12px_rgba(0,0,0,0.2)] backdrop-blur">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  className="flex min-h-11 flex-col items-center justify-center rounded-full px-2 text-[11px] font-semibold text-[#667085] transition hover:bg-[#F2F4F7] hover:text-[#121212]"
                >
                  <Icon className="mb-0.5 h-3.5 w-3.5" />
                  {item.label === "WhatsApp" ? "WA" : item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
