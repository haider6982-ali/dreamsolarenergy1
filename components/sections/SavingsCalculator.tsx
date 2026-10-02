"use client";

import React, { useState } from "react";
import { TrendingDown, Zap, Clock, ArrowRight } from "lucide-react";

interface SavingsCalculatorProps {
  onOpenModal?: () => void;
}

export default function SavingsCalculator({ onOpenModal }: SavingsCalculatorProps) {
  const [bill, setBill] = useState(25000);

  const ratePerUnit = 55; // Average PKR per unit in Pakistan (MEPCO / LESCO inclusive of surcharges)
  const units = Math.round(bill / ratePerUnit);

  const sizes = [
    { kw: 3, monthlyUnits: 420, approxCost: 550000 },
    { kw: 5, monthlyUnits: 700, approxCost: 875000 },
    { kw: 10, monthlyUnits: 1400, approxCost: 1550000 },
    { kw: 15, monthlyUnits: 2100, approxCost: 2250000 },
  ];

  const recommended = sizes.find((s) => s.monthlyUnits >= units) || sizes[sizes.length - 1];
  const coveredUnits = Math.min(recommended.monthlyUnits, units);
  const estimatedSavings = Math.round(coveredUnits * ratePerUnit);
  const paybackYears = (recommended.approxCost / (estimatedSavings * 12)).toFixed(1);

  return (
    <section id="calculator" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#EFEDE7] border-t border-[#E2DFD6]">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            Solar ROI Estimator
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Solar Savings &amp; Capacity Calculator
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base mt-2">
            Adjust your current monthly electricity bill to calculate the ideal system capacity,
            estimated bill reduction, and projected return on investment.
          </p>
        </div>

        {/* Calculator Body Card (warm neutral card with 8px radius) */}
        <div className="bg-[#F8F7F4] border border-[#E2DFD6] rounded-lg p-6 sm:p-10 shadow-site">
          {/* Slider Control */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <label className="text-sm font-bold text-[#14202F]">
                Current Monthly Electricity Bill (PKR):
              </label>
              <span
                className="text-2xl sm:text-3xl font-black text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                PKR {bill.toLocaleString()}
              </span>
            </div>

            <input
              type="range"
              min={5000}
              max={150000}
              step={1000}
              value={bill}
              onChange={(e) => setBill(Number(e.target.value))}
              className="w-full h-2.5 bg-[#EFEDE7] rounded-lg appearance-none cursor-pointer accent-[#F7941D]"
              aria-label="Electricity Bill Slider"
            />

            <div className="flex justify-between text-xs font-semibold text-[#5B6472] mt-2">
              <span>PKR 5,000 / mo</span>
              <span>PKR 75,000 / mo</span>
              <span>PKR 150,000+ / mo</span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            {/* Monthly Savings - Eco/Savings Micro-Moment with Leaf Green */}
            <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-lg p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#3C8C2E]/10 text-[#3C8C2E] flex items-center justify-center mb-3">
                <TrendingDown className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-[#5B6472] uppercase tracking-wider mb-1">
                Estimated Monthly Savings
              </p>
              <p
                className="text-2xl font-black text-[#3C8C2E]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                PKR {estimatedSavings.toLocaleString()}
              </p>
              <p className="text-[11px] text-[#5B6472] mt-1">~{coveredUnits} units offset / mo</p>
            </div>

            {/* Recommended Capacity */}
            <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-lg p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#F7941D]/15 text-[#F7941D] flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-[#5B6472] uppercase tracking-wider mb-1">
                Recommended System
              </p>
              <p
                className="text-2xl font-black text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                {recommended.kw} kW
              </p>
              <p className="text-[11px] text-[#5B6472] mt-1">~PKR {recommended.approxCost.toLocaleString()}</p>
            </div>

            {/* Payback Period */}
            <div className="bg-[#EFEDE7] border border-[#E2DFD6] rounded-lg p-5 text-center">
              <div className="w-10 h-10 mx-auto rounded-lg bg-[#1B2A4A]/10 text-[#1B2A4A] flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <p className="text-[11px] font-bold text-[#5B6472] uppercase tracking-wider mb-1">
                Payback Period
              </p>
              <p
                className="text-2xl font-black text-[#1B2A4A]"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                ~{paybackYears} Years
              </p>
              <p className="text-[11px] text-[#5B6472] mt-1">Free electricity thereafter</p>
            </div>
          </div>

          {/* Action CTA within Calculator */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2DFD6]">
            <p className="text-xs text-[#5B6472] text-center sm:text-left max-w-md leading-relaxed">
              * Calculations are based on prevailing NEPRA / DISCO average tariff rates (~Rs. 55/unit).
              Exact system output varies with rooftop shade, orientation, and inverter specifications.
            </p>

            <a
              href={`https://wa.me/923202200884?text=${encodeURIComponent(
                `Hello Dream Solar Energy, based on the calculator, my monthly bill is PKR ${bill.toLocaleString()}. I would like to get a formal quotation for a ${recommended.kw} kW solar system.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs sm:text-sm px-6 py-3 rounded-lg transition-colors shadow-site shrink-0"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              <span>Get Formal Quote for {recommended.kw} kW</span>
              <ArrowRight className="w-4 h-4 text-[#0F1B2E]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
