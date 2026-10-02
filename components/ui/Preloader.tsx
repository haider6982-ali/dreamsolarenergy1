"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    // Progress counter animation
    const counterObj = { value: 0 };
    
    const tl = gsap.timeline({
      onComplete: () => {
        // Exit animation sequence
        gsap.timeline()
          .to(textRef.current, {
            opacity: 0,
            y: -20,
            duration: 0.4,
            ease: "power2.in",
          })
          .to(sunRef.current, {
            scale: 3,
            opacity: 0,
            duration: 0.6,
            ease: "power3.inOut",
          }, "-=0.2")
          .to(containerRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            duration: 0.8,
            ease: "power4.inOut",
            onComplete: () => {
              document.body.style.overflow = "";
              if (onComplete) onComplete();
            }
          });
      }
    });

    tl.to(counterObj, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        setProgress(Math.floor(counterObj.value));
      }
    });

    return () => {
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] bg-[#08090C] flex flex-col items-center justify-center select-none"
      style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
    >
      {/* Background Solar Aura */}
      <div
        ref={sunRef}
        className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-radial from-[#FFB800] via-[#FF8C00]/40 to-transparent blur-2xl opacity-60 animate-pulse mb-8"
      />

      <div ref={textRef} className="flex flex-col items-center text-center z-10 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-[#FFB800] animate-ping" />
          <span className="font-display font-bold tracking-[0.3em] text-xs uppercase text-[#FFB800]">
            DREAM SOLAR ENERGY
          </span>
        </div>

        <h2 className="font-display font-extrabold text-4xl md:text-6xl tracking-tight text-white">
          {progress}<span className="text-[#FFB800]">%</span>
        </h2>

        <p className="font-body text-xs tracking-widest text-[#94A3B8] uppercase">
          ACTIVATING CLEAN KINETIC GRID
        </p>

        {/* Minimal Progress Bar */}
        <div className="w-48 md:w-64 h-0.5 bg-white/10 rounded-full overflow-hidden mt-4">
          <div
            className="h-full bg-linear-to-r from-[#FFB800] via-[#B8FF00] to-[#00F5D4] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
