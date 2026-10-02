"use client";

import React from "react";
import { CheckCircle, Zap, ArrowRight, MessageSquare, Phone } from "lucide-react";

interface FinalCTASectionProps {
  onOpenModal: () => void;
}

export default function FinalCTASection({ onOpenModal }: FinalCTASectionProps) {
  const reasons = [
    "Genuine Tier-1 Products Only",
    "Professional Certified Installation",
    "After-Sale Support & Maintenance",
    "Competitive Prices in South Punjab",
    "MEPCO Net Metering Assistance",
    "Local Vehari-Based Team",
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0F1B2E] relative border-t border-[#1B2A4A] overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-100 bg-[#F7941D]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-75 h-[300px] bg-[#22325A]/40 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="font-mono text-xs text-[#F7941D] uppercase tracking-widest block mb-4 font-semibold">
          READY TO GO SOLAR IN VEHARI?
        </span>

        <h2 className="font-black text-4xl sm:text-6xl text-[#F8F7F4] tracking-tight mb-6" style={{ fontFamily: "var(--font-outfit)" }}>
          Start Saving Today —{" "}
          <span style={{
            background: "linear-gradient(135deg, #F7941D 0%, #FBB859 50%, #F7941D 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Contact Dream Solar
          </span>
        </h2>

        <p className="font-medium text-[#EFEDE7]/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10" style={{ fontFamily: "var(--font-plus-jakarta)" }}>
          Visit our shop on Allama Iqbal Road, near Bank of Punjab, Vehari — or call / WhatsApp us for a free consultation and site survey.
        </p>

        {/* Why choose us bullets */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12 max-w-2xl mx-auto text-left">
          {reasons.map((r) => (
            <div key={r} className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#3C8C2E] shrink-0" />
              <span className="text-xs font-semibold text-[#F8F7F4]/90">{r}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenModal}
            className="group relative bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-black text-base py-4 px-10 rounded-lg shadow-site transition-all flex items-center space-x-3 overflow-hidden active:scale-98"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12" />
            <Zap className="w-5 h-5 fill-[#0F1B2E]" />
            <span>GET FREE QUOTE NOW</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/923202200884?text=Hi%20Dream%20Solar%20Energy%20Vehari,%20I%20am%20interested%20in%20going%20solar."
            target="_blank"
            rel="noreferrer"
            className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base py-4 px-10 rounded-lg transition-all flex items-center space-x-3 shadow-site"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp Chat</span>
          </a>

          <a
            href="tel:03202200884"
            className="border border-[#E2DFD6]/30 hover:bg-white/10 text-[#F8F7F4] font-bold text-base py-4 px-8 rounded-lg transition-all flex items-center space-x-3"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <Phone className="w-5 h-5 text-[#FBB859]" />
            <span>0320-2200884</span>
          </a>
        </div>

        {/* Hours reminder */}
        <p className="mt-8 font-mono text-xs text-[#EFEDE7]/60">
          Shop Hours: Sat–Thu 8:00 AM – 7:00 PM &nbsp;|&nbsp; Friday 9:00 AM – 12:30 PM
          &nbsp;|&nbsp; Allama Iqbal Road, Near Bank of Punjab, Vehari
        </p>
      </div>
    </section>
  );
}
