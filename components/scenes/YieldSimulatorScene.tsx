"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent, CalculatorTier } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

const TIER_IMAGES: Record<number, { src: string; label: string }> = {
  4:  { src: "/images/pkg-4kw-rooftop.jpg",   label: "3–5 Marla Residential Rooftop" },
  6:  { src: "/images/pkg-6kw-rooftop.jpg",   label: "5–10 Marla Family Home" },
  8:  { src: "/images/pkg-8kw-rooftop.jpg",   label: "10 Marla – 1 Kanal Home" },
  10: { src: "/images/residential-solar.jpg", label: "1 Kanal Home / Net-Metered Setup" },
  15: { src: "/images/commercial-solar.jpg",  label: "Commercial Plaza Installation" },
  20: { src: "/images/industrial-solar.jpg",  label: "Industrial & Agricultural System" },
};

export default function YieldSimulatorScene() {
  const { openModal } = useQuoteModal();
  const [bill, setBill] = useState(siteContent.calculator.defaultBill);

  const ratePerUnit = siteContent.calculator.ratePerUnit;
  const unitsNeeded = Math.round(bill / ratePerUnit);

  const tiers = siteContent.calculator.tiers;
  const recommended: CalculatorTier =
    tiers.find((t) => t.monthlyUnits >= unitsNeeded) || tiers[tiers.length - 1];

  const coveredUnits = Math.min(recommended.monthlyUnits, unitsNeeded);
  const estimatedMonthlySavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (
    recommended.approxCost /
    (estimatedMonthlySavings * 12)
  ).toFixed(1);

  const tierImg = TIER_IMAGES[recommended.kw] ?? TIER_IMAGES[20];

  return (
    <section
      id="calculator"
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 px-5 sm:px-8 lg:px-12 bg-solar-alabaster border-t border-solar-border overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Scene Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.calculator.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-solar-muted font-semibold">
            {siteContent.calculator.eyebrow}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <SplitHeading
            as="h2"
            className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-solar-navy tracking-tight uppercase max-w-2xl leading-tight"
          >
            {siteContent.calculator.title}
          </SplitHeading>
          <p className="font-sans text-sm sm:text-base text-solar-muted max-w-md leading-relaxed">
            {siteContent.calculator.subtitle}
          </p>
        </div>

        {/* Simulator Cockpit */}
        <div className="bg-white border border-solar-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_48px_rgba(11,23,46,0.04)]">
          {/* Slider Row */}
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-solar-navy block">
                  Your Current Monthly Electricity Bill (PKR)
                </span>
                <span className="font-sans text-xs text-solar-muted mt-0.5 block">
                  Estimated monthly grid consumption: ~{unitsNeeded} units
                </span>
              </div>
              <span className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-solar-navy tracking-tight">
                PKR {bill.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min={siteContent.calculator.minBill}
              max={siteContent.calculator.maxBill}
              step={siteContent.calculator.step}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              aria-label="Electricity Bill Slider"
              className="w-full h-3 bg-solar-subtle rounded-lg appearance-none cursor-pointer accent-solar-navy"
            />

            <div className="flex justify-between font-sans text-xs text-solar-muted font-semibold mt-3">
              <span>PKR 5,000 / mo</span>
              <span>PKR 75,000 / mo</span>
              <span>PKR 150,000+ / mo</span>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-solar-alabaster border border-solar-border rounded-[18px] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-solar-emerald block mb-2">
                  PROJECTED MONTHLY SAVINGS
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-solar-emerald tracking-tight block">
                  PKR {estimatedMonthlySavings.toLocaleString()}
                </span>
              </div>
              <p className="font-sans text-xs text-solar-muted mt-4 pt-4 border-t border-solar-border">
                Cuts ~{coveredUnits} units/month permanently from your WAPDA bill.
              </p>
            </div>

            <div className="bg-solar-alabaster border border-solar-border rounded-[18px] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-solar-amber block mb-2">
                  RECOMMENDED SYSTEM SIZE
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-solar-navy tracking-tight block">
                  {recommended.kw} kW
                </span>
              </div>
              <p className="font-sans text-xs text-solar-muted mt-4 pt-4 border-t border-solar-border">
                Best for {recommended.recommendedFor} • ~PKR {recommended.approxCost.toLocaleString()}
              </p>
            </div>

            <div className="bg-solar-alabaster border border-solar-border rounded-[18px] p-6 lg:p-8 flex flex-col justify-between">
              <div>
                <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-solar-navy block mb-2">
                  ESTIMATED PAYBACK TIME
                </span>
                <span className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-solar-navy tracking-tight block">
                  ~{paybackYears} Years
                </span>
              </div>
              <p className="font-sans text-xs text-solar-emerald font-semibold mt-4 pt-4 border-t border-solar-border">
                100% Free electricity for remaining 22+ years of panel life.
              </p>
            </div>
          </div>

          {/* Operational Load Strip with image */}
          <div className="bg-solar-navy text-white rounded-[20px] p-6 sm:p-8 mb-8 overflow-hidden relative">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-[14px] overflow-hidden shrink-0 border border-white/20 bg-black/40">
                  <Image
                    key={recommended.kw}
                    src={tierImg.src}
                    alt={tierImg.label}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
                <div>
                  <span className="font-sans text-xs uppercase tracking-wider text-solar-amber font-bold block mb-1">
                    WHAT THIS {recommended.kw} KW SYSTEM RUNS:
                  </span>
                  <p className="font-display text-base sm:text-lg font-bold text-slate-100 max-w-xl">
                    {recommended.runs}
                  </p>
                  <span className="font-sans text-[11px] text-slate-400 mt-1 block">
                    Ideal for: {tierImg.label}
                  </span>
                </div>
              </div>

              <button
                onClick={() => openModal(`${recommended.kw} kW System Package`)}
                className="font-sans text-xs sm:text-sm uppercase tracking-wider font-bold bg-solar-amber text-solar-navy hover:bg-white px-8 py-4 rounded-full transition-all duration-300 shrink-0 cursor-pointer shadow-md self-start lg:self-center"
              >
                Get Free Quote for {recommended.kw} kW
              </button>
            </div>
          </div>

          <p className="font-sans text-xs text-solar-muted leading-relaxed">
            * Calculations are based on prevailing NEPRA / MEPCO electricity rates (~Rs. 55/unit average with fuel charges). Actual savings are verified during the free on-site rooftop audit.
          </p>
        </div>
      </div>
    </section>
  );
}
