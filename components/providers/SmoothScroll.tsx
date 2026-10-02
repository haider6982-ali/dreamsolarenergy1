"use client";

import React, { useEffect, useCallback } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";

export { useLenis };

/**
 * Custom hook that provides a scrollTo function backed by Lenis smooth scroll.
 * Falls back to native smooth scroll if Lenis is not available.
 */
export function useSmoothScroll() {
  const lenis = useLenis();

  const scrollTo = useCallback(
    (target: string | HTMLElement, options?: Record<string, unknown>) => {
      if (lenis) {
        lenis.scrollTo(target, options);
      } else if (typeof target === "string") {
        const el = document.querySelector(target);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        target.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenis]
  );

  return { lenis: lenis ?? null, scrollTo };
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.25,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        autoRaf: true,
        respectReducedMotion: false,
      }}
    >
      <ScrollTriggerSync />
      {children}
    </ReactLenis>
  );
}

/** Tiny internal component that syncs Lenis scroll events to GSAP ScrollTrigger */
function ScrollTriggerSync() {
  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
