"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/content/site";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { MapPin } from "lucide-react";
import SplitHeading from "../ui/SplitHeading";

export default function ProjectOdysseyScene() {
  const containerRef = useRef<HTMLElement>(null);
  const wipeRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const { openModal } = useQuoteModal();

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
          isMobile: "(max-width: 1023px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { isDesktop } = context.conditions as { isDesktop: boolean };

          if (isDesktop && wipeRef.current) {
            // Signature Scroll Moment: Dynamic clip-path horizon curtain expanding from top to bottom
            gsap.fromTo(
              wipeRef.current,
              { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
              {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                ease: "power2.inOut",
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top 80%",
                  end: "top 20%",
                  scrub: 1.2,
                },
              }
            );

            // Staggered card depth entrance
            if (projectsGridRef.current) {
              const cards = projectsGridRef.current.children;
              gsap.fromTo(
                cards,
                { y: 80, opacity: 0 },
                {
                  y: 0,
                  opacity: 1,
                  duration: 1,
                  stagger: 0.15,
                  ease: "cubic-bezier(0.16, 1, 0.3, 1)",
                  scrollTrigger: {
                    trigger: projectsGridRef.current,
                    start: "top 75%",
                  },
                }
              );
            }
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="odyssey"
      className="relative bg-solar-deep text-white pt-28 pb-20 sm:pt-32 sm:pb-28 px-5 sm:px-8 lg:px-12 overflow-hidden scroll-mt-20"
    >
      {/* Signature Wipe Curtain */}
      <div
        ref={wipeRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-solar-navy solar-dark-ambient pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Scene Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.odyssey.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-slate-300 font-semibold">
            {siteContent.odyssey.eyebrow}
          </span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-12">
          <SplitHeading
            as="h2"
            className="font-display font-black text-2xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase max-w-2xl leading-tight"
          >
            {siteContent.odyssey.title}
          </SplitHeading>
          <p className="font-sans text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
            {siteContent.odyssey.subtitle}
          </p>
        </div>

        {/* Real Deployments Grid */}
        <div
          ref={projectsGridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {siteContent.odyssey.projects.map((proj) => (
            <div
              key={proj.id}
              data-cursor="view"
              className="bg-solar-navy/90 border border-white/10 rounded-[22px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.4)] group flex flex-col justify-between hover:border-solar-amber/50 transition-all duration-500"
            >
              <div>
                {/* Real High-Resolution Project Photo */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-black/40">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-solar-navy via-transparent to-black/30" />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="font-sans text-[11px] uppercase tracking-wider font-bold bg-solar-navy/90 text-white px-3.5 py-1 rounded-full border border-white/20 backdrop-blur-md">
                      {proj.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <span className="font-display text-xs tracking-wider text-slate-200 bg-black/70 px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-solar-amber shrink-0" />
                      <span>{proj.location}</span>
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight">
                      {proj.title}
                    </h3>
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 sm:p-8">
                  <p className="font-sans text-xs uppercase tracking-wider font-bold text-solar-amber mb-2.5">
                    {proj.capacity}
                  </p>
                  
                  <div className="bg-white/5 border border-white/10 rounded-[14px] p-4 sm:p-5 mb-5">
                    <span className="font-sans text-[11px] uppercase tracking-wider text-solar-emerald font-bold block mb-1.5">
                      CUSTOMER BENEFIT & SAVINGS
                    </span>
                    <p className="font-sans text-sm text-slate-100 leading-relaxed">
                      {proj.impact}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((t) => (
                      <span
                        key={t}
                        className="font-sans text-xs text-slate-300 bg-white/10 px-3 py-1 rounded-lg"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 pt-3 border-t border-white/10 flex items-center justify-between mt-2">
                <span className="font-sans text-xs text-slate-400">
                  Verified Installation in South Punjab
                </span>
                <button
                  onClick={() => openModal(proj.title)}
                  className="font-sans text-xs uppercase tracking-wider font-bold text-solar-amber hover:text-white transition-colors cursor-pointer"
                >
                  Get Quote for Similar System →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
