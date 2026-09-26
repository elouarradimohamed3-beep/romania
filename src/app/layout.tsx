import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieConsent from "@/components/CookieConsent";
import ExitIntent from "@/components/ExitIntent";
import MobileCta from "@/components/MobileCta";
import Analytics from "@/components/Analytics";
import JsonLd from "@/components/JsonLd";
import { LanguageProvider } from "@/lib/i18n";
import { site } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${site.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Romanian IPTV – Cel mai bun IPTV România | 55.000+ canale & 4K",
    template: "%s | Romanian IPTV",
  },
  description:
    "IPTV România cu peste 55.000 de canale live și 90.000 de filme la cerere, în calitate până la 4K. Uptime 99,9%, suport 24/7 și garanție de returnare a banilor. Compatibil cu Smart TV, Fire Stick, Android și iOS.",
  applicationName: "Romanian IPTV",
  authors: [{ name: "Romanian IPTV" }],
  creator: "Romanian IPTV",
  publisher: "Romanian IPTV",
  category: "Entertainment",
  keywords: [
    "IPTV România",
    "IPTV Romania",
    "abonament IPTV",
    "canale românești online",
    "IPTV 4K",
    "IPTV Smart TV",
    "IPTV Fire Stick",
    "televiziune online România",
    "IPTV diaspora",
    "cel mai bun IPTV",
  ],
  alternates: {
    canonical: "/",
    languages: { "ro-RO": "/", "x-default": "/" },
  },
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Romanian IPTV – Poarta Ta către Divertisment Nelimitat",
    description:
      "Peste 55.000 de canale live și 90.000 de filme la cerere, cu disponibilitate 100% și calitate până la 4K.",
    url: baseUrl,
    siteName: "Romanian IPTV",
    locale: "ro_RO",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: "/hero.jpg", width: 1355, height: 768, alt: "Romanian IPTV – canale live și filme la cerere" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romanian IPTV – 55.000+ canale & 4K",
    description: "55.000+ canale live și 90.000+ filme la cerere, în 4K. Suport 24/7.",
    images: ["/hero.jpg"],
  },
  verification: {
    // Adaugă codul din Google Search Console (Setări > Verificare proprietate)
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={geist.variable}>
      <body className="min-h-screen antialiased">
        <JsonLd />
        <Analytics />
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <MobileCta />
          <ExitIntent />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
