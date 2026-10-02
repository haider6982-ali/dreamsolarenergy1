import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import ClientProviders from "@/components/providers/ClientProviders";
import { siteContent } from "@/content/site";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: siteContent.meta.title,
  description: siteContent.meta.description,
  keywords: [
    "Dream Solar Energy",
    "Solar Panels Vehari",
    "Solar Systems Pakistan",
    "Cut Electricity Bill",
    "MEPCO Net Metering",
    "Solar Inverters Pakistan",
    "Solar Tube Well Punjab",
  ],
  openGraph: {
    title: siteContent.meta.title,
    description: siteContent.meta.description,
    type: "website",
    locale: "en_PK",
    siteName: siteContent.meta.companyName,
    images: [
      {
        url: "/dream-solar-logo.jpg",
        width: 800,
        height: 800,
        alt: siteContent.meta.companyName,
      },
    ],
  },
  icons: {
    icon: "/dream-solar-logo.jpg",
    apple: "/dream-solar-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${plusJakartaSans.variable} ${fraunces.variable} antialiased`}
    >
      <body className="bg-solar-alabaster text-solar-navy font-sans min-h-screen relative selection:bg-solar-amber/30 selection:text-solar-navy">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}

