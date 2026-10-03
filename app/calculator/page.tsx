"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CheckCircle2, MessageSquare, TrendingDown, Zap } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import PageHero from "@/components/ui/PageHero";

const sizes = [
  {
    kw: 4,
    monthlyUnits: 520,
    approxCost: 650000,
    recommendedFor: "3–5 Marla Homes",
    runs: "1 Inverter AC (1.5 Ton) + Refrigerator + Water Pump + Fans & LED Lights",
    image: "/images/pkg-4kw-rooftop.jpg",
  },
  {
    kw: 6,
    monthlyUnits: 820,
    approxCost: 980000,
    recommendedFor: "5–10 Marla Homes",
    runs: "2 Inverter ACs + Refrigerator + Deep Freezer + Water Pump + Night Battery Backup",
    image: "/images/pkg-6kw-rooftop.jpg",
  },
  {
    kw: 8,
    monthlyUnits: 1100,
    approxCost: 1280000,
    recommendedFor: "10 Marla – 1 Kanal Homes",
    runs: "3 Inverter ACs + Complete Household Load + Full Night Battery Backup",
    image: "/images/pkg-8kw-rooftop.jpg",
  },
  {
    kw: 10,
    monthlyUnits: 1450,
    approxCost: 1620000,
    recommendedFor: "1 Kanal Homes & Net Metering",
    runs: "3–4 Inverter ACs + Complete Household/Shop Load + Extra Units Exported to WAPDA",
    image: "/images/residential-solar.jpg",
  },
  {
    kw: 15,
    monthlyUnits: 2150,
    approxCost: 2350000,
    recommendedFor: "Large Luxury Homes & Commercial",
    runs: "5+ ACs Simultaneously + Commercial Lighting + Heavy WAPDA Bill Credits",
    image: "/images/commercial-solar.jpg",
  },
  {
    kw: 20,
    monthlyUnits: 2800,
    approxCost: 2950000,
    recommendedFor: "Industrial & Agricultural",
    runs: "Commercial Plaza + Private Clinic + Small Factory + Solar Tube Well Pumping",
    image: "/images/industrial-solar.jpg",
  },
];

export default function CalculatorPage() {
  const [bill, setBill] = useState(35000);
  const { openModal } = useQuoteModal();

  const ratePerUnit = 55;
  const units = Math.round(bill / ratePerUnit);

  const recommended = sizes.find((s) => s.monthlyUnits >= units) || sizes[sizes.length - 1];
  const coveredUnits = Math.min(recommended.monthlyUnits, units);
  const estimatedSavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (recommended.approxCost / (estimatedSavings * 12)).toFixed(1);

  return (
    <div className="bg-solar-alabaster min-h-screen">
      {/* Page Hero */}
      <PageHero
        crumb="Solar Calculator"
        eyebrow="Bill & Solar Estimator"
        title="Find Out How Much You Can Save"
        accent="On Electricity Bills"
        description={
          <p>
            Move the slider to match your average monthly WAPDA / MEPCO electricity bill. We will calculate the exact solar kilowatt size you need, your estimated monthly savings, and your payback time.
          </p>
        }
        visualTone="navy"
        visualKicker="Interactive Estimator"
        visualBody="Calculated using current MEPCO residential and commercial slab tariffs."
        photoSrc="/images/solar-savings-outcome.jpg"
        photoAlt="Solar panel array gleaming under bright blue sky — energy savings achieved"
        stats={[
          { value: "Up to 90%", label: "Bill Reduction" },
          { value: "~2.5 Yrs", label: "Typical Payback" },
        ]}
      />

      {/* Calculator Body */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white border border-solar-border rounded-2xl p-6 sm:p-10 shadow-sm">

            {/* Slider */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <label className="text-sm sm:text-base font-display font-bold text-solar-navy">
                  Select Your Average Monthly Electricity Bill:
                </label>
                <span className="text-2xl sm:text-3xl font-display font-black text-solar-amber">
                  Rs. {bill.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min={5000}
                max={150000}
                step={2500}
                value={bill}
                onChange={(e) => setBill(Number(e.target.value))}
                className="w-full h-3 bg-solar-subtle border border-solar-border rounded-lg appearance-none cursor-pointer accent-solar-amber"
              />

              <div className="flex justify-between text-xs text-solar-muted mt-2 font-mono">
                <span>Rs. 5,000 / mo</span>
                <span>Rs. 75,000 / mo</span>
                <span>Rs. 150,000+ / mo</span>
              </div>
            </div>

            {/* Bill Metric Strip */}
            <div className="bg-solar-subtle border border-solar-border rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-solar-emerald shrink-0" />
                <span className="text-solar-muted">Estimated Grid Consumption:</span>
                <strong className="text-solar-navy font-display">{units.toLocaleString()} Units / Month</strong>
              </div>
              <div className="text-solar-muted">
                Tariff baseline: <strong className="text-solar-navy">Rs. {ratePerUnit}/unit (including fuel &amp; taxes)</strong>
              </div>
            </div>

            {/* Result: Left metrics + Right reactive image */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

              {/* Left — Metrics */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                    <span className="w-4 h-0.5 bg-solar-amber" />
                    <span>Recommended Solar System</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-display font-black text-solar-navy tracking-tight">
                    {recommended.kw} kW System
                  </h3>
                  <p className="text-sm text-solar-muted mt-1 font-sans">
                    Best for: <strong className="text-solar-navy">{recommended.recommendedFor}</strong>
                  </p>
                </div>

                {/* Stat tiles */}
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

              {/* Right — Reactive image */}
              <div className="lg:col-span-5">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-solar-border shadow-lg bg-solar-navy">
                  <Image
                    key={recommended.kw}
                    src={recommended.image}
                    alt={recommended.recommendedFor}
                    fill
                    className="object-cover transition-opacity duration-500"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/70 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="bg-solar-deep/90 text-white text-[10px] font-bold py-1 px-2.5 rounded-lg">
                      {recommended.recommendedFor}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="bg-solar-amber text-solar-deep text-xs font-display font-black py-1 px-3 rounded-lg">
                      {recommended.kw} kW System
                    </span>
                    <span className="bg-white/10 backdrop-blur text-white text-[10px] font-bold py-1 px-2.5 rounded-lg border border-white/20">
                      ~Rs. {recommended.approxCost.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* System selector pills */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {sizes.map((s) => (
                    <span
                      key={s.kw}
                      className={`text-[11px] font-display font-bold px-3 py-1.5 rounded-lg border transition-all ${
                        s.kw === recommended.kw
                          ? "bg-solar-navy text-white border-solar-navy"
                          : "bg-white text-solar-muted border-solar-border"
                      }`}
                    >
                      {s.kw} kW
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer note */}
            <div className="text-center pt-4 border-t border-solar-border">
              <p className="text-xs text-solar-muted font-sans">
                * Estimates are based on average 4.8 sun hours per day in South Punjab and current MEPCO tariff slabs. Final equipment pricing depends on roof structure height and battery backup capacity.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
