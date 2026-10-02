"use client";

import React, { useEffect, useState } from "react";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export default function ProcessTimeline({
  steps,
  visible,
}: {
  steps: ProcessStep[];
  visible: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start: number | null = null;
    const duration = 1600;
    const animate = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setProgress(p * 100);
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible]);

  return (
    <div className="relative">
      {/* Desktop / large tablet: horizontal connected timeline */}
      <div className="hidden lg:block relative">
        <div className="absolute top-5 left-[10%] right-[10%] h-1 bg-solar-border rounded-full z-0 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-300"
            style={{
              width: `${progress}%`,
              background: "linear-gradient(90deg, #F59E0B 0%, #10B981 100%)",
            }}
          />
        </div>

        <div className="relative z-10 grid grid-cols-5 gap-4 items-stretch">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex flex-col items-center group h-full"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
              }}
            >
              <div className="mb-6 shrink-0">
                <div className="w-11 h-11 rounded-full bg-white border-2 border-solar-border group-hover:border-solar-amber flex items-center justify-center transition-colors duration-300 shadow-sm relative z-10">
                  <span className="text-sm font-display font-extrabold text-solar-amber">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="w-full h-full flex-1 flex flex-col justify-start bg-white border border-solar-border rounded-2xl p-5 gap-2 group-hover:border-solar-navy/30 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-display font-bold text-sm text-solar-navy leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-solar-muted leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile + tablet: vertical connected timeline */}
      <div className="lg:hidden relative">
        <div className="absolute left-5.5 top-2 bottom-2 w-1 bg-solar-border rounded-full overflow-hidden z-0">
          <div
            className="w-full rounded-full transition-all duration-300"
            style={{
              height: `${progress}%`,
              background: "linear-gradient(180deg, #F59E0B 0%, #10B981 100%)",
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col gap-5">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative flex items-stretch gap-4 group"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${index * 0.12}s, transform 0.5s ease ${index * 0.12}s`,
              }}
            >
              <div className="shrink-0 pt-0">
                <div className="w-11 h-11 rounded-full bg-white border-2 border-solar-border group-hover:border-solar-amber flex items-center justify-center transition-colors duration-300 shadow-sm relative z-10">
                  <span className="text-sm font-display font-extrabold text-solar-amber">
                    {step.number}
                  </span>
                </div>
              </div>

              <div className="flex-1 min-w-0 bg-white border border-solar-border rounded-2xl p-5 group-hover:border-solar-navy/30 group-hover:shadow-md transition-all duration-300">
                <h3 className="font-display font-bold text-sm text-solar-navy leading-snug mb-1.5">
                  {step.title}
                </h3>
                <p className="text-xs text-solar-muted leading-relaxed font-sans">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
