"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sun, BatteryCharging, Zap, ShieldCheck, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TransformationSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinnedContainerRef = useRef<HTMLDivElement>(null);
  const [panelProgress, setPanelProgress] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const pinned = pinnedContainerRef.current;
      if (!section || !pinned) return;

      // Pinned ScrollTrigger sequence scrubbed to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.6,
          onUpdate: (self) => {
            setPanelProgress(Math.floor(self.progress * 100));
          },
        },
      });

      // Step 1: Fade out old grid smog & transition ambient light to warm solar amber
      tl.to(".grid-smog", { opacity: 0, scale: 0.8, duration: 1 })
        .to(".house-base", { stroke: "#FFB800", filter: "drop-shadow(0 0 20px rgba(255,184,0,0.5))", duration: 1 }, "-=0.5")

        // Step 2: Animate roof solar panels snapping into place one by one
        .to(".solar-panel-module", {
          opacity: 1,
          scale: 1,
          stagger: 0.4,
          duration: 1.5,
          ease: "back.out(1.4)",
        })

        // Step 3: Energy lines ignite & battery bank activates
        .to(".energy-beam-line", {
          strokeDashoffset: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
        })
        .to(".battery-bank", {
          fill: "#B8FF00",
          filter: "drop-shadow(0 0 25px rgba(184,255,0,0.8))",
          duration: 1,
        })
        .to(".transformation-text-1", { opacity: 0, y: -20, duration: 0.8 }, "-=2")
        .to(".transformation-text-2", { opacity: 1, y: 0, duration: 1 }, "-=1");
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="transformation" ref={sectionRef} className="relative min-h-screen bg-[#08090C] overflow-hidden">
      <div ref={pinnedContainerRef} className="h-screen w-full flex flex-col items-center justify-between py-12 px-6 md:px-12 relative z-10">
        {/* Section Header Indicator */}
        <div className="text-center max-w-2xl mx-auto z-20">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#FFB800]/10 border border-[#FFB800]/30 text-[#FFB800] text-xs font-mono mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02 // THE TRANSFORMATION MOMENT (SCRUB TO DEPLOY)</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Watch Grid Smog Turn Into Clean Autonomy
          </h2>
        </div>

        {/* Isometric Architectural Residence Graphic */}
        <div className="relative w-full max-w-4xl h-[420px] sm:h-[480px] flex items-center justify-center my-auto">
          {/* Ambient Solar Field Backdrop */}
          <div className="absolute inset-0 bg-radial from-[#FFB800]/20 via-[#B8FF00]/5 to-transparent blur-3xl rounded-full" />

          {/* SVG Architectural Residence Scene */}
          <svg className="w-full h-full max-w-3xl overflow-visible" viewBox="0 0 800 500" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Grid Smog Aura (Old Grid) */}
            <circle className="grid-smog" cx="400" cy="250" r="220" fill="url(#smogGrad)" opacity="0.8" />
            
            <defs>
              <radialGradient id="smogGrad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 250) rotate(90) scale(220)">
                <stop stopColor="#331A00" stopOpacity="0.6" />
                <stop offset="1" stopColor="#08090C" stopOpacity="0" />
              </radialGradient>

              <linearGradient id="panelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" />
                <stop offset="50%" stopColor="#0F172A" />
                <stop offset="100%" stopColor="#FFB800" />
              </linearGradient>

              <linearGradient id="beamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFB800" />
                <stop offset="100%" stopColor="#B8FF00" />
              </linearGradient>
            </defs>

            {/* House Architectural Outline */}
            <g className="house-base" stroke="#475569" strokeWidth="2" strokeLinejoin="round">
              {/* Main Roof Structure */}
              <polygon points="400,100 150,260 650,260" fill="#0E1015" />
              {/* House Main Body */}
              <rect x="200" y="260" width="400" height="180" fill="#14171F" />
              {/* Foundation Glass Windows */}
              <rect x="240" y="300" width="80" height="100" fill="#1E293B" stroke="#64748B" />
              <rect x="480" y="300" width="80" height="100" fill="#1E293B" stroke="#64748B" />
              <rect x="360" y="340" width="80" height="100" fill="#0E1015" stroke="#FFB800" />
            </g>

            {/* Solar Panel Array Modules (Animated in by Scroll) */}
            <g className="solar-panels">
              {/* Roof Panel Module 1 */}
              <polygon className="solar-panel-module opacity-0 scale-75 transition-transform" points="220,235 290,190 340,190 270,235" fill="url(#panelGrad)" stroke="#FFB800" strokeWidth="1.5" />
              {/* Roof Panel Module 2 */}
              <polygon className="solar-panel-module opacity-0 scale-75 transition-transform" points="280,235 350,190 400,190 330,235" fill="url(#panelGrad)" stroke="#FFB800" strokeWidth="1.5" />
              {/* Roof Panel Module 3 */}
              <polygon className="solar-panel-module opacity-0 scale-75 transition-transform" points="340,235 410,190 460,190 390,235" fill="url(#panelGrad)" stroke="#FFB800" strokeWidth="1.5" />
              {/* Roof Panel Module 4 */}
              <polygon className="solar-panel-module opacity-0 scale-75 transition-transform" points="400,235 470,190 520,190 450,235" fill="url(#panelGrad)" stroke="#FFB800" strokeWidth="1.5" />
              {/* Roof Panel Module 5 */}
              <polygon className="solar-panel-module opacity-0 scale-75 transition-transform" points="460,235 530,190 580,190 510,235" fill="url(#panelGrad)" stroke="#FFB800" strokeWidth="1.5" />
            </g>

            {/* Kinetic Energy Beams (Flowing from Roof to Battery Bank) */}
            <path className="energy-beam-line opacity-0" d="M 400,235 L 400,440 L 680,440 L 680,380" stroke="url(#beamGrad)" strokeWidth="4" strokeDasharray="400" strokeDashoffset="400" fill="none" />

            {/* Smart Energy Storage Battery Bank */}
            <g className="battery-unit" transform="translate(640, 320)">
              <rect className="battery-bank" width="80" height="120" rx="12" fill="#1E293B" stroke="#B8FF00" strokeWidth="2" />
              <rect x="25" y="-8" width="30" height="8" rx="3" fill="#B8FF00" />
              <path d="M 40,30 L 30,65 L 45,65 L 35,95" stroke="#08090C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </svg>
        </div>

        {/* Dynamic Progress Indicator Strip */}
        <div className="w-full max-w-xl mx-auto z-20 flex flex-col items-center">
          <div className="flex items-center justify-between w-full font-mono text-xs mb-2">
            <span className="text-[#94A3B8]">ROOF SOLAR ARRAY DEPLOYMENT:</span>
            <span className="text-[#FFB800] font-bold">{panelProgress}% LOCKED</span>
          </div>

          <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-linear-to-r from-[#FFB800] via-[#B8FF00] to-[#00F5D4] transition-all duration-100" style={{ width: `${panelProgress}%` }} />
          </div>

          {/* Status Message */}
          <div className="mt-4 font-display font-semibold text-sm text-center">
            {panelProgress < 30 ? (
              <span className="text-[#94A3B8]">Step 1: Grid Disconnection & Roof Irradiance Mapping</span>
            ) : panelProgress < 75 ? (
              <span className="text-[#FFB800]">Step 2: N-Type Monocrystalline Array Snapping onto Roof Structure</span>
            ) : (
              <span className="text-[#B8FF00] flex items-center justify-center space-x-2">
                <BatteryCharging className="w-4 h-4 animate-bounce" />
                <span>Step 3: Autonomous Energy Storage Bank Online — 100% Clean Power</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
