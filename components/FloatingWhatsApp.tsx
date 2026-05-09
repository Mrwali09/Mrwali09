import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/919999999999"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-20 right-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#128C7E] px-4 text-sm font-semibold text-white shadow-[0_6px_0_#0E6E65] transition hover:-translate-y-0.5 active:translate-y-[2px] active:shadow-[0_3px_0_#0E6E65] md:bottom-6 md:right-6"
    >
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
      <span className="sm:hidden">WhatsApp</span>
    </a>
  );
}
