export interface BrandPartner {
  name: string;
  tag: string;
}

export interface HardwareCrucibleItem {
  id: string;
  title: string;
  partner: string;
  specs: string;
  description: string;
  badge: string;
  image: string;
}

export interface CalculatorTier {
  kw: number;
  monthlyUnits: number;
  approxCost: number;
  recommendedFor: string;
  runs: string;
}

export interface ProjectInstallation {
  id: string;
  title: string;
  location: string;
  type: string;
  impact: string;
  capacity: string;
  image: string;
  tags: string[];
}

export interface EngineeringStandard {
  number: string;
  title: string;
  description: string;
}

export interface SiteContent {
  meta: {
    title: string;
    description: string;
    companyName: string;
    tagline: string;
    coordinates: string;
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    address: string;
    hours: string;
  };
  navigation: {
    links: { label: string; href: string }[];
    ctaQuote: string;
    ctaCall: string;
  };
  hero: {
    badge: string;
    eyebrow: string;
    headlineWords: string[];
    italicAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    liveTelemetry: {
      location: string;
      radiationIndex: string;
      peakSunHours: string;
      efficiencyRating: string;
    };
    metrics: { value: string; label: string; detail: string }[];
  };
  tension: {
    badge: string;
    eyebrow: string;
    headline: string;
    mainQuote: string;
    author: string;
    statLeft: { value: string; label: string; subtext: string };
    statRight: { value: string; label: string; subtext: string };
    gridTrapTitle: string;
    gridTrapPoints: string[];
    solarFreedomTitle: string;
    solarFreedomPoints: string[];
  };
  crucible: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: HardwareCrucibleItem[];
    brands: BrandPartner[];
  };
  calculator: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    ratePerUnit: number;
    defaultBill: number;
    minBill: number;
    maxBill: number;
    step: number;
    tiers: CalculatorTier[];
  };
  odyssey: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    projects: ProjectInstallation[];
  };
  standards: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    items: EngineeringStandard[];
  };
  conversion: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryButton: string;
    secondaryButton: string;
    whatsappButton: string;
    officeHeading: string;
    guaranteeNotice: string;
  };
  footer: {
    badge: string;
    colophon: string;
    mission: string;
    directContact: string;
    backToTop: string;
  };
}

export const siteContent: SiteContent = {
  meta: {
    title: "Dream Solar Energy | Solar Systems in Vehari & South Punjab",
    description:
      "Cut your electricity bills by up to 90% with authentic Tier-1 solar systems. Authorized sales & turnkey installation for homes, commercial shops, and tube wells across South Punjab.",
    companyName: "Dream Solar Energy",
    tagline: "Clean Energy • Brighter Tomorrow",
    coordinates: "VEHARI • BUREWALA • MAILSI",
    phone: "+923202200884",
    phoneFormatted: "0320-2200884",
    whatsappNumber: "923202200884",
    address: "Allama Iqbal Road, Near Bank of Punjab, Vehari, Punjab, Pakistan",
    hours: "Sat–Thu: 8:00 AM – 7:00 PM | Friday: 9:00 AM – 12:30 PM",
  },
  navigation: {
    links: [
      { label: "About Us", href: "/about" },
      { label: "Products", href: "/products" },
      { label: "Services", href: "/services" },
      { label: "Calculator", href: "/calculator" },
      { label: "Contact", href: "/contact" },
    ],
    ctaQuote: "Get Free Quote",
    ctaCall: "0320-2200884",
  },
  hero: {
    badge: "CLEAN ENERGY • VEHARI & SOUTH PUNJAB",
    eyebrow: "RELIABLE SOLAR INSTALLATIONS",
    headlineWords: ["CUT", "YOUR", "BILLS"],
    italicAccent: "Save up to 90% every month",
    subtitle:
      "Run your air conditioners, water pumps, and home appliances with zero load-shedding tension. 100% original Tier-1 solar panels, hybrid inverters, and official MEPCO green net-metering installed by certified engineers.",
    ctaPrimary: "Calculate Your Savings",
    ctaSecondary: "See Real Installations",
    liveTelemetry: {
      location: "VEHARI (SOUTH PUNJAB)",
      radiationIndex: "High Sun Irradiance",
      peakSunHours: "6.5 Peak Sun Hours",
      efficiencyRating: "Up to 90% Bill Reduction",
    },
    metrics: [
      { value: "500+", label: "Systems Installed", detail: "Homes & Farms in Punjab" },
      { value: "100%", label: "Original Hardware", detail: "Scannable OEM Barcodes" },
      { value: "25 Yrs", label: "Panel Warranty", detail: "Linear Performance" },
      { value: "Rs. 0", label: "Daytime Expense", detail: "With Net Metering Export" },
    ],
  },
  tension: {
    badge: "THE RISING ELECTRICITY CRISIS",
    eyebrow: "WHY GO SOLAR TODAY?",
    headline: "Electricity Bills Keep Rising. The Sun Gives Power For Free.",
    mainQuote:
      "WAPDA electricity bills in Pakistan have crossed Rs. 70 per unit with heavy taxes and fuel adjustments. Constant load-shedding hurts families and businesses. Installing a solar system gives you permanent relief—you produce your own electricity and save thousands every single month.",
    author: "DREAM SOLAR ENERGY PROMISE",
    statLeft: {
      value: "Rs. 70+",
      label: "CURRENT WAPDA UNIT RATE",
      subtext: "Includes surcharges, taxes, and monthly fuel price adjustments.",
    },
    statRight: {
      value: "Rs. 0.00",
      label: "DAYTIME SOLAR POWER COST",
      subtext: "Once installed, your solar panels generate free electricity for 25+ years.",
    },
    gridTrapTitle: "The Problem With Regular Grid Power",
    gridTrapPoints: [
      "Unpredictable electricity price hikes every few months",
      "Frustrating load-shedding during peak 45°C+ summer heat",
      "Expensive electricity bills that drain household and shop budgets",
      "Paying lakhs to WAPDA every year with zero asset ownership",
    ],
    solarFreedomTitle: "The Relief With Dream Solar",
    solarFreedomPoints: [
      "Slash your monthly electricity bill by 70% to 90% right away",
      "Automatic battery backup so lights and fans never shut down",
      "Sell extra units back to WAPDA with official MEPCO Green Meter",
      "The entire system pays for itself in just 2.5 to 3 years",
    ],
  },
  crucible: {
    badge: "100% ORIGINAL COMPONENTS",
    eyebrow: "HARDWARE YOU CAN TRUST",
    title: "Only Genuine Tier-1 Hardware. Zero Duplicate Parts.",
    subtitle:
      "A solar system must last 25 years. We only install original Tier-1 solar panels, certified European hybrid inverters, and heavy rust-proof frames.",
    items: [
      {
        id: "topcon-modules",
        title: "Tier-1 N-Type Solar Panels",
        partner: "Jinko Solar & Longi Solar (585W–620W)",
        specs: "High Efficiency • Verifiable Barcodes",
        description:
          "Latest N-type bifacial panels that generate maximum power even in intense 50°C South Punjab summer weather. Every panel comes with a scannable serial number.",
        badge: "100% Original",
        image: "/images/tier1-solar-panels.jpg",
      },
      {
        id: "hybrid-inverters",
        title: "Smart Hybrid Inverters",
        partner: "Huawei, Knox & Inverex",
        specs: "Automatic Switching • Mobile Monitoring",
        description:
          "Smart inverters that intelligently combine solar, batteries, and the grid. When power cuts happen, your ACs and computers keep running without any flicker.",
        badge: "Smart Inverter",
        image: "/images/smart-hybrid-inverter.jpg",
      },
      {
        id: "lithium-storage",
        title: "Lithium Battery Storage (LiFePO4)",
        partner: "Pylontech & Inverex Nitrox",
        specs: "6,000+ Cycles • 10-Year Battery Life",
        description:
          "Modern wall-mounted lithium batteries that store excess daylight to power your air conditioner, refrigerator, and fans through pitch-black nights.",
        badge: "Night Backup",
        image: "/images/lithium-battery-storage.jpg",
      },
      {
        id: "galvanized-iron",
        title: "Heavy-Duty Galvanized Structures",
        partner: "14 & 16-Gauge Hot-Dip Galvanized Iron",
        specs: "130 km/h Wind Resistance • Rust Proof",
        description:
          "Heavy elevated rooftop and agricultural iron structures securely anchored to your roof beams. Built to withstand strong winds and monsoon storms without rusting.",
        badge: "Storm Proof",
        image: "/images/galvanized-mounting-structure.jpg",
      },
    ],
    brands: [
      { name: "Jinko Solar", tag: "N-Type TOPCon Panels" },
      { name: "Longi Solar", tag: "Hi-MO 6 High Efficiency" },
      { name: "Huawei", tag: "SUN2000 European Inverters" },
      { name: "Knox Solar", tag: "Smart Hybrid Inverters" },
      { name: "Inverex", tag: "Nitrox & Lithium WallMount" },
      { name: "Pylontech", tag: "Long-Life Lithium Storage" },
      { name: "JA Solar", tag: "Tier-1 Solar Modules" },
      { name: "Growatt", tag: "Three-Phase Grid-Tied" },
    ],
  },
  calculator: {
    badge: "SAVINGS ESTIMATOR",
    eyebrow: "PLAN YOUR SYSTEM",
    title: "Calculate How Much You Can Save",
    subtitle:
      "Select your approximate monthly electricity bill below to see the right solar system size, your estimated monthly bill savings, and payback period.",
    ratePerUnit: 55,
    defaultBill: 35000,
    minBill: 5000,
    maxBill: 150000,
    step: 1000,
    tiers: [
      {
        kw: 4,
        monthlyUnits: 520,
        approxCost: 650000,
        recommendedFor: "3 to 5 Marla Homes",
        runs: "1 Inverter AC (1.5 Ton) + Refrigerator + Water Pump + Complete Fans & LED Lights",
      },
      {
        kw: 6,
        monthlyUnits: 820,
        approxCost: 980000,
        recommendedFor: "5 to 10 Marla Homes",
        runs: "2 Inverter ACs + Refrigerator + Deep Freezer + Water Pump + Full Night Battery Backup",
      },
      {
        kw: 8,
        monthlyUnits: 1100,
        approxCost: 1280000,
        recommendedFor: "10 Marla to 1 Kanal Homes",
        runs: "3 Inverter ACs + Complete Household Load + Full Night Battery Backup",
      },
      {
        kw: 10,
        monthlyUnits: 1450,
        approxCost: 1620000,
        recommendedFor: "1 Kanal Homes & Net Metering",
        runs: "3–4 Inverter ACs + Complete Household/Shop Load + Extra Units Exported to WAPDA",
      },
      {
        kw: 15,
        monthlyUnits: 2150,
        approxCost: 2350000,
        recommendedFor: "Large Luxury Homes & Commercial Centers",
        runs: "5+ ACs simultaneously + Commercial Lighting + Heavy Monthly WAPDA Bill Credits",
      },
      {
        kw: 20,
        monthlyUnits: 2800,
        approxCost: 2950000,
        recommendedFor: "Agricultural Tube Wells & Small Factories",
        runs: "Commercial Plaza + Private Clinic + Small Factory + Solar Tube Well Pumping",
      },
    ],
  },
  odyssey: {
    badge: "REAL PROJECTS IN SOUTH PUNJAB",
    eyebrow: "FIELD VERIFIED WORK",
    title: "Real Solar Installations In Your Area",
    subtitle:
      "Explore real rooftop and agricultural systems installed by Dream Solar across Vehari, Burewala, Mailsi, and South Punjab.",
    projects: [
      {
        id: "residential-vehari",
        title: "10 kW Home Solar System",
        location: "Officers Colony, Vehari",
        type: "Home Rooftop",
        impact: "Electricity bill dropped from Rs. 54,000 to under Rs. 2,500 per month",
        capacity: "10 kW Hybrid with Lithium Battery Backup",
        image: "/images/residential-solar.jpg",
        tags: ["Home Solar", "Net Metering", "Zero Outages"],
      },
      {
        id: "commercial-burewala",
        title: "30 kW Commercial Plaza System",
        location: "College Road, Burewala",
        type: "Commercial Plaza",
        impact: "Eliminated daytime commercial electricity bills for all shops and offices",
        capacity: "30 kW Three-Phase • 56x 585W TOPCon Panels",
        image: "/images/commercial-solar.jpg",
        tags: ["Commercial", "3-Phase", "Zero Peak Cost"],
      },
      {
        id: "agricultural-mailsi",
        title: "20 HP Solar Agricultural Tube Well",
        location: "Mailsi Road Agrarian Belt",
        type: "Agricultural Tube Well",
        impact: "Irrigating 45 acres of cotton and wheat crops at Rs. 0 diesel cost",
        capacity: "20 HP VFD Solar Pumping System",
        image: "/images/agricultural-tubewell.jpg",
        tags: ["Zero Diesel", "Solar Pumping", "All-Day Irrigation"],
      },
      {
        id: "mepco-distribution",
        title: "Industrial MEPCO Green Net-Metering",
        location: "Vehari Industrial Area",
        type: "Green Meter Approval",
        impact: "Officially approved bidirectional green meter exporting extra units to WAPDA",
        capacity: "Three-Phase Distribution & Industrial Lightning Protection",
        image: "/images/mepco-net-metering.jpg",
        tags: ["Green Meter", "WAPDA Approved", "Sell Electricity"],
      },
    ],
  },
  standards: {
    badge: "WHY CUSTOMERS CHOOSE US",
    eyebrow: "OUR 6 GUARANTEES",
    title: "6 Reasons People Trust Dream Solar",
    subtitle:
      "We never cut corners. We build every solar setup to run smoothly for decades with genuine local support.",
    items: [
      {
        number: "01",
        title: "100% Genuine Barcode Verified Panels",
        description:
          "Every solar panel has a verifiable manufacturer serial barcode. You can scan it online to confirm authenticity. Zero counterfeit or B-grade cells.",
      },
      {
        number: "02",
        title: "Strong Rust-Proof Galvanized Frames",
        description:
          "Fabricated with heavy-gauge hot-dip galvanized iron anchored into structural roof beams, built to safely withstand 130 km/h windstorms.",
      },
      {
        number: "03",
        title: "Pure Copper Double-Insulated Wiring",
        description:
          "We use only genuine pure copper DC & AC solar cables with heat-resistant conduits to prevent energy drops and eliminate electrical fire hazards.",
      },
      {
        number: "04",
        title: "Complete Lightning & Surge Protection",
        description:
          "Dual-stage AC and DC surge arresters and pure copper earthing rods protect your expensive inverters from lightning strikes and voltage spikes.",
      },
      {
        number: "05",
        title: "Hassle-Free MEPCO Green Net-Metering",
        description:
          "We handle all paperwork, WAPDA approvals, DISCO clearances, and green meter installation so you can easily sell extra electricity back to the grid.",
      },
      {
        number: "06",
        title: "25-Year Warranty with Local Office Support",
        description:
          "Our physical office and showroom on Allama Iqbal Road, Vehari, provides prompt assistance and warranty claims. We are always here when you need us.",
      },
    ],
  },
  conversion: {
    badge: "GET STARTED TODAY",
    eyebrow: "FREE ON-SITE ROOF SURVEY",
    title: "Ready To Stop Paying Heavy Electricity Bills?",
    subtitle:
      "Contact our team today to schedule a free on-site roof survey and receive an accurate quotation for your home, business, or tube well.",
    primaryButton: "Book Free Roof Survey",
    secondaryButton: "Call Now: 0320-2200884",
    whatsappButton: "Chat On WhatsApp",
    officeHeading: "Visit Our Vehari Office & Showroom",
    guaranteeNotice:
      "Free Rooftop Survey & Shade Analysis in Vehari, Burewala, Mailsi, and Surrounding Towns.",
  },
  footer: {
    badge: "VEHARI • PUNJAB • PAKISTAN",
    colophon: "CERTIFIED SOLAR ENGINEERING • HIGH QUALITY INSTALLATIONS",
    mission:
      "Dream Solar Energy is dedicated to providing honest, engineering-grade solar installations across South Punjab. Original hardware, fair pricing, and long-term peace of mind.",
    directContact: "Phone: 0320-2200884 | WhatsApp: 0320-2200884 | Vehari, Punjab",
    backToTop: "Back to Top",
  },
};
