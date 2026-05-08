import { MessageCircleMore } from "lucide-react";

const navItems = [
  { label: "Packages", href: "#packages" },
  { label: "Services", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "WhatsApp", href: "https://wa.me/919999999999" },
];

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-40 hidden border-b border-[#E5E7EB]/80 bg-[#FAFAFA]/95 backdrop-blur md:block">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="font-[var(--font-sora)] text-xl font-extrabold tracking-tight">
            Web & Growth Solutions
          </a>

          <ul className="flex items-center gap-6 text-sm font-medium text-[#475467]">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.label === "WhatsApp" ? "_blank" : undefined}
                  rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
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
        <ul className="mx-auto grid max-w-md grid-cols-4 rounded-full border border-[#E5E7EB] bg-white/95 p-1.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.2)] backdrop-blur">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target={item.label === "WhatsApp" ? "_blank" : undefined}
                rel={item.label === "WhatsApp" ? "noreferrer" : undefined}
                className="flex min-h-11 items-center justify-center rounded-full px-2 text-xs font-semibold text-[#475467] transition hover:bg-[#F2F4F7] hover:text-[#121212]"
              >
                {item.label === "WhatsApp" ? (
                  <span className="inline-flex items-center gap-1">
                    <MessageCircleMore className="h-3.5 w-3.5" />
                    WA
                  </span>
                ) : (
                  item.label
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
