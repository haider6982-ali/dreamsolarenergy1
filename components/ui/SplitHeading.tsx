"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, SplitText } from "@/lib/gsap";

interface SplitHeadingProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  threshold?: string;
  scrub?: boolean | number;
}

export default function SplitHeading({
  children,
  as: Component = "h2",
  className = "",
  delay = 0,
  threshold = "top 85%",
}: SplitHeadingProps) {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = containerRef.current;
      if (!el) return;

      const mm = gsap.matchMedia();

      mm.add(
        {
          isReduced: "(prefers-reduced-motion: reduce)",
          isStandard: "(prefers-reduced-motion: no-preference)",
        },
        (context) => {
          const { isReduced } = context.conditions as { isReduced: boolean };

          if (isReduced) {
            gsap.set(el, { opacity: 1, y: 0 });
            return;
          }

          // Split into lines with overflow-hidden wrappers
          const split = new SplitText(el, {
            type: "lines,words",
            linesClass: "split-line-wrap",
            wordsClass: "split-word inline-block will-change-transform",
          });

          gsap.set(split.words, {
            yPercent: 115,
            opacity: 0.1,
          });

          gsap.to(split.words, {
            yPercent: 0,
            opacity: 1,
            duration: 1.15,
            ease: "cubic-bezier(0.16, 1, 0.3, 1)",
            stagger: 0.04,
            delay,
            scrollTrigger: {
              trigger: el,
              start: threshold,
              toggleActions: "play none none none",
            },
          });

          return () => {
            split.revert();
          };
        }
      );
    },
    { scope: containerRef, dependencies: [children, delay, threshold] }
  );

  return (
    <Component
      // @ts-expect-error dynamic HTML element typing
      ref={containerRef}
      className={`will-change-transform ${className}`}
    >
      {children}
    </Component>
  );
}
