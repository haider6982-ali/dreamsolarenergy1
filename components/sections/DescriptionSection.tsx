"use client";

import React from "react";
import { Sun, Battery, CheckCircle2, MapPin, Wrench, ArrowUpRight, Zap, Package } from "lucide-react";

export default function DescriptionSection() {
  const services = [
    {
      icon: <Sun className="w-6 h-6 text-[#FF8C00]" />,
      title: "Solar Panel Sale & Installation",
      description: "We supply and install Tier-1 A-Grade solar panels from global brands — Jinko, Longi & JA Solar — optimized for South Punjab's intense summer heat (45°C+). N-Type TOPCon technology ensures maximum output year-round.",
      accent: "#FF8C00",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#4BB8E8]" />,
      title: "Inverter Sale & Installation",
      description: "Full range of On-Grid, Off-Grid, and Hybrid inverters available including Knox, Inverex Nitrox, Huawei SUN2000, and Growatt. We handle complete wiring, programming, and commissioning on-site.",
      accent: "#4BB8E8",
    },
    {
      icon: <Battery className="w-6 h-6 text-[#4CAF50]" />,
      title: "Battery Sale & Installation",
      description: "Lithium-ion (LFP) and heavy-duty tubular gel batteries for uninterrupted power backup. Pylontech, Inverex, and Narada batteries installed with smart BMS protection systems.",
      accent: "#4CAF50",
    },
    {
      icon: <Package className="w-6 h-6 text-[#FF8C00]" />,
      title: "Accessories & Components",
      description: "Complete range of solar accessories: pure copper DC/AC cables, MCBs, SPDs, earthing kits, galvanized mounting structures, combiner boxes, and monitoring systems. All genuine, certified products.",
      accent: "#FF8C00",
    },
  ];

  const stats = [
    { value: "500+", label: "Systems Installed", color: "#FF8C00" },
    { value: "25 Yr", label: "Panel Warranty", color: "#4BB8E8" },
    { value: "100%", label: "Genuine Products", color: "#4CAF50" },
    { value: "24/7", label: "After-Sale Support", color: "#FF8C00" },
  ];

  return (
    <section id="description" className="py-24 px-6 md:px-12 bg-[#0B1B36] relative border-t border-white/5">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-0.5 bg-linear-to-r from-transparent via-[#F59E0B]/60 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="font-mono text-xs text-[#FF8C00] uppercase tracking-widest block mb-3 font-semibold">
              ABOUT DREAM SOLAR ENERGY – VEHARI
            </span>
            <h2 className="font-black text-3xl sm:text-5xl text-white tracking-tight" style={{ fontFamily: "var(--font-outfit)" }}>
              Vehari&apos;s Most Trusted{" "}
              <span style={{ color: "#FF8C00" }}>Solar</span>{" "}
              <span style={{ color: "#4BB8E8" }}>Energy</span>{" "}
              Experts
            </h2>
          </div>
          <p className="font-medium text-[#94A3B8] text-sm md:text-base max-w-md mt-6 md:mt-0" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
            Located on Allama Iqbal Road, near Bank of Punjab, Vehari. We provide complete solar energy solutions from product sale to professional installation and after-sale service.
          </p>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel rounded-2xl p-5 border border-white/10 text-center hover:border-white/20 transition-colors">
              <div className="font-black text-3xl mb-1" style={{ color: s.color, fontFamily: "var(--font-outfit)" }}>{s.value}</div>
              <div className="font-mono text-[11px] text-[#94A3B8] uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Narrative Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-8 sm:p-12 border border-white/10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#FF8C00]/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#4BB8E8]/8 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#FF8C00]/10 border border-[#FF8C00]/30 text-[#FF8C00] font-mono text-xs mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span>Allama Iqbal Road, Near Bank of Punjab, Vehari</span>
              </div>

              <h3 className="font-black text-2xl sm:text-3xl text-white mb-5" style={{ fontFamily: "var(--font-outfit)" }}>
                Why Go Solar in Vehari? It Pays Back in Under 3 Years
              </h3>

              <p className="font-medium text-[#94A3B8] text-sm sm:text-base leading-relaxed mb-6" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                With MEPCO electricity rates rising to Rs. 50–60+ per unit in Punjab, a solar system installed by Dream Solar Energy pays for itself in under 3 years. Sell excess power back to MEPCO through Net Metering and bring your monthly bill to{" "}
                <span className="text-[#4CAF50] font-bold">Rs. 0</span>. Our systems are custom-designed for Vehari&apos;s climate and load patterns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 mb-6">
                {[
                  "Free On-Site Survey in Vehari",
                  "25-Year Panel Performance Guarantee",
                  "Custom Roof Engineering & Mounting",
                  "After-Sale Support & Maintenance",
                  "MEPCO Net Metering Assistance",
                  "100% Genuine A-Grade Products",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-[#4CAF50] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Wrench className="w-4 h-4 text-[#FF8C00]" />
                <span className="font-mono text-xs text-[#94A3B8]">PROFESSIONAL INSTALLATION TEAM</span>
              </div>
              <a
                href="#packages"
                className="font-bold text-xs text-[#FF8C00] hover:underline flex items-center space-x-1"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>VIEW PRODUCTS</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Services Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {services.map((s, i) => (
              <div
                key={i}
                className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-opacity-50 transition-all duration-300 group"
                style={{ "--hover-color": s.accent } as React.CSSProperties}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                    {s.icon}
                  </div>
                  <h4 className="font-bold text-white text-sm" style={{ fontFamily: "var(--font-outfit)" }}>
                    {s.title}
                  </h4>
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partners Row */}
        <div className="glass-panel rounded-2xl p-6 border border-white/10">
          <p className="font-mono text-xs text-[#64748B] uppercase tracking-widest mb-5 text-center">AUTHORIZED BRANDS WE CARRY</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Jinko Solar", "Longi Solar", "JA Solar", "Huawei", "Knox", "Inverex", "Growatt", "Pylontech"].map((brand) => (
              <span key={brand} className="font-bold text-sm text-[#94A3B8] hover:text-white transition-colors border border-white/10 rounded-lg px-4 py-2" style={{ fontFamily: "var(--font-outfit)" }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
