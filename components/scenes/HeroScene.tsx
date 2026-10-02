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
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const telemetryRef = useRef<HTMLDivElement>(null);
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
                headlineRef.current,
                subtitleRef.current,
                ctaGroupRef.current,
                telemetryRef.current,
                metricsBarRef.current,
              ],
              { opacity: 1, y: 0 }
            );
            return;
          }

          // Subtle Ken Burns slow scale on background
          gsap.to(bgImageRef.current, {
            scale: 1.08,
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

            const tl = gsap.timeline({ delay: 0.2 });

            // 1. Telemetry pill drops in
            tl.fromTo(
              telemetryRef.current,
              { y: -20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" }
            );

            // 2. Headline words wipe in
            tl.to(
              split.words,
              {
                yPercent: 0,
                rotateX: 0,
                opacity: 1,
                duration: 1.25,
                stagger: 0.05,
                ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              },
              "-=0.5"
            );

            // 3. Subtitle fade up
            tl.fromTo(
              subtitleRef.current,
              { y: 25, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.9, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.7"
            );

            // 4. CTAs fade up
            tl.fromTo(
              ctaGroupRef.current,
              { y: 20, opacity: 0 },
              { y: 0, opacity: 1, duration: 0.8, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.6"
            );

            // 5. Metrics ticker on bottom edge
            tl.fromTo(
              metricsBarRef.current,
              { y: 30, opacity: 0 },
              { y: 0, opacity: 1, duration: 1, ease: "cubic-bezier(0.16, 1, 0.3, 1)" },
              "-=0.5"
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
      className="relative min-h-screen flex flex-col justify-between pt-32 pb-12 sm:pt-40 sm:pb-16 px-5 sm:px-8 lg:px-12 overflow-hidden bg-solar-alabaster"
    >
      {/* Visual Anchor: Soft solar horizon background image with depth & blur */}
      <div
        ref={bgImageRef}
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none opacity-20 will-change-transform"
      >
        <Image
          src="/images/turnkey-installation.jpg"
          alt="Solar engineering background"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-b from-solar-alabaster/80 via-solar-alabaster/40 to-solar-alabaster" />
        <div className="absolute inset-0 solar-ambient-gradient" />
      </div>

      {/* Top Telemetry & Scene Marker */}
      <div
        ref={telemetryRef}
        className="relative z-10 max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-solar-border pb-5"
      >
        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.hero.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-solar-muted font-semibold">
            {siteContent.hero.eyebrow}
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-[11px] sm:text-xs text-solar-muted">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-solar-emerald animate-pulse" />
            <span className="font-semibold text-solar-navy">{siteContent.hero.liveTelemetry.location}</span>
          </div>
          <span className="hidden md:inline text-[#CBD5E1]">•</span>
          <span className="hidden md:inline">{siteContent.hero.liveTelemetry.peakSunHours}</span>
          <span className="hidden lg:inline text-[#CBD5E1]">•</span>
          <span className="hidden lg:inline text-solar-emerald font-bold">
            {siteContent.hero.liveTelemetry.efficiencyRating}
          </span>
        </div>
      </div>

      {/* Center Cinematic Billboard Kinetic Headline */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-8 lg:py-12">
        <h1
          ref={headlineRef}
          className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[8vw] xl:text-[8.5vw] leading-[0.92] tracking-tighter text-solar-navy uppercase select-none"
        >
          <span>{siteContent.hero.headlineWords[0]}</span>{" "}
          <span className="text-solar-amber">{siteContent.hero.headlineWords[1]}</span>{" "}
          <span className="block">{siteContent.hero.headlineWords[2]}</span>
          <span className="block font-serif text-2xl sm:text-4xl md:text-5xl lg:text-[4vw] font-normal tracking-normal text-solar-muted mt-3 lg:mt-4 italic">
            — {siteContent.hero.italicAccent}
          </span>
        </h1>

        {/* Narrative Subtitle & Call to Action */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mt-8 lg:mt-12 pt-6 border-t border-solar-border/60">
          <p
            ref={subtitleRef}
            className="lg:col-span-7 font-sans text-sm sm:text-base md:text-lg text-solar-muted leading-relaxed max-w-2xl font-normal"
          >
            {siteContent.hero.subtitle}
          </p>

          <div
            ref={ctaGroupRef}
            className="lg:col-span-5 flex flex-wrap items-center gap-4 lg:justify-end"
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
              className="font-sans text-xs sm:text-sm uppercase tracking-wider font-semibold text-solar-navy hover:text-solar-amber px-5 py-4 transition-colors flex items-center gap-2 cursor-pointer group"
            >
              <span>{siteContent.hero.ctaSecondary}</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Ticker Bar */}
      <div
        ref={metricsBarRef}
        className="relative z-10 max-w-7xl mx-auto w-full pt-8 border-t border-solar-border"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {siteContent.hero.metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-solar-navy tracking-tight">
                {m.value}
              </span>
              <span className="font-sans text-xs uppercase tracking-wider font-bold text-solar-navy mt-1">
                {m.label}
              </span>
              <span className="font-sans text-[11px] font-medium text-solar-emerald mt-0.5">
                {m.detail}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
