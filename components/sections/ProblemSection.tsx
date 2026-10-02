"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AlertTriangle, TrendingUp, ShieldAlert, DollarSign, CloudOff } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [gridRate, setGridRate] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation tied to ScrollTrigger entry
      const obj = { val: 0 };
      gsap.to(obj, {
        val: 148,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        onUpdate: () => {
          setGridRate(Math.floor(obj.val));
        },
      });

      // Cards stagger reveal
      gsap.from(".problem-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 65%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="problem"
      ref={containerRef}
      className="relative py-28 px-6 md:px-12 bg-[#0B0D12] border-t border-white/5 overflow-hidden"
    >
      {/* Background Red-Amber Threat Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/10 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2 text-red-500 font-mono text-xs font-semibold uppercase tracking-widest mb-3">
              <AlertTriangle className="w-4 h-4 animate-bounce" />
              <span>01 // THE GRID FRAGILITY CRISIS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight max-w-2xl">
              You Are Paying For Energy You Do Not Own.
            </h2>
          </div>
          <p className="font-body text-[#94A3B8] text-sm md:text-base max-w-md mt-4 md:mt-0">
            Utility corporations raise electricity prices at 3.5× inflation while aging power grids fail during extreme weather events.
          </p>
        </div>

        {/* Big Counter Banner */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16 border border-red-500/20 shadow-[0_0_50px_rgba(239,68,68,0.1)] relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <span className="font-mono text-xs uppercase tracking-widest text-red-400">
                HISTORICAL 10-YEAR ELECTRICITY TARIFF SURGE
              </span>
              <div className="flex items-baseline space-x-2 mt-2">
                <span className="font-display font-black text-6xl sm:text-8xl text-red-500">
                  +{gridRate}%
                </span>
                <span className="font-display font-bold text-xl text-white">Utility Cost Growth</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-[#94A3B8] mt-2">
                Average homeowner utility bills increase every 18 months with zero cap on rate hikes.
              </p>
            </div>

            <div className="bg-[#14171F] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#94A3B8]">GRID DEPENDENCY:</span>
                <span className="text-red-400 font-bold">CRITICAL RISK</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#94A3B8]">ANNUAL TARIFF HIKE:</span>
                <span className="text-red-400 font-bold">8.4% / YEAR</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs border-t border-white/10 pt-3">
                <span className="text-white font-bold">DREAM SOLAR FIX:</span>
                <span className="text-[#B8FF00] font-bold">LOCKED $0 RATE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="problem-card glass-panel p-8 rounded-2xl border border-white/10 relative group hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Uncontrolled Tariff Surges</h3>
            <p className="font-body text-sm text-[#94A3B8]">
              Monopoly power utilities pass generation deficits, fuel price spikes, and infrastructure repair costs directly onto your monthly statement.
            </p>
          </div>

          <div className="problem-card glass-panel p-8 rounded-2xl border border-white/10 relative group hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Blackout Vulnerability</h3>
            <p className="font-body text-sm text-[#94A3B8]">
              Traditional grid delivery leaves your home defenseless against transformer failures, grid overload, and extreme thermal surges.
            </p>
          </div>

          <div className="problem-card glass-panel p-8 rounded-2xl border border-white/10 relative group hover:border-red-500/40 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 text-red-500 flex items-center justify-center mb-6">
              <CloudOff className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white mb-2">Fossil Smog Footprint</h3>
            <p className="font-body text-sm text-[#94A3B8]">
              Over 60% of regional grid electricity still originates from coal and gas combustion, emitting thousands of tons of atmospheric carbon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
