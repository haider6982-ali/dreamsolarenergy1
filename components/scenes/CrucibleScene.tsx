"use client";

import React, { useState } from "react";
import Image from "next/image";
import { siteContent } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { ShieldCheck, ArrowRight, CheckCircle2, Award } from "lucide-react";

export default function CrucibleScene() {
  const [selectedItem, setSelectedItem] = useState<string | null>(null);
  const { openModal } = useQuoteModal();

  return (
    <section
      id="hardware"
      className="relative bg-solar-alabaster border-t border-solar-border pt-16 pb-16 sm:pt-20 sm:pb-20 overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        {/* Scene Header */}
        <div className="mb-10 lg:mb-12">
          <div className="flex items-center gap-2.5 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
            <span className="w-5 h-0.5 bg-solar-amber rounded-full" />
            <span>{siteContent.crucible.badge}</span>
            <span className="text-solar-border">•</span>
            <span className="text-solar-muted font-semibold">{siteContent.crucible.eyebrow}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <SplitHeading
              as="h2"
              className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-solar-navy tracking-tight uppercase max-w-2xl leading-[1.12]"
            >
              {siteContent.crucible.title}
            </SplitHeading>
            <p className="font-sans text-xs sm:text-sm text-solar-muted max-w-md leading-relaxed font-normal">
              {siteContent.crucible.subtitle}
            </p>
          </div>
        </div>

        {/* Component Filter / Overview Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-solar-border">
          <div className="flex items-center gap-2 text-xs font-bold text-solar-navy">
            <Award className="w-4 h-4 text-solar-amber" />
            <span>4 Essential System Pillars:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setSelectedItem(null)}
              className={`text-xs font-display font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                selectedItem === null
                  ? "bg-solar-deep text-white shadow-xs"
                  : "bg-white border border-solar-border text-solar-muted hover:text-solar-navy"
              }`}
            >
              All 4 Components
            </button>
            {siteContent.crucible.items.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedItem(selectedItem === item.id ? null : item.id)}
                className={`text-xs font-display font-semibold px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedItem === item.id
                    ? "bg-solar-deep text-white shadow-xs"
                    : "bg-white border border-solar-border text-solar-muted hover:text-solar-navy"
                }`}
              >
                Part 0{idx + 1}: {item.badge}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive 4-Column Grid: All cards are 100% visible, zero premature moving out of view */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteContent.crucible.items.map((item, idx) => {
            const isHighlighted = selectedItem === null || selectedItem === item.id;
            return (
              <div
                key={item.id}
                data-cursor="explore"
                className={`bg-white border rounded-2xl overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between group ${
                  isHighlighted
                    ? "border-solar-border opacity-100 scale-100"
                    : "border-solar-border/50 opacity-40 scale-98"
                }`}
              >
                <div>
                  {/* Visual Header with authentic matched image */}
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-solar-navy/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      priority={idx === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/90 via-solar-deep/20 to-transparent" />

                    {/* Tag badge */}
                    <div className="absolute top-3 left-3">
                      <span className="bg-solar-deep/90 text-white text-[10px] font-display font-bold uppercase tracking-wider px-2.5 py-1 rounded-md backdrop-blur-md border border-white/10 shadow-xs">
                        {item.badge}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <span className="text-[10px] uppercase tracking-wider text-solar-amber font-bold block mb-0.5">
                        Part 0{idx + 1} • {item.partner}
                      </span>
                      <h3 className="font-display font-bold text-base sm:text-lg tracking-tight leading-snug">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-solar-emerald mb-2.5">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      <span>{item.specs}</span>
                    </div>
                    <p className="font-sans text-xs text-solar-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-5 pb-5 pt-3 border-t border-solar-border/60 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-solar-muted flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-solar-emerald" />
                    <span>Genuine Brand</span>
                  </span>
                  <button
                    onClick={() => openModal(item.title)}
                    className="text-xs font-display font-bold text-solar-navy hover:text-solar-amber transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    <span>Get Pricing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Brand Partner Strip */}
        <div className="w-full pt-10">
          <div className="border-t border-solar-border pt-6 flex flex-wrap items-center justify-between gap-4">
            <span className="text-[11px] uppercase tracking-wider text-solar-muted font-bold font-mono">
              Direct Tier-1 Global Hardware Partners:
            </span>
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 font-display font-bold text-xs sm:text-sm text-solar-navy">
              {siteContent.crucible.brands.map((b) => (
                <span
                  key={b.name}
                  className="hover:text-solar-amber transition-colors cursor-default"
                >
                  {b.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
