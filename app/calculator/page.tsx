"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  CheckCircle2,
  MessageSquare,
  TrendingDown,
  Zap,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import PageHero from "@/components/ui/PageHero";

export default function CalculatorPage() {
  const [bill, setBill] = useState(35000);
  const { openModal } = useQuoteModal();

  const ratePerUnit = 55; // Average PKR per unit with taxes and fuel adjustments in South Punjab
  const units = Math.round(bill / ratePerUnit);

  const sizes = [
    {
      kw: 3,
      monthlyUnits: 420,
      approxCost: 550000,
      bestFor: "Fans, Fridge, LED Lights & 1 Inverter AC",
      image: "/images/residential-solar.jpg",
      type: "Residential Compact",
    },
    {
      kw: 5,
      monthlyUnits: 700,
      approxCost: 875000,
      bestFor: "1.5 Ton AC, Refrigerator, Water Pump, Household Load",
      image: "/images/residential-solar.jpg",
      type: "Residential Standard",
    },
    {
      kw: 7,
      monthlyUnits: 980,
      approxCost: 1190000,
      bestFor: "2 Inverter ACs, Washing Machine, Complete Home Load",
      image: "/images/solar-rooftop-showcase.jpg",
      type: "Residential Hybrid",
    },
    {
      kw: 10,
      monthlyUnits: 1400,
      approxCost: 1550000,
      bestFor: "3 Inverter ACs, Deep Freezer, MEPCO Net Metering",
      image: "/images/commercial-solar.jpg",
      type: "Executive / Net-Metered",
    },
    {
      kw: 15,
      monthlyUnits: 2100,
      approxCost: 2250000,
      bestFor: "4+ ACs, Large 1 Kanal Bungalow or Commercial Plaza",
      image: "/images/commercial-solar.jpg",
      type: "Commercial Three-Phase",
    },
    {
      kw: 20,
      monthlyUnits: 2800,
      approxCost: 2950000,
      bestFor: "Commercial Plaza, Private Clinic, Small Factory",
      image: "/images/industrial-solar.jpg",
      type: "Industrial Three-Phase",
    },
  ];

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
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-solar-border rounded-2xl p-6 sm:p-10 shadow-sm">
            
            {/* Slider Control */}
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

            {/* Quick Bill Metric Strip */}
            <div className="bg-solar-subtle border border-solar-border rounded-xl p-4 mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-solar-emerald shrink-0" />
                <span className="text-solar-muted">Estimated Grid Consumption:</span>
                <strong className="text-solar-navy font-display">{units.toLocaleString()} Units / Month</strong>
              </div>
              <div className="text-solar-muted">
                Tariff baseline: <strong className="text-solar-navy">Rs. {ratePerUnit}/unit (including fuel & taxes)</strong>
              </div>
            </div>

            {/* Recommendation Result Card */}
            <div className="bg-solar-deep border border-white/10 rounded-2xl p-6 sm:p-8 text-white shadow-xl mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-solar-amber/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Result Left */}
                <div className="md:col-span-7">
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
                    <span className="w-4 h-0.5 bg-solar-amber" />
                    <span>Recommended Solar System</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-2">
                    {recommended.kw} kW System
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mb-6 font-sans">
                    Runs: <strong className="text-solar-amber">{recommended.bestFor}</strong>
                  </p>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                        Monthly Generation
                      </p>
                      <p className="text-lg sm:text-xl font-display font-bold text-white">
                        ~{recommended.monthlyUnits} Units
                      </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
                      <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                        Estimated Savings
                      </p>
                      <p className="text-lg sm:text-xl font-display font-bold text-solar-emerald">
                        Rs. {estimatedSavings.toLocaleString()} / mo
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> Payback in ~{paybackYears} Years
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> 25-Year Panel Life
                    </span>
                  </div>
                </div>

                {/* Result Right */}
                <div className="md:col-span-5 flex flex-col justify-center">
                  <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden border border-white/15 shadow-md mb-4 bg-solar-navy">
                    <Image
                      src={recommended.image}
                      alt={recommended.type}
                      fill
                      className="object-cover"
                      sizes="300px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                    <div className="absolute top-2.5 left-2.5">
                      <span className="bg-solar-deep/85 text-white text-[10px] font-bold py-0.5 px-2 rounded-md">
                        {recommended.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://wa.me/923202200884?text=${encodeURIComponent(`Hello Tariq Mahmood, my monthly electricity bill is Rs. ${bill.toLocaleString()} and the website recommended a ${recommended.kw} kW system. Please provide a formal quotation.`)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-bold text-xs py-3 rounded-xl transition-all shadow-md"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Get Detailed Quote on WhatsApp</span>
                    </a>

                    <button
                      onClick={() => openModal(`${recommended.kw} kW System`)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-bold text-xs py-3 rounded-xl transition-all shadow-md cursor-pointer border border-white/10"
                    >
                      <Zap className="w-4 h-4 text-solar-amber" />
                      <span>Request Free Site Audit</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Note */}
            <div className="text-center pt-2">
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
