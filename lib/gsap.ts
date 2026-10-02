"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// Register plugins once in lib/gsap.ts
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);
}

// Cinematic cubic-bezier easings
export const EASINGS = {
  cinematicOut: "cubic-bezier(0.16, 1, 0.3, 1)",
  editorialSmooth: "cubic-bezier(0.76, 0, 0.24, 1)",
  snappyReveal: "cubic-bezier(0.25, 1, 0.5, 1)",
  elasticSoft: "cubic-bezier(0.34, 1.56, 0.64, 1)",
  expoOut: "power4.out",
  expoInOut: "power4.inOut",
} as const;

export { gsap, ScrollTrigger, SplitText, useGSAP };
