import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Web & Growth Solutions",
  description:
    "We build and grow local businesses with websites, social media, SEO, ads, and WhatsApp automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${sora.variable} min-h-screen bg-[#FAFAFA] font-[var(--font-inter)] text-[#121212] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
