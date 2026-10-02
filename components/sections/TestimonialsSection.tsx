"use client";

import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Haji Arif",
      location: "Vehari City",
      text: "We installed a 10 kW hybrid system for our residential home. Our monthly bill dropped from PKR 48,000 to less than PKR 1,500. Dream Solar Energy provided authentic Jinko panels and their technical installation was clean and punctual.",
      system: "10 kW Hybrid System",
      verified: true,
    },
    {
      name: "Ch. Shahid",
      location: "Burewala",
      text: "Visited their store near Bank of Punjab on Allama Iqbal Road. Purchased a 5 kW on-grid setup with net-metering support. The team completed the mounting structure and electrical wiring within 48 hours. Excellent service.",
      system: "5 kW On-Grid System",
      verified: true,
    },
    {
      name: "Rana Tariq",
      location: "Mailsi",
      text: "Got a 3 kW solar backup system to tackle severe voltage fluctuations. The deep-cycle battery backup runs our fans, lights, and refrigerator smoothly through the night. Truly dependable team.",
      system: "3 kW Off-Grid System",
      verified: true,
    },
    {
      name: "M. Irfan",
      location: "Vehari Commercial",
      text: "Upgraded our commercial store & plaza with a 15 kW three-phase setup. Electricity expenses have reduced by over 80%, and the mobile app provides real-time generation tracking every day.",
      system: "15 kW Commercial Plant",
      verified: true,
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-24 px-5 sm:px-6 lg:px-8 bg-[#F8F7F4] border-t border-[#E2DFD6]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-[#F7941D] uppercase tracking-widest block mb-2">
            Client Testimonials
          </span>
          <h2
            className="text-2xl sm:text-4xl font-black text-[#1B2A4A] tracking-tight"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Trusted Across South Punjab
          </h2>
          <p className="text-[#5B6472] text-sm sm:text-base mt-2">
            Real experiences from homeowners, commercial establishments, and local businesses.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="h-full bg-[#EFEDE7]/70 border border-[#E2DFD6] rounded-lg p-6 flex flex-col hover:border-[#1B2A4A]/40 transition-all"
            >
              <div className="flex-1 flex flex-col">
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#F7941D] fill-[#F7941D]" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed italic mb-5">
                  &ldquo;{r.text}&rdquo;
                </p>
              </div>

              <div className="mt-auto pt-4 border-t border-[#E2DFD6] flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <p
                      className="font-bold text-sm text-[#1B2A4A]"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {r.name}
                    </p>
                    {r.verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#3C8C2E]" />}
                  </div>
                  <p className="text-[11px] text-[#5B6472] font-medium">
                    {r.location} • {r.system}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
