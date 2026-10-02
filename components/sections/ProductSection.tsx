"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Check,
  Sun,
  Zap,
  Battery,
  Wrench,
  ShieldCheck,
  ArrowRight,
  PhoneCall,
} from "lucide-react";

const WHATSAPP_BASE = "https://wa.me/923202200884";

const categories = [
  { key: "panels", icon: <Sun className="w-4 h-4" />, label: "Solar Panels" },
  { key: "inverters", icon: <Zap className="w-4 h-4" />, label: "Inverters" },
  { key: "batteries", icon: <Battery className="w-4 h-4" />, label: "Batteries" },
  { key: "accessories", icon: <Wrench className="w-4 h-4" />, label: "Accessories" },
];

const products: Record<
  string,
  { name: string; specs: string; warranty: string; badge?: string }[]
> = {
  panels: [
    {
      name: "Jinko Solar Tiger Neo",
      specs: "575W – 590W • N-Type TOPCon Technology • Ultra-High Efficiency",
      warranty: "25-Year Linear Power Warranty",
      badge: "Top Seller",
    },
    {
      name: "Longi Hi-MO 6",
      specs: "580W – 595W • HPBC Advanced Cell Architecture • Heat Tolerant",
      warranty: "25-Year Product & Performance Warranty",
      badge: "High Efficiency",
    },
    {
      name: "JA Solar DeepBlue Bifacial",
      specs: "570W – 585W • Dual-Glass Solar Generation • Rear-Side Power Boost",
      warranty: "30-Year Performance Warranty",
    },
    {
      name: "Canadian Solar HiKu7",
      specs: "545W – 580W • Mono PERC Technology • Robust Heavy-Duty Frame",
      warranty: "25-Year Output Warranty",
    },
  ],
  inverters: [
    {
      name: "Knox Hybrid Inverter Series",
      specs: "3kW – 10kW • Pure Sine Wave • Dual MPPT • Smart Mobile App Tracking",
      warranty: "5-Year Official Warranty",
      badge: "Most Popular",
    },
    {
      name: "Inverex Nitrox Hybrid",
      specs: "3kW – 12kW • High PV Input • Touch Display • IP65 Weatherproof",
      warranty: "5-Year Official Warranty",
    },
    {
      name: "Huawei SUN2000 On-Grid",
      specs: "3kW – 20kW • 98.6% European Efficiency • Smart I-V Curve Diagnosis",
      warranty: "5 to 10-Year Warranty",
      badge: "Premium Grade",
    },
    {
      name: "Growatt Hybrid Series",
      specs: "3kW – 15kW • Flexible Grid Support • Integrated WiFi Monitoring",
      warranty: "5-Year Standard Warranty",
    },
  ],
  batteries: [
    {
      name: "Pylontech Lithium (LFP)",
      specs: "48V 100Ah (US3000C / US5000) • 6,000+ Deep Cycles • Smart BMS",
      warranty: "10-Year Warranty",
      badge: "Zero Maintenance",
    },
    {
      name: "Inverex Lithium Wall-Mount",
      specs: "5.12 kWh High-Density LFP • Compact Space-Saving Wall Installation",
      warranty: "5-Year Official Warranty",
    },
    {
      name: "AGS Deep-Cycle Tubular Gel",
      specs: "Heavy-Duty Deep Discharge • Optimized for Extended Night Power",
      warranty: "Standard Manufacturer Warranty",
    },
    {
      name: "Osaka Tubular Deep-Cycle",
      specs: "Specially Designed for South Punjab Climate • Reliable Cyclic Life",
      warranty: "Standard Manufacturer Warranty",
    },
  ],
  accessories: [
    {
      name: "Certified Solar DC & AC Cables",
      specs: "4mm² to 16mm² Pure Tinned Copper • Double Insulation • TÜV Rheinland",
      warranty: "UV & Flame Retardant",
    },
    {
      name: "Galvanized Mounting Structures",
      specs: "L2 & L3 Heavy-Duty Galvanized Iron Framing • Custom Elevation",
      warranty: "Wind & Storm Resistant",
    },
    {
      name: "AC & DC Distribution Boards",
      specs: "Original Circuit Breakers, Surge Protection (SPD) & Changeovers",
      warranty: "Comprehensive Electrical Safety",
    },
    {
      name: "Earthing & Lightning Arrestors",
      specs: "Pure Copper Earthing Rods, Chemical Compound & Lightning Spikes",
      warranty: "Complete System Grounding",
    },
  ],
};

const packages = [
  {
    size: "4 kW System",
    type: "Hybrid / On-Grid",
    coverage: "Small Home — Fans, Lighting, Fridge, 1 Small AC",
    generation: "480 – 560 Units / Month",
    popular: false,
    color: "blue",
    features: [
      "8 × Tier-1 Mono Panels (500W+)",
      "4kW Pure Sine Wave Hybrid Inverter",
      "Custom Galvanized Mounting Frame",
      "DC Cables & Protection Switchgear",
      "Turnkey Installation Included",
    ],
    whatsappMsg: "Hello Dream Solar Energy, I am interested in the 4 kW Solar System. Please share details about panels, inverter brand, and availability.",
  },
  {
    size: "6 kW System",
    type: "Hybrid / On-Grid",
    coverage: "Medium Home — 1–2 Inverter ACs, Water Pump, Full Appliances",
    generation: "720 – 840 Units / Month",
    popular: true,
    color: "gold",
    features: [
      "12 × Tier-1 Mono Panels (500W+)",
      "6kW Hybrid Dual MPPT Inverter",
      "Optional Lithium / Tubular Battery Storage",
      "AC/DC Distribution Protection Box",
      "Turnkey Installation & Net Metering Ready",
    ],
    whatsappMsg: "Hello Dream Solar Energy, I am interested in the 6 kW Solar System. Please share details about panels, inverter brand, battery options, and pricing.",
  },
  {
    size: "8 kW System",
    type: "Hybrid / On-Grid",
    coverage: "Large Home — 2–3 Inverter ACs, Heavy Appliances",
    generation: "960 – 1,120 Units / Month",
    popular: false,
    color: "navy",
    features: [
      "16 × High-Efficiency Tier-1 Solar Panels",
      "8kW Three-Phase / Single-Phase Inverter",
      "Heavy-Duty Galvanized Structure",
      "Complete Surge Protection & Earthing Kit",
      "Net Metering Setup Included",
    ],
    whatsappMsg: "Hello Dream Solar Energy, I am interested in the 8 kW Solar System. Please share system details, inverter options, and availability.",
  },
  {
    size: "10 kW System",
    type: "On-Grid / Hybrid",
    coverage: "Large Residence or Commercial — 3–4 ACs, Full Heavy Load",
    generation: "1,200 – 1,400 Units / Month",
    popular: false,
    color: "emerald",
    features: [
      "20 × High-Capacity Tier-1 Solar Array",
      "10kW Three-Phase / Single-Phase Inverter",
      "Heavy-Duty Galvanized Structure",
      "Complete Surge & Earthing Protection",
      "Full Net Metering Green Meter Setup",
    ],
    whatsappMsg: "Hello Dream Solar Energy, I am interested in the 10 kW Solar System. Please share complete system details, brands, and availability.",
  },
];

const colorMap: Record<string, { card: string; badge: string; btn: string; accent: string }> = {
  blue: {
    card: "border-[#E2DFD6] hover:border-sky-400 bg-[#F8F7F4]",
    badge: "bg-[#EFEDE7] text-[#1B2A4A] border-[#E2DFD6] font-bold",
    btn: "bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white shadow-sm",
    accent: "text-[#1B2A4A]",
  },
  gold: {
    card: "border-[#F7941D]/35 ring-2 ring-amber-400/40 shadow-lg shadow-amber-500/10 bg-[#F8F7F4]",
    badge: "bg-[#FBB859]/25 text-[#EE6B00] border-[#F7941D]/30 font-bold",
    btn: "bg-linear-to-r from-[#F7941D] to-[#F7941D] hover:from-[#EE6B00] hover:to-[#EE6B00] text-white font-bold shadow-md",
    accent: "text-[#F7941D]",
  },
  navy: {
    card: "border-slate-200 hover:border-[#1B2A4A] bg-[#F8F7F4]",
    badge: "bg-[#EFEDE7]/80 text-[#1B2A4A] border-[#E2DFD6] font-bold",
    btn: "bg-[#1B2A4A] hover:bg-[#0F1B2E] text-white shadow-sm",
    accent: "text-[#1B2A4A]",
  },
  emerald: {
    card: "border-emerald-200 hover:border-[#3C8C2E] bg-[#F8F7F4]",
    badge: "bg-emerald-50 text-[#3C8C2E] border-emerald-200 font-bold",
    btn: "bg-[#3C8C2E] hover:bg-[#15803D] text-white shadow-sm",
    accent: "text-[#3C8C2E]",
  },
};

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState<"packages" | "hardware">("packages");
  const [activeCategory, setActiveCategory] = useState("panels");

  return (
    <section id="products" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-t border-[#E2DFD6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-6 border-b border-[#E2DFD6]">
          <div>
            <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
              Hardware &amp; Turnkey Packages
            </span>
            <h2
              className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Systems &amp; Equipment
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              Authentic Tier-1 solar equipment with official warranty support, tailored for
              residential, commercial, and agricultural setups.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="mt-6 md:mt-0 flex bg-[#F8F7F4] p-1 rounded-lg border border-[#E2DFD6] shadow-site">
            <button
              onClick={() => setActiveTab("packages")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "packages"
                  ? "bg-[#1B2A4A] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              System Packages
            </button>
            <button
              onClick={() => setActiveTab("hardware")}
              className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all ${
                activeTab === "hardware"
                  ? "bg-[#1B2A4A] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Individual Hardware
            </button>
          </div>
        </div>

        {/* Packages Tab Content */}
        {activeTab === "packages" && (
          <>
            {/* Inquiry-only notice */}
            <div className="mb-6 flex items-center gap-3 bg-[#FBB859]/15 border border-[#F7941D]/20 rounded-xl px-5 py-3.5">
              <PhoneCall className="w-4 h-4 text-[#F7941D] shrink-0" />
              <p className="text-xs sm:text-sm text-[#1B2A4A] font-medium">
                <strong>Pricing on Inquiry:</strong> Click &quot;Inquire on WhatsApp&quot; on any package to get the latest price and custom quote directly from our team.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {packages.map((pkg) => {
                const colors = colorMap[pkg.color];
                return (
                  <div
                    key={pkg.size}
                    className={`rounded-2xl p-6 flex flex-col justify-between bg-white border transition-all duration-200 hover:-translate-y-1 hover:shadow-xl shadow-sm relative ${colors.card}`}
                  >
                    {pkg.popular && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-solar-deep text-white text-[10px] font-display font-bold uppercase tracking-wider px-3 py-1 rounded-md shadow-sm whitespace-nowrap border border-solar-amber/40">
                        Most Popular Choice
                      </span>
                    )}

                    <div>
                      <div className="mb-4">
                        <span className={`inline-block text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-md mb-2 ${colors.badge}`}>
                          {pkg.type}
                        </span>
                        <h3
                          className="text-3xl font-black text-[#1B2A4A] mt-1"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {pkg.size}
                        </h3>
                      </div>

                      <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mb-5">
                        <p className="text-xs text-slate-600 font-medium leading-relaxed">{pkg.coverage}</p>
                        <p className={`text-xs font-bold mt-1.5 flex items-center gap-1.5 ${colors.accent}`}>
                          <Sun className="w-3.5 h-3.5 text-amber-500" />
                          <span>{pkg.generation}</span>
                        </p>
                      </div>

                      <div className="space-y-2 mb-6">
                        <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Includes:</p>
                        {pkg.features.map((f) => (
                          <div key={f} className="flex items-start gap-2 text-xs text-slate-600">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-100">
                      {/* No price — inquiry only */}
                      <p className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                        Price available on inquiry
                      </p>
                      <a
                        href={`${WHATSAPP_BASE}?text=${encodeURIComponent(pkg.whatsappMsg)}`}
                        target="_blank"
                        rel="noreferrer"
                        className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all shadow-sm active:scale-95 ${colors.btn}`}
                        style={{ fontFamily: "var(--font-outfit)" }}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* Hardware Catalog Tab Content */}
        {activeTab === "hardware" && (
          <div>
            {/* Category selection */}
            <div className="flex flex-wrap gap-2.5 mb-8">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all border ${
                    activeCategory === cat.key
                      ? "bg-[#1B2A4A] border-[#1B2A4A] text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-[#F8F7F4]"
                  }`}
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {cat.icon}
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>

            {/* Hardware Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products[activeCategory].map((prod) => (
                <div
                  key={prod.name}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    {prod.badge && (
                      <span className="inline-block text-[10px] font-extrabold text-[#F7941D] bg-[#FBB859]/15 border border-[#F7941D]/20 px-2.5 py-0.5 rounded-md uppercase tracking-wider mb-2.5">
                        {prod.badge}
                      </span>
                    )}
                    <h4
                      className="font-bold text-base text-[#1B2A4A] mb-1.5"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {prod.name}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">{prod.specs}</p>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-emerald-700 mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span>{prod.warranty}</span>
                    </p>
                    <a
                      href={`${WHATSAPP_BASE}?text=${encodeURIComponent(
                        `Hello Dream Solar Energy, please provide pricing and availability for ${prod.name}.`
                      )}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-[#F7941D] transition-colors"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>Request Quote on WhatsApp</span>
                      <ArrowRight className="w-3 h-3 ml-0.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Turnkey Assurance Banner */}
        <div className="mt-10 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#FBB859]/15 border border-[#F7941D]/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5 text-[#F7941D]" />
          </div>
          <div className="text-xs sm:text-sm text-slate-600">
            <strong className="text-slate-900 font-bold">Complete Turnkey Solutions:</strong> We provide
            everything under one roof — official Tier-1 photovoltaic panels, certified hybrid inverters,
            energy storage batteries, custom galvanized structures, TÜV-certified cables, and complete installation.
          </div>
        </div>
      </div>
    </section>
  );
}
