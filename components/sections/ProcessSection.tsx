"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import ProcessTimeline from "@/components/ui/ProcessTimeline";

export default function ProcessSection() {
  const { openModal } = useQuoteModal();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  const steps = [
    {
      number: "01",
      title: "Free Site Survey & Energy Audit",
      description:
        "Our engineers visit your site in Vehari or surrounding districts to inspect roof integrity, orientation, shadow obstructions, and analyze your last 12 months of electricity bills.",
    },
    {
      number: "02",
      title: "Custom Engineering & Design",
      description:
        "We design a high-efficiency layout using Tier-1 N-Type panels and sized inverters. You receive a transparent proposal detailing hardware specs, estimated generation, and payback.",
    },
    {
      number: "03",
      title: "Turnkey Installation & Mounting",
      description:
        "Certified technicians erect elevated heavy-gauge galvanized structures, lay pure copper double-insulated DC wires, and mount inverters and safety breakers in just 48 to 72 hours.",
    },
    {
      number: "04",
      title: "Testing, Commissioning & App Setup",
      description:
        "We conduct complete electrical safety checks, test string voltages, and configure mobile app monitoring on your smartphone for real-time solar tracking.",
    },
    {
      number: "05",
      title: "Net Metering & 25-Year Support",
      description:
        "We handle the complete MEPCO net-metering liaison to get your bidirectional green meter installed, backed by accessible local after-sales service from our Vehari office.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 px-5 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-3">
            Precision Engineering Workflow
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1B2A4A] tracking-tight leading-[1.1] mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            How We Execute Your Solar Project
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base leading-relaxed">
            From site survey to green meter activation, we handle every technical and administrative step.
          </p>
        </div>

        <ProcessTimeline steps={steps} visible={visible} />

        <div className="mt-16 bg-[#1B2A4A] border border-[#0F1B2E] rounded-lg p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 text-white shadow-site fab-safe sm:pb-8">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5 text-[#F7941D]" />
            </div>
            <div>
              <p className="font-bold text-sm sm:text-base text-white">Ready to begin step 1 for your home or business?</p>
              <p className="text-xs text-[#EFEDE7]/90">Book a free technical site survey anywhere in Vehari and surrounding districts.</p>
            </div>
          </div>

          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs sm:text-sm px-6 py-3.5 rounded-lg transition-colors shadow-site shrink-0"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <span>Book Free Site Survey</span>
            <ArrowRight className="w-4 h-4 text-[#0F1B2E]" />
          </button>
        </div>
      </div>
    </section>
  );
}
