"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";
import { siteContent } from "@/content/site";
import SplitHeading from "@/components/ui/SplitHeading";
import Magnetic from "@/components/ui/Magnetic";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import { Phone, Zap, MapPin } from "lucide-react";

export default function ConversionScene() {
  const containerRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const { openModal } = useQuoteModal();

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

          if (isReduced || !cardRef.current) return;

          gsap.fromTo(
            cardRef.current,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 80%",
              },
            }
          );
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative pt-28 pb-20 sm:pt-32 sm:pb-28 px-5 sm:px-8 lg:px-12 bg-solar-alabaster border-t border-solar-border overflow-hidden scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Act Header */}
        <div className="flex items-center gap-3 mb-3">
          <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-solar-amber flex items-center gap-2 before:content-[''] before:block before:w-4 before:h-[1px] before:bg-solar-amber/50">
            {siteContent.conversion.badge}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          <span className="font-mono text-[11px] sm:text-xs uppercase tracking-wider text-solar-muted font-semibold">
            {siteContent.conversion.eyebrow}
          </span>
        </div>

        {/* Conversion Master Block */}
        <div
          ref={cardRef}
          className="bg-solar-navy text-white rounded-3xl p-6 sm:p-12 lg:p-16 shadow-[0_24px_64px_rgba(11,23,46,0.18)] relative overflow-hidden"
        >
          {/* Subtle Sun Corona Blur */}
          <div className="absolute top-0 right-0 w-125 h-125 bg-solar-amber/12 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <span className="font-sans text-xs uppercase tracking-wider text-solar-amber font-bold block mb-4">
              {siteContent.conversion.guaranteeNotice}
            </span>

            <SplitHeading
              as="h2"
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[1.02] mb-6"
            >
              {siteContent.conversion.title}
            </SplitHeading>

            <p className="font-sans text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10">
              {siteContent.conversion.subtitle}
            </p>

            {/* Direct Action Hub */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12">
              <Magnetic strength={0.3}>
                <button
                  onClick={() => openModal()}
                  data-cursor="audit"
                  className="font-display text-xs sm:text-sm uppercase tracking-wider font-bold bg-solar-amber text-solar-deep hover:bg-solar-gold px-7 py-3.5 rounded-xl transition-all duration-300 shadow-md cursor-pointer flex items-center gap-2"
                >
                  <Zap className="w-4 h-4 fill-current shrink-0 text-solar-deep" />
                  <span>{siteContent.conversion.primaryButton}</span>
                </button>
              </Magnetic>

              <a
                href={`https://wa.me/${siteContent.meta.whatsappNumber}?text=${encodeURIComponent(
                  "Assalam-o-Alaikum Dream Solar Energy, I would like to schedule a free rooftop survey for my home/business."
                )}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="chat"
                className="font-display text-xs sm:text-sm uppercase tracking-wider font-bold bg-emerald-600 text-white hover:bg-emerald-700 px-6 py-3.5 rounded-xl transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer border border-emerald-500/30"
              >
                <svg className="w-4 h-4 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
                <span>{siteContent.conversion.whatsappButton}</span>
              </a>

              <a
                href={`tel:${siteContent.meta.phone}`}
                className="font-display text-xs sm:text-sm uppercase tracking-wider font-semibold text-white hover:text-solar-amber px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-solar-amber shrink-0" />
                <span>{siteContent.conversion.secondaryButton}</span>
              </a>
            </div>

            {/* Office & Regional Facility Details */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs sm:text-sm text-slate-300">
              <div>
                <span className="uppercase tracking-wider text-solar-amber font-bold block mb-1">
                  {siteContent.conversion.officeHeading}
                </span>
                <p className="text-slate-300 leading-relaxed">{siteContent.meta.address}</p>
                <a
                  href="https://maps.app.goo.gl/LkGAoUZfkiuKcTDE8"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-solar-amber hover:text-white font-medium mt-2 transition-colors group"
                >
                  <MapPin className="w-3.5 h-3.5 text-solar-amber" />
                  <span className="underline underline-offset-4">Open location in Google Maps</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </a>
              </div>

              <div>
                <span className="uppercase tracking-wider text-solar-amber font-bold block mb-1">
                  Working Hours
                </span>
                <p className="text-slate-300 leading-relaxed">{siteContent.meta.hours}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
