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

const BASE_URL = "https://www.dreamsolarenergy.co";

// ─── Full SEO / AEO / GEO Metadata ────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  // ── Title & Description ──────────────────────────────────────────────────────
  title: {
    default: "Dream Solar Energy | Solar Systems in Vehari & South Punjab",
    template: "%s | Dream Solar Energy",
  },
  description: siteContent.meta.description,

  // ── Keywords ─────────────────────────────────────────────────────────────────
  keywords: [
    "Dream Solar Energy",
    "Solar Panels Vehari",
    "Solar Systems Pakistan",
    "Solar Installation South Punjab",
    "Solar Panels Burewala",
    "Solar Panels Mailsi",
    "Cut Electricity Bill Pakistan",
    "MEPCO Net Metering",
    "Solar Inverters Pakistan",
    "Solar Tube Well Punjab",
    "Hybrid Solar System Pakistan",
    "Lithium Battery Solar Pakistan",
    "Jinko Solar Pakistan",
    "Longi Solar Pakistan",
    "Huawei Inverter Pakistan",
    "Off Grid Solar Pakistan",
    "Solar System Price Pakistan 2024",
    "Best Solar Company Vehari",
    "Tier 1 Solar Panels Pakistan",
    "Solar Energy Vehari Punjab",
  ],

  // ── Canonical URL ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: BASE_URL,
  },

  // ── Authors & Publisher ───────────────────────────────────────────────────────
  authors: [{ name: "Dream Solar Energy", url: BASE_URL }],
  creator: "Dream Solar Energy",
  publisher: "Dream Solar Energy",

  // ── Open Graph (Facebook / WhatsApp / LinkedIn) ───────────────────────────────
  openGraph: {
    title: "Dream Solar Energy | Solar Systems in Vehari & South Punjab",
    description: siteContent.meta.description,
    url: BASE_URL,
    type: "website",
    locale: "en_PK",
    siteName: "Dream Solar Energy",
    images: [
      {
        url: "/dream-solar-logo.png",
        width: 1200,
        height: 630,
        alt: "Dream Solar Energy — Solar Systems in Vehari & South Punjab",
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ──────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Dream Solar Energy | Solar Systems in Vehari & South Punjab",
    description: siteContent.meta.description,
    images: ["/dream-solar-logo.png"],
  },

  // ── Favicon / App Icons ───────────────────────────────────────────────────────
  icons: {
    icon: [{ url: "/dream-solar-logo.png", type: "image/png" }],
    apple: "/dream-solar-logo.png",
    shortcut: "/dream-solar-logo.png",
  },

  // ── Google Search Console Verification ───────────────────────────────────────
  verification: {
    google: "google79ccc0d31c7d9c94",
  },

  // ── Robots Directive ──────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── App / Mobile ──────────────────────────────────────────────────────────────
  applicationName: "Dream Solar Energy",
  category: "Solar Energy",
  classification: "Business",
};

// ─── JSON-LD Structured Data (LocalBusiness + FAQ) ────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // LocalBusiness schema for AEO / Google Business
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#organization`,
      name: "Dream Solar Energy",
      alternateName: "Dream Solar",
      url: BASE_URL,
      logo: `${BASE_URL}/dream-solar-logo.png`,
      image: `${BASE_URL}/dream-solar-logo.png`,
      description:
        "Dream Solar Energy installs 100% genuine Tier-1 solar systems for homes, commercial properties, and agricultural tube wells across South Punjab, Pakistan. Cut electricity bills by up to 90%.",
      telephone: "+923202200884",
      email: "info@dreamsolarenergy.co",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Club Road, Ghalla Mandi, Block B",
        addressLocality: "Vehari",
        addressRegion: "Punjab",
        postalCode: "61100",
        addressCountry: "PK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "30.042103",
        longitude: "72.35186",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Saturday",
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
          ],
          opens: "08:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "09:00",
          closes: "12:30",
        },
      ],
      priceRange: "PKR 6,50,000 – PKR 29,50,000",
      currenciesAccepted: "PKR",
      paymentAccepted: "Cash, Bank Transfer, Cheque",
      areaServed: [
        {
          "@type": "City",
          name: "Vehari",
          containedInPlace: { "@type": "State", name: "Punjab" },
        },
        { "@type": "City", name: "Burewala" },
        { "@type": "City", name: "Mailsi" },
        { "@type": "AdministrativeArea", name: "South Punjab" },
      ],
      serviceType: [
        "Solar Panel Installation",
        "Hybrid Solar System",
        "Solar Tube Well",
        "MEPCO Net Metering",
        "Lithium Battery Storage",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Solar System Packages",
        itemListElement: [
          {
            "@type": "Offer",
            name: "4 kW Solar System",
            price: "650000",
            priceCurrency: "PKR",
            description: "4 kW hybrid solar system for 3–5 Marla homes",
          },
          {
            "@type": "Offer",
            name: "6 kW Solar System",
            price: "980000",
            priceCurrency: "PKR",
            description: "6 kW hybrid solar system for 5–10 Marla homes",
          },
          {
            "@type": "Offer",
            name: "10 kW Solar System",
            price: "1620000",
            priceCurrency: "PKR",
            description: "10 kW system with net metering for 1 Kanal homes",
          },
          {
            "@type": "Offer",
            name: "20 kW Solar Tube Well",
            price: "2950000",
            priceCurrency: "PKR",
            description: "20 kW VFD solar pumping for agricultural tube wells",
          },
        ],
      },
      sameAs: [
        `${BASE_URL}`,
      ],
    },

    // Website schema
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "Dream Solar Energy",
      description: siteContent.meta.description,
      publisher: { "@id": `${BASE_URL}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },

    // FAQ schema for AEO (Answer Engine Optimisation)
    {
      "@type": "FAQPage",
      "@id": `${BASE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does a solar system cost in Vehari, Pakistan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A 4 kW solar system costs approximately PKR 6,50,000 and is ideal for 3–5 Marla homes. A 10 kW system with net metering costs around PKR 16,20,000 for 1 Kanal homes. Dream Solar Energy provides free on-site quotes in Vehari, Burewala, and Mailsi.",
          },
        },
        {
          "@type": "Question",
          name: "How much can I save on electricity bills with solar in Pakistan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A solar system can reduce your monthly electricity bill by 70% to 90%. One customer in Officers Colony, Vehari reduced their bill from PKR 54,000 to under PKR 2,500 per month after installing a 10 kW hybrid solar system.",
          },
        },
        {
          "@type": "Question",
          name: "What is the payback period for solar panels in Pakistan?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The typical payback period for a solar system in Pakistan is 2.5 to 3 years. After that, you generate free electricity for the remaining 22+ years of the panel's 25-year warranty period.",
          },
        },
        {
          "@type": "Question",
          name: "What solar panel brands does Dream Solar Energy install?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Dream Solar Energy installs 100% original Tier-1 panels and equipment from Jinko Solar, Longi Solar, JA Solar (panels), Huawei, Knox, Inverex, and Growatt (inverters), and Pylontech (lithium batteries). Every panel has a verifiable manufacturer barcode.",
          },
        },
        {
          "@type": "Question",
          name: "Does Dream Solar Energy handle MEPCO Net Metering in Vehari?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dream Solar Energy handles all MEPCO net metering paperwork, WAPDA and DISCO approvals, and bi-directional green meter installation end-to-end. You can legally sell extra electricity back to the national grid.",
          },
        },
        {
          "@type": "Question",
          name: "Do you install solar tube wells for agriculture?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Dream Solar Energy installs solar tube well systems from 5 HP to 30 HP using VFD solar pumping technology. Farmers in the Mailsi agrarian belt are irrigating 45+ acres at zero diesel cost.",
          },
        },
      ],
    },
  ],
};

// ─── Root Layout ───────────────────────────────────────────────────────────────
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
      <head>
        {/* JSON-LD Structured Data for SEO / AEO / GEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* llms.txt discovery hint for AI crawlers */}
        <link rel="ai-content-policy" href="/llms.txt" />
      </head>
      <body className="bg-solar-alabaster text-solar-navy font-sans min-h-screen relative selection:bg-solar-amber/30 selection:text-solar-navy">
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
