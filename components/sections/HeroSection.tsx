"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import gsap from "gsap";

interface HeroSectionProps {
  onOpenModal?: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  const { openModal } = useQuoteModal();
  const handleOpen = onOpenModal || openModal;

  // ── Animation refs ──────────────────────────────────────────────────
  const eyebrowRef   = useRef<HTMLParagraphElement>(null);
  const line1Ref     = useRef<HTMLSpanElement>(null);
  const line2Ref     = useRef<HTMLSpanElement>(null);
  const line3Ref     = useRef<HTMLSpanElement>(null);
  const paraRef      = useRef<HTMLParagraphElement>(null);
  const btn1Ref      = useRef<HTMLButtonElement>(null);
  const btn2Ref      = useRef<HTMLAnchorElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);
  const bgImgRef     = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      // ── REDUCED MOTION FALLBACK ────────────────────────────────────
      // Simple fade for the whole block — no clip-path, no translateY motion.
      if (prefersReduced) {
        gsap.set(
          [line1Ref.current, line2Ref.current, line3Ref.current],
          { y: "0%" }
        );
        gsap.to(
          [
            eyebrowRef.current,
            line1Ref.current,
            line2Ref.current,
            line3Ref.current,
            paraRef.current,
            btn1Ref.current,
            btn2Ref.current,
          ],
          { opacity: 1, duration: 0.5, stagger: 0.05, ease: "none" }
        );
        gsap.to(scrollCueRef.current, {
          opacity: 0.65,
          duration: 0.5,
          delay: 0.6,
        });
        return;
      }

      // ── PRIORITY 3: KEN BURNS ──────────────────────────────────────
      // Slow scale on the image wrapper — GPU transform only, no layout reflow.
      // Contained by the overflow:hidden wrapper — layout never shifts.
      gsap.to(bgImgRef.current, {
        scale: 1.08,
        duration: 18,
        ease: "none",
        transformOrigin: "center center",
      });

      // ── PRIORITY 1: STAGGERED HEADLINE REVEAL SEQUENCE ────────────
      const tl = gsap.timeline({ delay: 0.15 });

      // Step 1 – Eyebrow: small fade + slide up (~200 ms)
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.28, ease: "power2.out" }
      );

      // Step 2 – Three headline lines: translateY mask-reveal via overflow:hidden.
      //   Each span starts at translateY(110%) (set inline before GSAP runs, so
      //   it is already hidden by its wrapper's overflow:hidden on first paint —
      //   this is what makes it visible on mobile).
      //   Stagger: 90 ms between lines, each reveal: 550 ms ease power3.out.
      tl.to(
        [line1Ref.current, line2Ref.current, line3Ref.current],
        { y: "0%", duration: 0.55, ease: "power3.out", stagger: 0.09 }
      );

      // Step 3 – Supporting paragraph fade in
      tl.fromTo(
        paraRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
        "-=0.1"
      );

      // Step 4 – CTA buttons, slight stagger
      tl.fromTo(
        [btn1Ref.current, btn2Ref.current],
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.35, ease: "power2.out", stagger: 0.08 },
        "-=0.1"
      );

      // ── PRIORITY 6: SCROLL CUE ANIMATION ──────────────────────────
      gsap.to(scrollCueRef.current, {
        opacity: 0.65,
        duration: 0.5,
        delay: 1.6,
        ease: "power2.out",
      });
      gsap.to(scrollCueRef.current, {
        y: 8,
        duration: 1.6,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        delay: 2.1,
      });
    });

    return () => ctx.revert();
  }, []);

  // Scroll cue: smooth-scroll to the next section (Lenis intercepts if active)
  const handleScrollToNext = () => {
    const hero = document.querySelector("[data-hero]");
    const next = hero?.nextElementSibling as HTMLElement | null;
    next?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      data-hero
      className="relative min-h-145 lg:min-h-160 flex items-center pt-32 pb-20 sm:pt-40 sm:pb-28 px-5 sm:px-6 lg:px-8 overflow-hidden bg-[#0F1B2E]"
    >
      {/* ── BACKGROUND + KEN BURNS WRAPPER (Priority 3) ────────────── */}
      {/* overflow:hidden on the outer div clips the scale so layout never shifts */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* inner div: the transform target — willChange: transform for GPU compositing */}
        <div
          ref={bgImgRef}
          className="absolute inset-0"
          style={{ willChange: "transform" }}
        >
          <Image
            src="/hero-solar-bg.jpg"
            alt="Commercial and residential solar panel installation across rooftop"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        {/* ── PRIORITY 2: DIRECTIONAL OVERLAYS ───────────────────────── */}
        {/* Left-heavy gradient: ~88% opacity left (strong text contrast) → ~20% right
            so the photography becomes visible toward the right edge.            */}
        <div className="absolute inset-0 bg-linear-to-r from-[#0F1B2E]/90 via-[#0F1B2E]/55 to-[#0F1B2E]/20" />
        {/* Bottom atmospheric fade */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0F1B2E]/55 via-transparent to-transparent" />
        {/* Accent radial glow — gold (accent-500) at ~11% opacity, bottom-left,
            screen blend: ties the brand color into the hero atmosphere.          */}
        <div
          className="absolute bottom-0 left-0 w-[65%] h-[75%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at bottom left, rgba(247,148,29,0.11) 0%, transparent 68%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      {/* ── HERO CONTENT ─────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-2xl flex flex-col items-start text-left">

          {/* Eyebrow label — starts at opacity:0, GSAP fades + slides in */}
          <p
            ref={eyebrowRef}
            className="text-xs font-semibold uppercase tracking-widest text-[#F7941D] mb-4"
            style={{ opacity: 0 }}
          >
            Solar Energy Systems &bull; Punjab, Pakistan
          </p>

          {/* Headline — three lines, each with an overflow:hidden mask wrapper.
              The inner <span> starts at translateY(110%) via inline style so it
              is invisible even before GSAP initialises (critical for mobile).
              GSAP animates each span to translateY(0%) with a stagger.          */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#F8F7F4] leading-[1.08] tracking-tight mb-5"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <div style={{ overflow: "hidden" }}>
              <span
                ref={line1Ref}
                className="block"
                style={{ transform: "translateY(110%)", willChange: "transform" }}
              >
                Solar Energy Systems
              </span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span
                ref={line2Ref}
                className="block"
                style={{ transform: "translateY(110%)", willChange: "transform" }}
              >
                Built to Perform for
              </span>
            </div>
            <div style={{ overflow: "hidden" }}>
              <span
                ref={line3Ref}
                className="block"
                style={{ transform: "translateY(110%)", willChange: "transform" }}
              >
                <span className="text-[#F7941D]">Decades.</span>
              </span>
            </div>
          </h1>

          {/* Supporting paragraph — starts at opacity:0, GSAP fades in */}
          <p
            ref={paraRef}
            className="text-base sm:text-lg text-[#EFEDE7]/90 leading-relaxed mb-8 max-w-lg"
            style={{ opacity: 0 }}
          >
            Tier-1 hardware, net-metering liaison, and complete turnkey
            installations across South Punjab.
          </p>

          {/* CTA buttons — both start at opacity:0, GSAP staggers in */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <button
              ref={btn1Ref}
              onClick={() => handleOpen()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-sm px-7 py-3.5 rounded-lg transition-colors shadow-site"
              style={{ fontFamily: "var(--font-outfit)", opacity: 0 }}
            >
              <span>Request a Free Survey</span>
              <ArrowRight className="w-4 h-4 text-[#0F1B2E]" />
            </button>

            <Link
              ref={btn2Ref}
              href="/products"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-[#F8F7F4] hover:text-[#F7941D] border border-[#F8F7F4]/40 hover:border-[#F7941D] px-7 py-3.5 rounded-lg transition-colors group"
              style={{ fontFamily: "var(--font-outfit)", opacity: 0 }}
            >
              <span>View systems &amp; pricing</span>
              <ArrowRight className="w-4 h-4 text-[#F7941D] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>
      </div>

      {/* ── PRIORITY 6: SCROLL CUE ───────────────────────────────────── */}
      {/* Centered at hero bottom. Thin line + chevron, white at ~60% opacity.
          GSAP: fade in after sequence, then continuous yoyo bounce (6-8 px).
          Clickable: smooth-scrolls to the next section via scrollIntoView.     */}
      <div
        ref={scrollCueRef}
        onClick={handleScrollToNext}
        onKeyDown={(e) => e.key === "Enter" && handleScrollToNext()}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 cursor-pointer group select-none"
        style={{ opacity: 0 }}
        aria-label="Scroll to next section"
        role="button"
        tabIndex={0}
      >
        <span className="w-px h-7 bg-white/45 rounded-full group-hover:bg-white/70 transition-colors" />
        <ChevronDown className="w-4 h-4 text-white/55 group-hover:text-white/80 transition-colors" />
      </div>
    </section>
  );
}
