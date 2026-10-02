"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SavingsCalculator from "./SavingsCalculator";
import { Star, Quote } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SocialProofSectionProps {
  onOpenModal: () => void;
}

export default function SocialProofSection({ onOpenModal }: SocialProofSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: "Marcus Vance",
      role: "Architectural Designer & Homeowner",
      location: "Malibu, CA",
      quote: "Dream Solar Energy designed a roof array that looks like an integrated sculpture rather than an afterthought. Our electric bill dropped from $840/mo to $0 in the first month.",
      metric: "$9,800 Annual Savings",
      rating: 5,
      type: "RESIDENTIAL",
    },
    {
      name: "Elena Rostova",
      role: "VP of Sustainability, Lumina Biotech",
      location: "Austin, TX",
      quote: "Powering our 40,000 sq ft research facility required zero-downtime microgrid integration. The Dream Solar team delivered 1.2 Megawatts ahead of schedule with flawless precision.",
      metric: "1.2 MW Commercial Microgrid",
      rating: 5,
      type: "COMMERCIAL",
    },
    {
      name: "Julian Thorne",
      role: "Estate Developer",
      location: "Aspen, CO",
      quote: "During last winter's grid collapse, our entire estate stayed 100% powered while the rest of the valley went dark. Dream Solar's battery backup is absolute peace of mind.",
      metric: "100% Blackout Immunity",
      rating: 5,
      type: "ESTATE",
    },
  ];

  return (
    <section id="proof" ref={containerRef} className="relative py-28 px-6 md:px-12 bg-[#0E1015] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* Live Metrics Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-b border-white/10 pb-12">
          <div className="space-y-1">
            <span className="font-display font-black text-4xl sm:text-5xl text-[#FFB800]">42,800+</span>
            <span className="font-mono text-xs text-[#94A3B8] block uppercase">MWh CLEAN ENERGY GENERATED</span>
          </div>

          <div className="space-y-1">
            <span className="font-display font-black text-4xl sm:text-5xl text-[#B8FF00]">14,200+</span>
            <span className="font-mono text-xs text-[#94A3B8] block uppercase">RESIDENCES POWERED</span>
          </div>

          <div className="space-y-1">
            <span className="font-display font-black text-4xl sm:text-5xl text-[#00F5D4]">$18.4M+</span>
            <span className="font-mono text-xs text-[#94A3B8] block uppercase">CUSTOMER TARIFFS SAVED</span>
          </div>

          <div className="space-y-1">
            <span className="font-display font-black text-4xl sm:text-5xl text-white">99.9%</span>
            <span className="font-mono text-xs text-[#94A3B8] block uppercase">GRID UPTIME IMMUNITY</span>
          </div>
        </div>

        {/* Editorial Testimonials Stack */}
        <div>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <span className="font-mono text-xs text-[#FFB800] uppercase tracking-widest block mb-2">
              05 // PROOF OF PERFORMANCE
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Trusted By Visionary Homeowners & Industry Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-[#FFB800]/40 transition-colors group relative"
              >
                <Quote className="w-10 h-10 text-[#FFB800]/20 absolute top-6 right-6" />

                <div>
                  <div className="flex items-center space-x-1 text-[#FFB800] mb-4">
                    {Array.from({ length: t.rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-[#FFB800]" />
                    ))}
                  </div>

                  <p className="font-body text-sm text-[#F8FAFC] leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white text-base">{t.name}</h4>
                    <span className="font-body text-xs text-[#94A3B8]">{t.role} — {t.location}</span>
                  </div>

                  <span className="font-mono text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#B8FF00]/15 text-[#B8FF00]">
                    {t.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Embedded Interactive Savings Calculator */}
        <SavingsCalculator onOpenModal={onOpenModal} />
      </div>
    </section>
  );
}
