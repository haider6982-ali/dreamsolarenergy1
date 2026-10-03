"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { CheckCircle2, MessageSquare, TrendingDown, Zap } from "lucide-react";

// Each tier mapped to a distinct, topically-correct photo
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
  const recommended =
    tiers.find((t) => t.monthlyUnits >= unitsNeeded) || tiers[tiers.length - 1];

  const coveredUnits = Math.min(recommended.monthlyUnits, unitsNeeded);
  const estimatedSavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (
    recommended.approxCost / (estimatedSavings * 12)
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

        {/* Main Calculator Panel */}
        <div className="bg-white border border-solar-border rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_48px_rgba(11,23,46,0.04)]">

          {/* Slider */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div>
                <span className="font-sans text-xs uppercase tracking-wider font-bold text-solar-navy block">
                  Your Current Monthly Electricity Bill (PKR)
                </span>
                <span className="font-sans text-xs text-solar-muted mt-0.5 block">
                  Estimated grid consumption: ~{unitsNeeded.toLocaleString()} units / month
                </span>
              </div>
              <span className="font-display font-black text-4xl sm:text-5xl text-solar-navy tracking-tight">
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

          {/* Bill Metric Strip */}
          <div className="bg-solar-subtle border border-solar-border rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-solar-emerald shrink-0" />
              <span className="text-solar-muted">Estimated Grid Consumption:</span>
              <strong className="text-solar-navy font-display">{unitsNeeded.toLocaleString()} Units / Month</strong>
            </div>
            <div className="text-solar-muted">
              Tariff baseline: <strong className="text-solar-navy">Rs. {ratePerUnit}/unit (including fuel &amp; taxes)</strong>
            </div>
          </div>

          {/* Result: Left metrics + Right reactive image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left — Metrics */}
            <div className="lg:col-span-7 flex flex-col gap-5">

              {/* Recommended label */}
              <div>
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                  <span className="w-4 h-0.5 bg-solar-amber" />
                  <span>Recommended Solar System</span>
                </div>
                <h3 className="text-4xl sm:text-5xl font-display font-black text-solar-navy tracking-tight">
                  {recommended.kw} kW
                </h3>
                <p className="text-sm text-solar-muted mt-1 font-sans">
                  Best for: <strong className="text-solar-navy">{recommended.recommendedFor}</strong>
                </p>
              </div>

              {/* 3 stat tiles */}
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-solar-alabaster border border-solar-border rounded-[14px] p-4">
                  <p className="text-[10px] text-solar-muted font-bold uppercase tracking-wider mb-1">Monthly Generation</p>
                  <p className="text-xl font-display font-black text-solar-navy">~{recommended.monthlyUnits.toLocaleString()}</p>
                  <p className="text-[10px] text-solar-muted font-sans">units / mo</p>
                </div>
                <div className="bg-solar-alabaster border border-solar-border rounded-[14px] p-4">
                  <p className="text-[10px] text-solar-muted font-bold uppercase tracking-wider mb-1">Est. Monthly Saving</p>
                  <p className="text-xl font-display font-black text-solar-emerald">Rs. {estimatedSavings.toLocaleString()}</p>
                  <p className="text-[10px] text-solar-muted font-sans">per month</p>
                </div>
                <div className="bg-solar-alabaster border border-solar-border rounded-[14px] p-4">
                  <p className="text-[10px] text-solar-muted font-bold uppercase tracking-wider mb-1">Payback Period</p>
                  <p className="text-xl font-display font-black text-solar-navy">~{paybackYears}</p>
                  <p className="text-[10px] text-solar-muted font-sans">years</p>
                </div>
              </div>

              {/* What it runs */}
              <div className="bg-solar-navy rounded-2xl p-5">
                <span className="font-sans text-[10px] uppercase tracking-wider text-solar-amber font-bold block mb-2">
                  What this {recommended.kw} kW system runs:
                </span>
                <p className="font-display text-sm sm:text-base font-bold text-white leading-snug">
                  {recommended.runs}
                </p>
              </div>

              {/* Checkmarks */}
              <div className="flex flex-wrap gap-4 text-xs text-solar-muted">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> Payback in ~{paybackYears} Years
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> 25-Year Panel Warranty
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> 100% Original Tier-1
                </span>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/923202200884?text=${encodeURIComponent(
                    `Hello Tariq Mahmood, my monthly electricity bill is Rs. ${bill.toLocaleString()} and the website recommended a ${recommended.kw} kW system. Please provide a formal quotation.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs py-3.5 rounded-xl transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  Get Detailed Quote on WhatsApp
                </a>
                <button
                  onClick={() => openModal(`${recommended.kw} kW System`)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-bold text-xs py-3.5 rounded-xl transition-all shadow-md cursor-pointer"
                >
                  <Zap className="w-4 h-4 text-solar-amber" />
                  Request Free Site Audit
                </button>
              </div>
            </div>

            {/* Right — Reactive system image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-solar-border shadow-lg bg-solar-navy">
                <Image
                  key={recommended.kw}   /* key forces re-render / fade on change */
                  src={tierImg.src}
                  alt={tierImg.label}
                  fill
                  className="object-cover transition-opacity duration-500"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                {/* gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/70 via-transparent to-transparent" />

                {/* System type badge top-left */}
                <div className="absolute top-3 left-3">
                  <span className="bg-solar-deep/90 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg">
                    {recommended.recommendedFor}
                  </span>
                </div>

                {/* kW pill bottom */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="bg-solar-amber text-solar-deep text-xs font-display font-black py-1 px-3 rounded-lg">
                    {recommended.kw} kW System
                  </span>
                  <span className="bg-white/10 backdrop-blur text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-white/20">
                    ~Rs. {recommended.approxCost.toLocaleString()}
                  </span>
                </div>
              </div>

              {/* System selector pills — shows all 6, highlights active */}
              <div className="flex flex-wrap gap-2 mt-4">
                {tiers.map((t) => (
                  <span
                    key={t.kw}
                    className={`text-[11px] font-display font-bold px-3 py-1.5 rounded-lg border transition-all ${
                      t.kw === recommended.kw
                        ? "bg-solar-navy text-white border-solar-navy"
                        : "bg-white text-solar-muted border-solar-border"
                    }`}
                  >
                    {t.kw} kW
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer note */}
          <p className="font-sans text-xs text-solar-muted leading-relaxed mt-8 pt-6 border-t border-solar-border">
            * Calculations are based on prevailing NEPRA / MEPCO electricity rates (~Rs. 55/unit average with fuel charges). Actual savings are verified during the free on-site rooftop audit.
          </p>
        </div>
      </div>
    </section>
  );
}
