"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";
import { CheckCircle2, X } from "lucide-react";

export default function TensionScene() {
  const containerRef = useRef<HTMLElement>(null);
  const tariffNumberRef = useRef<HTMLSpanElement>(null);
  const solarZeroRef = useRef<HTMLSpanElement>(null);
  const gridCardRef = useRef<HTMLDivElement>(null);
  const solarCardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isReduced: "(prefers-reduced-motion: reduce)",
          isStandard: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isReduced } = context.conditions as { isReduced: boolean };

          if (isReduced) {
            return;
          }

          // Counter tick-up for grid tariff
          const tariffObj = { val: 0 };
          gsap.to(tariffObj, {
            val: 72,
            duration: 2.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 75%",
            },
            onUpdate: () => {
              if (tariffNumberRef.current) {
                tariffNumberRef.current.textContent = `Rs. ${Math.round(tariffObj.val)}+`;
              }
            },
          });

          // Cards reveal with subtle tilt
          gsap.fromTo(
            gridCardRef.current,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              scrollTrigger: {
                trigger: gridCardRef.current,
                start: "top 85%",
              },
            }
          );

          gsap.fromTo(
            solarCardRef.current,
            { y: 80, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              delay: 0.15,
              scrollTrigger: {
                trigger: solarCardRef.current,
                start: "top 85%",
              },
            }
          );
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative pt-32 pb-24 sm:pt-36 sm:pb-32 px-5 sm:px-8 lg:px-12 bg-solar-alabaster border-t border-solar-border overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Act Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.tension.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-solar-muted font-semibold">
            {siteContent.tension.eyebrow}
          </span>
        </div>

        {/* Crisp Punchy Headline + Editorial Manifesto */}
        <div className="max-w-4xl mb-12 lg:mb-16">
          <SplitHeading
            as="h2"
            className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-solar-navy tracking-tight uppercase leading-[1.08]"
          >
            {siteContent.tension.headline}
          </SplitHeading>
          <p className="font-serif italic text-base sm:text-xl text-solar-muted leading-relaxed mt-5">
            &ldquo;{siteContent.tension.mainQuote}&rdquo;
          </p>
          <p className="font-sans text-xs uppercase tracking-wider text-solar-amber font-bold mt-3">
            — {siteContent.tension.author}
          </p>
        </div>

        {/* Metric Juxtaposition: Grid Trap vs Solar Freedom */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Card 1: The Fossil Grid Trap (Tension) */}
          <div
            ref={gridCardRef}
            className="bg-white border border-solar-border p-8 sm:p-12 rounded-[20px] shadow-[0_4px_24px_rgba(11,23,46,0.03)] flex flex-col justify-between"
          >
            <div>
              <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-[#DC2626] bg-[#FEF2F2] border border-[#FEE2E2] px-3.5 py-1.5 rounded-full inline-block mb-6">
                WITHOUT SOLAR (WAPDA GRID)
              </span>
              <div className="mb-8">
                <span
                  ref={tariffNumberRef}
                  className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-solar-navy tracking-tight block"
                >
                  {siteContent.tension.statLeft.value}
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-solar-navy font-bold mt-2 block">
                  {siteContent.tension.statLeft.label}
                </span>
                <p className="font-sans text-xs sm:text-sm text-solar-muted mt-1.5">
                  {siteContent.tension.statLeft.subtext}
                </p>
              </div>

              <h3 className="font-display font-bold text-lg text-solar-navy mb-4">
                {siteContent.tension.gridTrapTitle}
              </h3>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-solar-muted">
                {siteContent.tension.gridTrapPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Card 2: Solar Freedom (Release) */}
          <div
            ref={solarCardRef}
            className="bg-solar-navy text-white border border-solar-navy p-8 sm:p-12 rounded-[20px] shadow-[0_20px_40px_rgba(11,23,46,0.15)] flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-solar-amber/15 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10">
              <span className="font-sans text-[11px] uppercase tracking-wider font-bold text-solar-amber bg-solar-amber/15 border border-solar-amber/30 px-3.5 py-1.5 rounded-full inline-block mb-6">
                WITH DREAM SOLAR SYSTEM
              </span>
              <div className="mb-8">
                <span
                  ref={solarZeroRef}
                  className="font-display font-black text-5xl sm:text-6xl lg:text-7xl text-solar-amber tracking-tight block"
                >
                  {siteContent.tension.statRight.value}
                </span>
                <span className="font-sans text-xs uppercase tracking-wider text-slate-200 font-bold mt-2 block">
                  {siteContent.tension.statRight.label}
                </span>
                <p className="font-sans text-xs sm:text-sm text-slate-300 mt-1.5">
                  {siteContent.tension.statRight.subtext}
                </p>
              </div>

              <h3 className="font-display font-bold text-lg text-white mb-4">
                {siteContent.tension.solarFreedomTitle}
              </h3>
              <ul className="space-y-3 font-sans text-xs sm:text-sm text-slate-200">
                {siteContent.tension.solarFreedomPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
