"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sun,
  Zap,
  Battery,
  Wrench,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  ShieldCheck,
  Layers,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import PageHero from "@/components/ui/PageHero";

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<"packages" | "panels" | "inverters" | "batteries" | "accessories">("packages");
  const { openModal } = useQuoteModal();

  const packages = [
    {
      id: "pkg-4kw",
      name: "4 kW Home Solar System",
      type: "Hybrid / On-Grid",
      idealFor: "3 to 5 Marla Homes",
      unitsMonthly: "450 – 520 Units / Month",
      billSavings: "Rs. 25,000 – 30,000 / mo",
      loads: [
        "1 Inverter AC (1.5 Ton)",
        "1 Refrigerator",
        "1 Water Motor (0.5 – 1 HP)",
        "4–5 Ceiling Fans & LED Lights",
      ],
      hardware: [
        "7x Tier-1 585W N-Type Solar Panels",
        "Knox / Inverex 4kW Smart Hybrid Inverter",
        "Galvanized Heavy-Gauge L2 Structure",
        "Complete DC/AC Breakers, SPDs & Copper Wiring",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Budget Friendly",
      image: "/images/residential-solar.jpg",
    },
    {
      id: "pkg-6kw",
      name: "6 kW Family Solar System",
      type: "Hybrid with Battery Backup",
      idealFor: "5 to 10 Marla Homes",
      unitsMonthly: "720 – 850 Units / Month",
      billSavings: "Rs. 42,000 – 50,000 / mo",
      loads: [
        "2 Inverter ACs (Day time)",
        "1 Inverter AC + Refrigerator (Night time)",
        "Complete Home Lighting & Fans",
        "Washing Machine & Iron",
      ],
      hardware: [
        "10x Tier-1 585W N-Type Solar Panels",
        "Knox / Inverex 6kW Hybrid Inverter",
        "Lithium LiFePO4 or Tubular Battery Bank",
        "Custom Elevated Galvanized Structure",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Most Popular",
      image: "/images/solar-rooftop-showcase.jpg",
    },
    {
      id: "pkg-8kw",
      name: "8 kW High-Comfort Solar System",
      type: "Three-Phase Hybrid / Net-Metered",
      idealFor: "10 Marla to 1 Kanal Homes",
      unitsMonthly: "1,000 – 1,150 Units / Month",
      billSavings: "Rs. 60,000 – 70,000 / mo",
      loads: [
        "2–3 Inverter ACs running simultaneously",
        "Full household appliances 24/7 without tripping",
        "Heavy water pump (1.5 HP)",
        "Net metering export to MEPCO (Green Meter)",
      ],
      hardware: [
        "14x Tier-1 585W N-Type Solar Panels",
        "8kW Three-Phase Hybrid Inverter",
        "Heavy wind-resistant rooftop framing",
        "Full MEPCO Green Meter documentation support",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "High Performance",
      image: "/hero-solar-installation.jpg",
    },
    {
      id: "pkg-10kw",
      name: "10 kW Turnkey Solar System",
      type: "Three-Phase Net-Metered",
      idealFor: "1 Kanal Homes & Commercial Plazas",
      unitsMonthly: "1,350 – 1,500 Units / Month",
      billSavings: "Rs. 80,000 – 95,000 / mo",
      loads: [
        "3–4 Inverter ACs simultaneously",
        "Deep freezers & double-door refrigerators",
        "Water filtration / tube well pump",
        "Generates extra units to sell back to MEPCO",
      ],
      hardware: [
        "18x Tier-1 585W Monocrystalline Panels",
        "10kW Three-Phase Smart Inverter",
        "High-density Lithium Battery or Tubular Bank",
        "Complete MEPCO Net-Metering Package",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Zero Bill Solution",
      image: "/images/commercial-solar.jpg",
    },
    {
      id: "pkg-15kw",
      name: "15 kW – 20 kW Commercial Solar",
      type: "Three-Phase Commercial",
      idealFor: "Shopping Plazas, Clinics, Offices & Schools",
      unitsMonthly: "2,000 – 2,800 Units / Month",
      billSavings: "Rs. 130,000 – 180,000 / mo",
      loads: [
        "Heavy commercial air conditioning",
        "Computers, servers, printers & lighting",
        "Commercial freezers & display chillers",
        "Massive cut in high commercial peak-hour rates",
      ],
      hardware: [
        "26x to 35x Tier-1 585W Solar Panels",
        "15kW – 20kW Three-Phase Industrial Inverter",
        "Custom heavy-gauge rooftop mounting",
        "Mobile phone app for live generation tracking",
      ],
      warranty: "25-Yr Panel Warranty • 5-Yr Inverter Warranty",
      badge: "Commercial Grade",
      image: "/images/industrial-solar.jpg",
    },
    {
      id: "pkg-tubewell",
      name: "Solar Tube Well (15 – 25 HP)",
      type: "VFD Solar Pumping System",
      idealFor: "Farmland, Orchards & Agriculture",
      unitsMonthly: "Zero WAPDA Dependency",
      billSavings: "Saves Rs. 100,000+ Diesel Every Month",
      loads: [
        "15 HP to 25 HP water pump motor",
        "Runs full speed on morning-to-evening sunshine",
        "Soft start through Variable Frequency Drive (VFD)",
        "Zero diesel or expensive agricultural electricity bills",
      ],
      hardware: [
        "Tier-1 Solar Panels tailored for pump HP",
        "Heavy-duty VFD Solar Inverter with MPPT",
        "Manual / Auto Tracking ground structures",
        "Lightning protection & industrial earthing pit",
      ],
      warranty: "25-Yr Panel Warranty • Heavy-Duty Reliability",
      badge: "Farmers Favorite",
      image: "/images/agricultural-tubewell.jpg",
    },
  ];

  const panels = [
    {
      name: "Jinko Solar Tiger Neo 585W",
      tech: "N-Type TOPCon Technology",
      power: "585W High Output",
      efficiency: "22.65% Efficiency",
      specs: [
        "N-Type cells generate electricity even on cloudy days",
        "Resists extreme South Punjab summer heat (up to 50°C)",
        "Bifacial option generates extra power from back reflection",
        "Ultra-low degradation: 87.4% output guaranteed after 30 years",
      ],
      warranty: "25-Year Product & 30-Year Performance Warranty",
      badge: "Best Seller",
    },
    {
      name: "Longi Hi-MO 6 Explorer 585W",
      tech: "HPBC Cell Architecture",
      power: "585W High Output",
      efficiency: "22.8% Efficiency",
      specs: [
        "Next-generation HPBC cell technology",
        "Sleek front design with maximum light absorption",
        "Generates power earlier in the morning & later in the evening",
        "Strong tempered glass resistant to wind and hail storms",
      ],
      warranty: "25-Year Factory Warranty",
      badge: "Ultra Premium",
    },
    {
      name: "JA Solar DeepBlue 4.0 Pro 580W",
      tech: "Bycium+ N-Type Monocrystalline",
      power: "580W Output",
      efficiency: "22.5% Efficiency",
      specs: [
        "Dual-glass bifacial build for maximum durability",
        "Optimized temperature coefficient for hot climates",
        "Zero PID (Potential Induced Degradation)",
        "Heavy-duty 35mm anodized aluminum frame",
      ],
      warranty: "30-Year Performance Warranty",
      badge: "Reliable Choice",
    },
    {
      name: "Canadian Solar HiKu7 580W",
      tech: "High-Power Monocrystalline",
      power: "580W Output",
      efficiency: "21.9% Efficiency",
      specs: [
        "World-renowned brand trusted across Pakistan",
        "Split-cell design reduces heat and energy loss",
        "High shade tolerance & robust structural integrity",
        "Compatible with all major hybrid and on-grid inverters",
      ],
      warranty: "25-Year Linear Output Warranty",
      badge: "Proven Quality",
    },
  ];

  const inverters = [
    {
      name: "Knox Krypton / Argon Hybrid",
      range: "3 kW to 10 kW (Single & Three Phase)",
      features: [
        "Pure sine wave with instant battery switchover (<10ms)",
        "Dual MPPT tracker allows panels on different roof angles",
        "Built-in WiFi to monitor daily units on your smartphone",
        "Compatible with both Lithium LiFePO4 and Tubular batteries",
      ],
      warranty: "5-Year Official Brand Warranty",
      badge: "Most Popular in Punjab",
    },
    {
      name: "Inverex Nitrox Hybrid Series",
      range: "3 kW to 12 kW Hybrid",
      features: [
        "High PV input voltage capability up to 800V",
        "Easy-to-read color touch screen display",
        "IP65 waterproof rating for outdoor or covered setups",
        "Certified for MEPCO net metering and zero-export control",
      ],
      warranty: "5-Year Official Brand Warranty",
      badge: "Heavy Duty",
    },
    {
      name: "Huawei SUN2000 Smart Inverter",
      range: "5 kW to 100 kW (Three Phase)",
      features: [
        "World #1 inverter brand with 98.6% peak efficiency",
        "AI-powered arc fault circuit breaker protection",
        "Fanless natural cooling design with zero noise",
        "Top choice for large homes, plazas, and factories",
      ],
      warranty: "5 to 10-Year Manufacturer Warranty",
      badge: "Global #1",
    },
    {
      name: "Growatt / Solis On-Grid Series",
      range: "5 kW to 50 kW On-Grid",
      features: [
        "Highest reliability for net-metering systems",
        "Lightweight, compact design for easy wall mounting",
        "Multi-string tracking for maximum harvest in partial shade",
        "Full MEPCO / WAPDA compliance certification",
      ],
      warranty: "5-Year Full Replacement Warranty",
      badge: "Best for Net Metering",
    },
  ];

  const batteries = [
    {
      name: "Lithium LiFePO4 Smart Battery Bank",
      capacity: "5.12 kWh / 10.24 kWh (48V / 100Ah)",
      lifespan: "6,000+ Cycles (12 to 15 Years Life)",
      specs: [
        "Can be discharged up to 90% without degrading",
        "Built-in Smart BMS with overcharge and temperature protection",
        "Zero maintenance — no acid checking or water refilling ever",
        "Compact wall-mounted design that saves room space",
      ],
      bestFor: "Long-term investment, modern homes, uninterrupted sleep",
      badge: "Top Recommendation",
    },
    {
      name: "Heavy-Duty Tubular Battery (Deep Cycle)",
      capacity: "180Ah to 230Ah (AGS / Osaka / Phoenix)",
      lifespan: "1,200 to 1,500 Cycles (3 to 4 Years Life)",
      specs: [
        "High-density lead-antimony alloy plates",
        "Designed to withstand frequent Pakistani load-shedding",
        "Budget-friendly upfront installation cost",
        "Easily serviceable and widely available across Punjab",
      ],
      bestFor: "Budget-conscious setups and basic backup needs",
      badge: "Budget Friendly",
    },
  ];

  const accessories = [
    {
      title: "Galvanized Heavy-Gauge Structure",
      desc: "Fabricated from customized 14-gauge hot-dipped galvanized iron. Built to withstand strong South Punjab windstorms and resist rust for 25+ years.",
      specs: "L2, L3, L4 elevated configurations to keep rooftop usable",
    },
    {
      title: "Pure Copper DC & AC Cables",
      desc: "We exclusively use Pakistan Cables or Fast Cables 99.9% pure copper double-insulated wires. Zero voltage drop and maximum power transfer.",
      specs: "4mm², 6mm², 10mm² & 16mm² certified UV-resistant solar wire",
    },
    {
      title: "DC/AC Breakers & Surge Protectors (SPDs)",
      desc: "Top European-grade Schneider and Suntree circuit breakers protect your expensive inverters and home appliances from lightning surges and short circuits.",
      specs: "DC MCBs, AC Breakers, Surge Arrestors & Changeover switches",
    },
    {
      title: "MEPCO Approved Green Bidirectional Meter",
      desc: "Official three-phase bidirectional meters with full testing certification from MEPCO laboratory for legal net metering export.",
      specs: "MicroTech / Hexing 3-Phase Smart Bidirectional Meter",
    },
  ];

  return (
    <div className="bg-solar-alabaster min-h-screen">
      {/* Page Hero */}
      <PageHero
        crumb="Products"
        eyebrow="Genuine Solar Equipment"
        title="High-Efficiency Solar Systems &"
        accent="Tier-1 Equipment"
        description={
          <p>
            Explore our complete turnkey solar packages, original Tier-1 solar panels, smart inverters, and long-life batteries. Every product is 100% genuine with verifiable barcodes and manufacturer warranties.
          </p>
        }
        visualTone="navy"
        visualKicker="Direct Supply"
        visualBody="Wholesale rates with authentic factory packaging and warranties"
        photoSrc="/images/solar-rooftop-showcase.jpg"
        photoAlt="Solar equipment showcase"
        stats={[
          { value: "100%", label: "Original Tier-1" },
          { value: "25 Yrs", label: "Panel Warranty" },
        ]}
        actions={
          <>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-solar-amber" />
              <span>Get Custom Quote</span>
            </button>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%2C%20I%20want%20to%20know%20prices%20of%20solar%20packages."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Inquiries</span>
            </a>
          </>
        }
      />

      {/* Product Tabs Navigation */}
      <section className="bg-white border-b border-solar-border sticky top-20 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2">
            {[
              { id: "packages" as const, label: "Complete Packages", icon: Sun },
              { id: "panels" as const, label: "Solar Panels", icon: Layers },
              { id: "inverters" as const, label: "Smart Inverters", icon: Zap },
              { id: "batteries" as const, label: "Batteries", icon: Battery },
              { id: "accessories" as const, label: "Structures & Cables", icon: Wrench },
            ].map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2 text-xs sm:text-sm font-display font-semibold px-4 py-2.5 rounded-xl whitespace-nowrap transition-all cursor-pointer ${
                  activeTab === id
                    ? "bg-solar-deep text-white shadow-sm"
                    : "bg-solar-subtle text-solar-muted hover:bg-solar-border/60 hover:text-solar-navy"
                }`}
              >
                <Icon className={`w-4 h-4 ${activeTab === id ? "text-solar-amber" : "text-solar-muted"}`} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2 text-xs text-solar-muted whitespace-nowrap font-medium">
            <ShieldCheck className="w-4 h-4 text-solar-emerald" />
            <span>100% Genuine Barcodes</span>
          </div>
        </div>
      </section>

      {/* Tab 1: Complete Turnkey Packages */}
      {activeTab === "packages" && (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>Ready-To-Install Packages</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
                Designed to Eliminate Electricity Bills
              </h2>
              <p className="text-solar-muted text-xs sm:text-sm mt-2">
                Every package includes Tier-1 panels, smart inverters, elevated galvanized structures, certified copper wiring, and turnkey professional installation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white border border-solar-border rounded-2xl overflow-hidden shadow-sm hover:border-solar-navy/30 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-solar-navy/5">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center gap-1.5 bg-white/95 text-solar-navy text-xs font-bold px-2.5 py-1 rounded-md shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-solar-amber" />
                          {pkg.badge}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3">
                        <span className="bg-solar-deep/90 text-white text-[10px] font-bold py-1 px-2 rounded-md">
                          {pkg.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-solar-navy mb-1 leading-tight group-hover:text-solar-amber transition-colors">
                        {pkg.name}
                      </h3>
                      <p className="text-xs text-solar-muted mb-4 font-medium">Ideal for: {pkg.idealFor}</p>

                      {/* Stats strip */}
                      <div className="bg-solar-subtle border border-solar-border rounded-xl p-3.5 mb-5 grid grid-cols-2 gap-2 text-center">
                        <div>
                          <p className="text-[10px] text-solar-muted font-bold uppercase tracking-wider">Generation</p>
                          <p className="text-xs sm:text-sm font-display font-bold text-solar-navy">{pkg.unitsMonthly}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-solar-muted font-bold uppercase tracking-wider">Estimated Savings</p>
                          <p className="text-xs sm:text-sm font-display font-bold text-solar-emerald">{pkg.billSavings}</p>
                        </div>
                      </div>

                      {/* Appliances supported */}
                      <div className="mb-4">
                        <p className="text-xs font-display font-bold text-solar-navy uppercase tracking-wider mb-2">
                          Appliances Supported:
                        </p>
                        <ul className="space-y-1.5 text-xs text-solar-muted">
                          {pkg.loads.map((load) => (
                            <li key={load} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-solar-emerald shrink-0 mt-0.5" />
                              <span>{load}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Hardware details */}
                      <div className="pt-3 border-t border-solar-border mb-4">
                        <p className="text-xs font-display font-bold text-solar-navy uppercase tracking-wider mb-2">
                          Package Equipment:
                        </p>
                        <ul className="space-y-1 text-xs text-solar-muted">
                          {pkg.hardware.map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <span className="w-1 h-1 rounded-full bg-solar-amber shrink-0 mt-1.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="text-[11px] text-solar-emerald font-semibold mb-3 flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{pkg.warranty}</span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => openModal()}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-solar-deep hover:bg-solar-navy text-white text-xs font-display font-bold py-2.5 rounded-xl transition-all cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 text-solar-amber" />
                        <span>Get Quote</span>
                      </button>

                      <a
                        href={`https://wa.me/923202200884?text=${encodeURIComponent(`Hello Dream Solar, I am interested in the ${pkg.name}. Please share latest pricing and details.`)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-display font-bold px-3 py-2.5 rounded-xl transition-all"
                        aria-label="Inquire on WhatsApp"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 2: Solar Panels */}
      {activeTab === "panels" && (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>Tier-1 Modules</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
                Authentic Tier-1 Solar Panels
              </h2>
              <p className="text-solar-muted text-xs sm:text-sm mt-2">
                Official factory barcodes and verifiable serial numbers with up to 30 years linear performance warranties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {panels.map((panel) => (
                <div
                  key={panel.name}
                  className="bg-white border border-solar-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-solar-navy/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-solar-amber uppercase tracking-wider">
                        <span className="w-4 h-0.5 bg-solar-amber" />
                        {panel.tech}
                      </span>
                      <span className="bg-solar-subtle border border-solar-border text-solar-navy text-xs font-bold px-2.5 py-1 rounded-md">
                        {panel.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-solar-navy mb-2">
                      {panel.name}
                    </h3>

                    <div className="flex flex-wrap gap-4 text-xs font-semibold text-solar-muted mb-5">
                      <span className="text-solar-navy font-bold">{panel.power}</span>
                      <span>•</span>
                      <span className="text-solar-emerald font-bold">{panel.efficiency}</span>
                    </div>

                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-solar-muted">
                      {panel.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-solar-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-solar-emerald font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      {panel.warranty}
                    </span>

                    <a
                      href={`https://wa.me/923202200884?text=${encodeURIComponent(`Hello Dream Solar, please share per-watt or per-panel price for ${panel.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-solar-deep hover:bg-solar-navy text-white text-xs font-display font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-solar-amber" />
                      <span>Check Today’s Rate</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 3: Smart Inverters */}
      {activeTab === "inverters" && (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>The Brain of Your System</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
                Hybrid & On-Grid Smart Inverters
              </h2>
              <p className="text-solar-muted text-xs sm:text-sm mt-2">
                High-efficiency European & Asian inverters with mobile app monitoring, dual MPPT, and zero-export compatibility.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {inverters.map((inv) => (
                <div
                  key={inv.name}
                  className="bg-white border border-solar-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-solar-navy/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-display font-bold text-solar-amber uppercase tracking-wider">
                        {inv.range}
                      </span>
                      <span className="bg-solar-subtle border border-solar-border text-solar-navy text-xs font-bold px-2.5 py-1 rounded-md">
                        {inv.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-solar-navy mb-4">
                      {inv.name}
                    </h3>

                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-solar-muted">
                      {inv.features.map((feat) => (
                        <li key={feat} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-solar-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-solar-emerald font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      {inv.warranty}
                    </span>

                    <a
                      href={`https://wa.me/923202200884?text=${encodeURIComponent(`Hello Dream Solar, please share the price and availability of ${inv.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-solar-deep hover:bg-solar-navy text-white text-xs font-display font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-solar-amber" />
                      <span>Inquire Inverter Rate</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 4: Batteries */}
      {activeTab === "batteries" && (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>Reliable Night Storage</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
                Lithium LiFePO4 & Deep-Cycle Batteries
              </h2>
              <p className="text-solar-muted text-xs sm:text-sm mt-2">
                Ensure peaceful uninterrupted sleep without fan speed drops or constant acid refilling worries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {batteries.map((bat) => (
                <div
                  key={bat.name}
                  className="bg-white border border-solar-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-solar-navy/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-xs font-display font-bold text-solar-amber uppercase tracking-wider">
                        {bat.capacity}
                      </span>
                      <span className="bg-solar-subtle border border-solar-border text-solar-navy text-xs font-bold px-2.5 py-1 rounded-md">
                        {bat.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-solar-navy mb-1">
                      {bat.name}
                    </h3>
                    <p className="text-xs font-bold text-solar-emerald mb-4">{bat.lifespan}</p>

                    <ul className="space-y-2 mb-6 text-xs sm:text-sm text-solar-muted">
                      {bat.specs.map((spec) => (
                        <li key={spec} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-solar-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-xs text-solar-muted font-medium">
                      Best for: <strong className="text-solar-navy">{bat.bestFor}</strong>
                    </span>

                    <a
                      href={`https://wa.me/923202200884?text=${encodeURIComponent(`Hello Dream Solar, please share battery price for ${bat.name}.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 bg-solar-deep hover:bg-solar-navy text-white text-xs font-display font-bold px-4 py-2 rounded-xl transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-solar-amber" />
                      <span>Get Battery Price</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tab 5: Accessories */}
      {activeTab === "accessories" && (
        <section className="py-12 md:py-16 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>Heavy Duty Balance of System</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
                Galvanized Structures, Cables & Breakers
              </h2>
              <p className="text-solar-muted text-xs sm:text-sm mt-2">
                A solar system is only as durable as its mounting and electrical wiring. We never cut corners.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {accessories.map((acc) => (
                <div
                  key={acc.title}
                  className="bg-white border border-solar-border rounded-2xl p-6 sm:p-8 shadow-sm hover:border-solar-navy/30 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-xl font-display font-bold text-solar-navy mb-2">
                      {acc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-solar-muted leading-relaxed mb-4">
                      {acc.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-solar-border">
                    <span className="text-xs text-solar-navy font-semibold block">
                      Specification: <span className="text-solar-muted font-normal">{acc.specs}</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-5 sm:px-6 lg:px-8 bg-white border-t border-solar-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
            <span className="w-5 h-0.5 bg-solar-amber" />
            <span>Not Sure Which System Fits Your Load?</span>
          </div>
          <h2 className="text-3xl font-display font-black text-solar-navy tracking-tight mb-4">
            Try Our Free Bill & Solar Calculator
          </h2>
          <p className="text-solar-muted text-sm sm:text-base max-w-xl mx-auto mb-8">
            Enter your monthly WAPDA / MEPCO electricity bill and discover the ideal system size, estimated savings, and equipment needed in seconds.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/calculator"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Launch Solar Calculator</span>
              <ArrowRight className="w-4 h-4 text-solar-amber" />
            </Link>

            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-amber hover:bg-solar-gold text-solar-deep font-display font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Request Custom Proposal</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
