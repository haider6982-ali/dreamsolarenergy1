"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";
import { siteContent } from "@/content/site";
import Magnetic from "@/components/ui/Magnetic";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { useSmoothScroll } from "@/components/providers/SmoothScroll";

export default function HeroScene() {
  const containerRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const metricsBarRef = useRef<HTMLDivElement>(null);
  const bgImageRef = useRef<HTMLDivElement>(null);

  const { openModal } = useQuoteModal();
  const { scrollTo } = useSmoothScroll();

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
            gsap.set(
              [
                eyebrowRef.current,
                headlineRef.current,
                subtitleRef.current,
                ctaGroupRef.current,
                metricsBarRef.current,
              ],
              { opacity: 1, y: 0 }
            );
            return;
          }

          // Subtle Ken Burns slow scale on background
          gsap.to(bgImageRef.current, {
            scale: 1.06,
            duration: 22,
            ease: "none",
            repeat: -1,
            yoyo: true,
          });

          // Split headline reveal
          if (headlineRef.current) {
            const split = new SplitText(headlineRef.current, {
              type: "lines,words",
              linesClass: "split-line-wrap",
              wordsClass: "split-word inline-block will-change-transform",
            });

            gsap.set(split.words, {
              yPercent: 120,
              rotateX: -12,
              opacity: 0,
            });

            const tl = gsap.timeline({ delay: 0.15 });

            // 1. Eyebrow fades & slides in
            tl.fromTo(
              eyebrowRef.current,
              { y: -15, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.6, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
            );

            // 2. Headline words wipe in
            tl.to(
              split.words,
              {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.05,
                ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              },
              "-=0.3"
            );

            // 3. Subtitle fade up
            tl.fromTo(
              subtitleRef.current,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.6"
            );

            // 4. CTAs fade up
            tl.fromTo(
              ctaGroupRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.5"
            );

            // 5. Metrics cards on bottom edge
            tl.fromTo(
              metricsBarRef.current,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.4"
            );
          }
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="vision"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 sm:pt-36 sm:pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden bg-solar-alabaster"
    >
      {/* Visual Anchor: High-contrast solar installation background with rich directional gradient */}
      <div
        ref={bgImageRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-60 will-change-transform"
      >
        <Image
          src="/images/turnkey-installation.jpg"
          alt="Solar engineering background"
          fill
          priority
          className="object-cover object-center sm:object-right"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-solar-alabaster via-solar-alabaster/90 to-solar-alabaster/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-solar-alabaster via-transparent to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-10">
        <div className="max-w-4xl">
          {/* Eyebrow Label: ONE short line directly above the headline */}
          <div
            ref={eyebrowRef}
            className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase text-solar-amber mb-5"
          >
            <span className="w-6 h-0.5 bg-solar-amber rounded-full" />
            <span>CLEAN ENERGY • VEHARI &amp; SOUTH PUNJAB</span>
          </div>

          {/* Kinetic Billboard Headline with breathing room */}
          <h1
            ref={headlineRef}
            className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[7.5vw] xl:text-[8vw] leading-[0.94] tracking-tighter text-solar-navy uppercase select-none mb-6"
          >
            <span>{siteContent.hero.headlineWords[0]}</span>{" "}
            <span className="text-solar-amber">{siteContent.hero.headlineWords[1]}</span>{" "}
            <span className="block">{siteContent.hero.headlineWords[2]}</span>
            <span className="block font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[3.8vw] font-normal tracking-normal text-solar-muted mt-3 lg:mt-4 italic">
              — {siteContent.hero.italicAccent}
            </span>
          </h1>

          {/* Narrative Subtitle */}
          <p
            ref={subtitleRef}
            className="font-sans text-sm sm:text-base md:text-lg text-solar-muted leading-relaxed max-w-2xl font-normal mb-8"
          >
            {siteContent.hero.subtitle}
          </p>

          {/* Call to Action Group: Placed on the left to leave ample clearance from the floating chat button */}
          <div
            ref={ctaGroupRef}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.3}>
              <button
                onClick={() => openModal()}
                data-cursor="audit"
                className="font-sans text-xs sm:text-sm uppercase tracking-wider font-bold bg-solar-navy text-white hover:bg-solar-amber hover:text-solar-navy px-8 py-4 rounded-full transition-all duration-300 shadow-md cursor-pointer"
              >
                {siteContent.hero.ctaPrimary}
              </button>
            </Magnetic>

            <button
              onClick={() => scrollTo("#odyssey", { offset: -40 })}
              data-cursor="view"
              className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-solar-navy hover:text-solar-amber px-6 py-4 transition-colors flex items-center gap-2 cursor-pointer group"
            >
              <span>{siteContent.hero.ctaSecondary}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Key Stats Row: Incorporating stats moved from removed top bar in signature dark-card style */}
      <div
        ref={metricsBarRef}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-solar-border/80"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          <div className="bg-solar-deep/90 border border-white/10 rounded-xl p-4 text-white backdrop-blur-md shadow-sm">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-solar-amber tracking-tight block">
              {siteContent.hero.liveTelemetry.peakSunHours}
            </span>
            <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-300 block mt-1">
              Solar Irradiance
            </span>
            <span className="font-sans text-[11px] font-medium text-solar-emerald block mt-0.5">
              Vehari (South Punjab)
            </span>
          </div>

          <div className="bg-solar-deep/90 border border-white/10 rounded-xl p-4 text-white backdrop-blur-md shadow-sm">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-solar-amber tracking-tight block">
              {siteContent.hero.liveTelemetry.efficiencyRating}
            </span>
            <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-300 block mt-1">
              Monthly Bill Savings
            </span>
            <span className="font-sans text-[11px] font-medium text-solar-emerald block mt-0.5">
              With Net Metering Export
            </span>
          </div>

          <div className="bg-solar-deep/90 border border-white/10 rounded-xl p-4 text-white backdrop-blur-md shadow-sm">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-solar-amber tracking-tight block">
              100% Original
            </span>
            <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-300 block mt-1">
              Hardware Guarantee
            </span>
            <span className="font-sans text-[11px] font-medium text-solar-emerald block mt-0.5">
              Scannable OEM Barcodes
            </span>
          </div>

          <div className="bg-solar-deep/90 border border-white/10 rounded-xl p-4 text-white backdrop-blur-md shadow-sm">
            <span className="font-display font-extrabold text-xl sm:text-2xl text-solar-amber tracking-tight block">
              25 Years
            </span>
            <span className="font-sans text-[11px] uppercase tracking-wider font-semibold text-slate-300 block mt-1">
              Panel Life Warranty
            </span>
            <span className="font-sans text-[11px] font-medium text-solar-emerald block mt-0.5">
              Linear Output Performance
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
