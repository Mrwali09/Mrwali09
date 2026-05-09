import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web & Growth Solutions",
  description:
    "Websites, social media, SEO, ads, WhatsApp funnels, and automation — all in one place for local businesses that want real growth.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${inter.variable} min-h-screen bg-[#FAFAFA] font-[var(--font-inter)] text-[#121212] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
