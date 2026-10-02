"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";

export default function StandardsScene() {
  const containerRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

          if (isReduced || !gridRef.current) return;

          const cards = gridRef.current.children;
          gsap.fromTo(
            cards,
            { y: 50, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              stagger: 0.08,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              scrollTrigger: {
                trigger: gridRef.current,
                start: "top 80%",
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
      id="standards"
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 px-5 sm:px-8 lg:px-12 bg-solar-alabaster border-t border-solar-border overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Scene Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.standards.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-solar-muted font-semibold">
            {siteContent.standards.eyebrow}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <SplitHeading
            as="h2"
            className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-solar-navy tracking-tight uppercase max-w-2xl leading-tight"
          >
            {siteContent.standards.title}
          </SplitHeading>
          <p className="font-sans text-sm sm:text-base text-solar-muted max-w-md leading-relaxed">
            {siteContent.standards.subtitle}
          </p>
        </div>

        {/* The 6 Guarantees */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {siteContent.standards.items.map((std) => (
            <div
              key={std.number}
              className="bg-white border border-solar-border rounded-[20px] p-8 shadow-[0_4px_24px_rgba(11,23,46,0.02)] hover:border-solar-navy/40 hover:shadow-[0_12px_32px_rgba(11,23,46,0.06)] transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <span className="font-serif text-5xl sm:text-6xl text-solar-border group-hover:text-solar-amber transition-colors duration-300 block mb-6 font-normal">
                  {std.number}
                </span>
                <h3 className="font-display font-black text-xl text-solar-navy mb-3 leading-snug">
                  {std.title}
                </h3>
                <p className="font-sans text-sm text-solar-muted leading-relaxed">
                  {std.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-solar-border/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-solar-emerald" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-solar-navy">
                  Dream Solar Quality Standard
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
