"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Store,
  Factory,
  Wheat,
  Zap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  Wrench,
  FileCheck2,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import PageHero from "@/components/ui/PageHero";
import ProcessTimeline from "@/components/ui/ProcessTimeline";

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function ServicesPage() {
  const { openModal } = useQuoteModal();
  const { ref: workflowRef, inView: workflowVisible } = useInView(0.15);

  const services = [
    {
      id: "residential",
      icon: Home,
      title: "Home Solar Systems",
      subtitle: "4 kW to 20 kW Turnkey Rooftop Installations",
      desc: "Custom-designed rooftop solar systems for private homes, bungalows, and housing societies. Cut your monthly electricity bill by 80% to 90%, run your inverter ACs during scorching afternoon heat, and sleep peacefully with automatic night battery backup.",
      features: [
        "Run 1 to 4 Inverter ACs + Refrigerator during peak daytime sunlight",
        "Automatic, noiseless backup during sudden load shedding",
        "Sell surplus daytime electricity back to WAPDA/MEPCO (Green Meter)",
        "Elevated heavy-gauge galvanized iron frame preserves your roof terrace",
      ],
      idealFor: "3 Marla, 5 Marla, 10 Marla & 1 Kanal Homes",
      image: "/images/residential-solar.jpg",
    },
    {
      id: "commercial",
      icon: Store,
      title: "Commercial & Shop Solar",
      subtitle: "Shops, Showrooms, Plazas, Clinics & Offices",
      desc: "Commercial electricity rates in Pakistan are extremely high. Our commercial solar setups power all your daytime lights, display chillers, and air conditioners directly from free sunlight, drastically lowering monthly operational overhead.",
      features: [
        "Heavy daytime power optimization for commercial ACs & lighting",
        "Fast 2 to 3-year return on investment",
        "Balanced Three-Phase power system that protects equipment",
        "Real-time mobile phone app to monitor daily generation",
      ],
      idealFor: "Retail Shops, Commercial Showrooms, Clinics & Offices",
      image: "/images/commercial-solar.jpg",
    },
    {
      id: "tubewell",
      icon: Wheat,
      title: "Agricultural Solar Tube Wells",
      subtitle: "10 HP to 30 HP High-Volume Water Pumping",
      desc: "High diesel prices and expensive agricultural electricity tariffs can break farm profits. Our VFD solar tube well systems run powerful water extraction motors all day with zero fuel and zero electricity bills.",
      features: [
        "Soft-start Variable Frequency Drive (VFD) prevents motor burnouts",
        "Direct water pumping from sunrise to sunset",
        "Eliminates heavy monthly diesel fuel costs completely",
        "Sturdy ground mounts built to withstand rain and dust storms",
      ],
      idealFor: "Agricultural Farmland, Cotton, Wheat, Maize & Orchards",
      image: "/images/agricultural-tubewell.jpg",
    },
    {
      id: "netmetering",
      icon: FileCheck2,
      title: "MEPCO Net Metering Service",
      subtitle: "Turnkey Green Bidirectional Meter Processing",
      desc: "Sell your extra solar units back to WAPDA/MEPCO and get zero or even negative electricity bills! Dream Solar handles the entire official process from engineering drawings to final meter installation.",
      features: [
        "Preparation of official single-line diagram (SLD) & load verification",
        "Submission of application and document follow-up with MEPCO sub-division",
        "Testing and inspection clearance from MEPCO laboratory",
        "Installation and commissioning of official 3-phase Green Meter",
      ],
      idealFor: "Three-Phase Residential Homes, Plazas & Factories",
      image: "/images/mepco-net-metering.jpg",
    },
    {
      id: "industrial",
      icon: Factory,
      title: "Industrial Solar Power Plants",
      subtitle: "50 kW to 500 kW+ Industrial Installations",
      desc: "Engineered for cotton ginning factories, cold storage units, textile mills, and manufacturing plants across South Punjab. Designed to handle heavy motor startup loads and synchronize seamlessly with generators.",
      features: [
        "High-voltage synchronization and generator fuel reduction",
        "Significant reduction in peak-hour MEPCO demand charges",
        "Heavy-duty industrial shed and ground mount structures",
        "Continuous string-level telemetry and automatic fault detection",
      ],
      idealFor: "Factories, Warehouses, Cold Storages & Processing Units",
      image: "/images/industrial-solar.jpg",
    },
    {
      id: "maintenance",
      icon: Wrench,
      title: "Maintenance & System Upgrades",
      subtitle: "Solar Health Checkups, Cleaning & Battery Upgrades",
      desc: "Already have an older solar system that underperforms or trips? Our technicians perform comprehensive string diagnostics, inverter firmware updates, panel angle realignment, and Lithium battery upgrades.",
      features: [
        "Infrared thermal imaging to detect hidden micro-cracks in panels",
        "Inverter parameter recalibration and software optimization",
        "Upgrading old lead-acid batteries to high-cycle Lithium LiFePO4",
        "Scheduled pressurized water cleaning service for maximum generation",
      ],
      idealFor: "Any Existing Solar System Needing Service or More Power",
      image: "/images/solar-maintenance.jpg",
    },
  ];

  const workflow = [
    {
      step: "01",
      title: "Free Roof & Load Survey",
      desc: "Our engineer visits your property in Vehari or nearby areas, analyzes your electricity bills, checks shadow-free roof space, and calculates the exact capacity you need.",
    },
    {
      step: "02",
      title: "System Design & Transparent Quote",
      desc: "We provide a clear quotation specifying exact equipment models, brands, frame gauge, expected daily units, and estimated monthly bill savings with zero hidden charges.",
    },
    {
      step: "03",
      title: "Heavy-Duty Structural Fabrication",
      desc: "We assemble heavy-duty galvanized iron structures (L2/L3/L4) anchored securely into the roof columns to withstand 130 km/h windstorms.",
    },
    {
      step: "04",
      title: "Certified Wiring & Inverter Setup",
      desc: "Original Tier-1 panels and smart inverters are installed using 99.9% pure copper DC/AC cables, safety breakers, surge arrestors, and deep earthing pits.",
    },
    {
      step: "05",
      title: "Testing, Training & Green Meter",
      desc: "We perform full electrical load testing, configure your smartphone monitoring app, train you on system usage, and manage MEPCO Net Metering paperwork.",
    },
  ];

  return (
    <div className="bg-solar-alabaster min-h-screen">
      {/* Page Hero */}
      <PageHero
        crumb="Services"
        eyebrow="Turnkey Engineering"
        title="Professional Solar Installation &"
        accent="Turnkey Services"
        description={
          <p>
            From residential homes and commercial plazas to agricultural tube wells and MEPCO Net Metering, Dream Solar Energy provides complete turnkey solar engineering with 25-year reliability.
          </p>
        }
        visualTone="navy"
        visualKicker="Complete Turnkey Service"
        visualBody="From initial roof survey to green meter activation — we handle everything"
        photoSrc="/images/turnkey-installation.jpg"
        photoAlt="Solar installation engineers at work"
        stats={[
          { value: "500+", label: "Turnkey Installs" },
          { value: "48-72h", label: "Fast Deployment" },
        ]}
        actions={
          <>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-solar-amber" />
              <span>Book Free Site Survey</span>
            </button>
            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%2C%20I%20want%20to%20book%20a%20site%20survey%20for%20my%20property."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Our Team</span>
            </a>
          </>
        }
      />

      {/* Services Grid */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-alabaster">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>What We Do Best</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
              Solar Solutions For Every Sector
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2">
              Explore our core installation domains across residential, commercial, industrial, and agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => {
              const Icon = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="bg-white border border-solar-border rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-solar-navy/30 hover:shadow-md transition-all"
                >
                  <div>
                    {/* Image Header */}
                    <div className="relative h-48 w-full overflow-hidden bg-solar-navy/5">
                      <Image
                        src={srv.image}
                        alt={srv.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <div className="w-10 h-10 rounded-xl bg-solar-deep/90 border border-white/15 flex items-center justify-center backdrop-blur-md shadow-md">
                          <Icon className="w-5 h-5 text-solar-amber" />
                        </div>
                      </div>
                      <div className="absolute bottom-3 right-3">
                        <span className="bg-solar-deep/90 text-white text-[10px] font-bold py-1 px-2.5 rounded-md backdrop-blur-sm">
                          {srv.idealFor.split(",")[0]}
                        </span>
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-solar-navy mb-1 leading-tight group-hover:text-solar-amber transition-colors">
                        {srv.title}
                      </h3>
                      <p className="text-xs font-semibold text-solar-amber mb-3">{srv.subtitle}</p>

                      <p className="text-xs sm:text-sm text-solar-muted leading-relaxed mb-5 font-sans">
                        {srv.desc}
                      </p>

                      <div className="space-y-2 mb-4">
                        {srv.features.map((feat) => (
                          <div key={feat} className="flex items-start gap-2 text-xs text-solar-navy">
                            <CheckCircle2 className="w-3.5 h-3.5 text-solar-emerald shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="bg-solar-subtle border border-solar-border rounded-xl p-3 mb-4 text-[11px] font-medium text-solar-muted">
                      Best For: <strong className="text-solar-navy">{srv.idealFor}</strong>
                    </div>

                    <button
                      onClick={() => openModal(srv.title)}
                      className="w-full inline-flex items-center justify-center gap-1.5 bg-solar-deep hover:bg-solar-navy text-white text-xs font-display font-bold py-3 rounded-xl transition-all shadow-sm cursor-pointer"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 text-solar-amber" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Workflow Process Timeline */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle border-t border-solar-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>Step-by-Step Execution</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
              How We Execute Your Solar Project
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2">
              From the first site survey to MEPCO Green Meter activation, our in-house team handles every stage.
            </p>
          </div>

          <div ref={workflowRef}>
            <ProcessTimeline
              visible={workflowVisible}
              steps={workflow.map((item) => ({
                number: item.step,
                title: item.title,
                description: item.desc,
              }))}
            />
          </div>
        </div>
      </section>

      {/* Engineering Standards */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-deep text-white border-t border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-solar-amber/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
                <span className="w-5 h-0.5 bg-solar-amber" />
                <span>Our Engineering Standards</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tight mb-4">
                We Build Systems That Last 25+ Years
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 font-sans">
                Many local installers cut corners on frame gauge, use sub-standard copper wiring, or ignore surge protection. At Dream Solar, every installation complies with international electrical standards.
              </p>

              <div className="space-y-3.5 mb-8">
                {[
                  {
                    title: "Windstorm Tested Framing",
                    desc: "14-gauge hot-dipped galvanized steel structures anchored into roof columns, designed for 130 km/h wind gusts.",
                  },
                  {
                    title: "Pure Copper Conduction",
                    desc: "Exclusively Pakistan Cables & Fast Cables double-insulated wiring for minimal line loss and zero fire hazards.",
                  },
                  {
                    title: "Full Electrical Protection",
                    desc: "European Schneider / Suntree DC & AC breakers, surge protectors (SPDs), and certified earthing bore pits.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
                    <ShieldCheck className="w-5 h-5 text-solar-emerald shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-display font-bold text-white mb-0.5">{item.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => openModal("Site Survey")}
                className="inline-flex items-center gap-2 bg-solar-amber hover:bg-solar-gold text-solar-deep font-display font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4" />
                <span>Book Free Technical Survey</span>
              </button>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-lg aspect-4/3 rounded-2xl overflow-hidden border border-white/15 shadow-xl">
                <Image
                  src="/images/turnkey-installation.jpg"
                  alt="Precision engineering standards"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="text-xs font-bold text-solar-amber uppercase tracking-wider mb-1">
                    On-Site Quality Assurance
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    Certified technicians inspect every string connection and torque every bolt before system switch-on.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-5 sm:px-6 lg:px-8 bg-white border-t border-solar-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
            <span className="w-5 h-0.5 bg-solar-amber" />
            <span>Ready for Clean Energy?</span>
          </div>
          <h2 className="text-3xl font-display font-black text-solar-navy tracking-tight mb-4">
            Schedule a Free Site Inspection
          </h2>
          <p className="text-solar-muted text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
            Our engineers are on the road every day across Vehari, Burewala, Mailsi, and South Punjab. Contact us today to arrange a free, no-obligation roof inspection.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Contact Our Engineering Team</span>
              <ArrowRight className="w-4 h-4 text-solar-amber" />
            </Link>

            <a
              href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%2C%20I%20would%20like%20to%20schedule%20a%20site%20visit."
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
