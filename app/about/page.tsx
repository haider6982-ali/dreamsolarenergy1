"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
  Phone,
  MessageSquare,
  MapPin,
  Wrench,
} from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  const { openModal } = useQuoteModal();

  const stats = [
    { value: "500+", label: "Happy Customers", desc: "Homes, shops, plazas, and farms across South Punjab" },
    { value: "3.5+ MW", label: "Clean Solar Power", desc: "Generating millions of free units year after year" },
    { value: "100%", label: "Original Equipment", desc: "Scan factory barcode on the spot to verify warranty" },
    { value: "25 Years", label: "Panel Life Guarantee", desc: "Long-term peace of mind backed by manufacturers" },
  ];

  const whyChooseUs = [
    {
      title: "100% Original Brand Hardware",
      desc: "We strictly say NO to refurbished, used, or B-grade panels. Every panel and inverter comes in official factory packaging with genuine barcodes and real warranties.",
      icon: Award,
    },
    {
      title: "Built For South Punjab Heat",
      desc: "Summer in Vehari and Multan is extremely hot. We use heavy-duty galvanized iron frames and latest N-type solar cells that generate high electricity even at 48°C.",
      icon: ShieldCheck,
    },
    {
      title: "Complete Setup From A to Z",
      desc: "You don't have to worry about anything. We handle roof survey, load design, frame fabrication, wiring, and all MEPCO Green Meter (Net Metering) paperwork.",
      icon: Wrench,
    },
    {
      title: "Physical Shop in Vehari",
      desc: "Unlike online sellers who disappear, our physical office on Allama Iqbal Road is open 6 days a week. We are always nearby if you ever need service or advice.",
      icon: Users,
    },
  ];

  return (
    <div className="bg-solar-alabaster min-h-screen">
      {/* Hero Section */}
      <PageHero
        crumb="About Us"
        eyebrow="Who We Are"
        title="Your Trusted Solar Partner in"
        accent="Vehari & South Punjab"
        description={
          <p>
            Managed by <strong className="text-solar-navy">Tariq Mahmood</strong>, Dream Solar Energy provides genuine solar panels, smart inverters, and complete turnkey installations for homes, commercial shops, and agricultural tube wells.
          </p>
        }
        visualTone="navy"
        visualKicker="Clean Energy Deployment"
        visualBody="500+ residential, commercial, and agricultural setups across South Punjab"
        photoSrc="/images/solar-rooftop-showcase.jpg"
        photoAlt="Dream Solar Energy Rooftop Installation in South Punjab"
        photoPosition="center"
        stats={[
          { value: "500+", label: "Installations" },
          { value: "100%", label: "Original Tier-1" },
        ]}
        actions={
          <>
            <button
              onClick={() => openModal()}
              className="inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4 text-solar-amber" />
              <span>Get Free Solar Advice</span>
            </button>
            <a
              href="https://wa.me/923202200884?text=Hello%20Tariq%20Sahib%2C%20I%20would%20like%20to%20know%20about%20Dream%20Solar%20Energy."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-display font-semibold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </>
        }
      />

      {/* Quick Statistics Banner */}
      <section className="py-12 bg-white border-b border-solar-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label, desc }) => (
              <div
                key={label}
                className="bg-solar-subtle border border-solar-border rounded-2xl p-6 text-center hover:border-solar-amber/50 hover:shadow-md transition-all"
              >
                <p className="text-3xl sm:text-4xl font-display font-extrabold text-solar-navy mb-1">
                  {value}
                </p>
                <p className="text-xs sm:text-sm font-display font-bold text-solar-amber uppercase tracking-wider mb-1.5">
                  {label}
                </p>
                <p className="text-xs text-solar-muted font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section: Tariq Mahmood */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="bg-solar-deep border border-white/10 rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-solar-amber/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left">
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border-2 border-solar-amber/60 shadow-lg mb-4 bg-solar-navy shrink-0">
                  <Image
                    src="/tariq-mahmood.png"
                    alt="Tariq Mahmood - Managing Director"
                    fill
                    className="object-cover scale-110"
                    style={{ objectPosition: "50% 18%" }}
                    sizes="144px"
                    priority
                  />
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-solar-emerald" />
                  <span className="text-xs font-bold text-solar-amber uppercase tracking-wider">
                    Managing Director
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight">
                  Tariq Mahmood
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">Dream Solar Energy — Vehari</p>

                <div className="mt-6 pt-6 border-t border-white/10 w-full flex flex-col gap-2.5 text-xs text-slate-300">
                  <a href="tel:03202200884" className="flex items-center gap-2 hover:text-solar-amber transition-colors">
                    <Phone className="w-4 h-4 text-solar-amber shrink-0" />
                    <span>0320-2200884</span>
                  </a>
                  <a href="mailto:tariqdp36@gmail.com" className="flex items-center gap-2 hover:text-solar-amber transition-colors">
                    <Zap className="w-4 h-4 text-solar-amber shrink-0" />
                    <span>tariqdp36@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-solar-emerald shrink-0" />
                    <span>Allama Iqbal Road, Near BOP, Vehari</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 lg:border-l lg:border-white/10 lg:pl-10">
                <div className="flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
                  <span className="w-5 h-0.5 bg-solar-amber" />
                  <span>A Message From The Founder</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-4 leading-snug">
                  &ldquo;A solar system is a 25-year investment. We never compromise on hardware quality or trust.&rdquo;
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                  Electricity bills in Pakistan have become painful for every household, shopkeeper, and farmer. When you switch to solar, you expect complete relief — not constant breakdowns or false promises.
                </p>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  At Dream Solar Energy, we personally guarantee that every panel we sell is 100% genuine Tier-1, every wire is pure copper, and every structure is securely bolted. We are proud to serve our community right here in Vehari with honesty and dedicated after-sales support.
                </p>

                <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> 100% Genuine Barcodes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> Honest & Transparent Pricing
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-solar-emerald" /> Rapid Local Service & Maintenance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Pillars of Our Business */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>Everything Solar In One Place</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
              How We Help You Go Solar
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2 font-sans">
              Whether you need individual solar equipment or complete hassle-free installation, we have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pillar 1: Hardware Supply */}
            <div className="bg-solar-subtle border border-solar-border rounded-2xl overflow-hidden shadow-sm hover:border-solar-navy/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-solar-navy/5">
                  <Image
                    src="/images/turnkey-installation.jpg"
                    alt="Genuine Solar Panels and Inverters"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-white/95 text-solar-navy text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-solar-amber" />
                      Wholesale & Retail
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-black text-solar-navy mb-2">
                    1. Genuine Solar Equipment
                  </h3>
                  <p className="text-solar-muted text-sm leading-relaxed mb-6">
                    Looking for genuine parts for your own installation? We supply top-brand panels, smart inverters, and battery banks at wholesale rates.
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {[
                      { title: "Solar Panels", detail: "Longi Hi-MO, Jinko Tiger Neo, JA Solar (585W – 600W N-Type)" },
                      { title: "Smart Inverters", detail: "Knox, Inverex, Growatt, Huawei (Single & 3-Phase)" },
                      { title: "Energy Storage", detail: "Lithium LiFePO4 batteries & Heavy tubular batteries" },
                      { title: "Mounting & Wiring", detail: "Galvanized L2/L3 frames, DC breakers, SPDs, pure copper cables" },
                    ].map((item) => (
                      <div key={item.title} className="bg-white border border-solar-border rounded-xl p-3 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-solar-navy block">{item.title}</span>
                          <span className="text-xs text-solar-muted">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 text-sm font-display font-bold text-solar-navy hover:text-solar-amber transition-colors"
                >
                  <span>Explore Product Catalog</span>
                  <ArrowRight className="w-4 h-4 text-solar-amber" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: Turnkey Engineering */}
            <div className="bg-solar-subtle border border-solar-border rounded-2xl overflow-hidden shadow-sm hover:border-solar-navy/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-56 w-full overflow-hidden bg-solar-navy/5">
                  <Image
                    src="/images/residential-solar.jpg"
                    alt="Turnkey Home Solar Installation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 bg-solar-navy text-white text-xs font-bold px-3 py-1 rounded-lg shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-solar-emerald" />
                      Turnkey Solution
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-display font-black text-solar-navy mb-2">
                    2. Complete Turnkey Setup
                  </h3>
                  <p className="text-solar-muted text-sm leading-relaxed mb-6">
                    Sit back and relax. Our certified team visits your site, creates the ideal custom plan, installs the system safely, and connects your MEPCO Green Meter.
                  </p>

                  <div className="space-y-2.5 mb-6">
                    {[
                      { title: "Homes & Villas", detail: "4 kW to 20 kW systems to run ACs during the day and backup at night" },
                      { title: "Commercial Plazas & Shops", detail: "Slash daytime commercial rates and protect your profits" },
                      { title: "Agricultural Tube Wells", detail: "Solar water pumping with VFD — run tube wells with zero diesel cost" },
                      { title: "MEPCO Net Metering", detail: "Sell excess solar units back to WAPDA for negative bills" },
                    ].map((item) => (
                      <div key={item.title} className="bg-white border border-solar-border rounded-xl p-3 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-solar-emerald shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-solar-navy block">{item.title}</span>
                          <span className="text-xs text-solar-muted">{item.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-display font-bold text-solar-navy hover:text-solar-amber transition-colors"
                >
                  <span>Explore Installation Services</span>
                  <ArrowRight className="w-4 h-4 text-solar-amber" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Projects Gallery */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle border-t border-solar-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>Real Work in South Punjab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
              Recent Field Installations
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2">
              Every day we help families and businesses in Vehari, Burewala, and Mailsi cut their electricity bills.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "10 kW Home System",
                location: "Vehari City",
                tag: "Residential Hybrid",
                image: "/images/residential-solar.jpg",
                metric: "90% Bill Reduction",
              },
              {
                title: "30 kW Commercial Setup",
                location: "Burewala Market",
                tag: "Commercial Three-Phase",
                image: "/images/commercial-solar.jpg",
                metric: "Zero Daytime Grid Bill",
              },
              {
                title: "20 HP Solar Tube Well",
                location: "Mailsi Agricultural Land",
                tag: "Agricultural Solar",
                image: "/images/agricultural-tubewell.jpg",
                metric: "Zero Diesel Cost",
              },
              {
                title: "100 kW Industrial Plant",
                location: "Vehari Industrial Area",
                tag: "Net Metered System",
                image: "/images/industrial-solar.jpg",
                metric: "MEPCO Synchronized",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-white border border-solar-border rounded-2xl overflow-hidden shadow-sm hover:border-solar-navy/30 transition-all group"
              >
                <div className="relative h-48 w-full overflow-hidden bg-solar-navy/10">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-solar-deep/80 via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span className="bg-solar-deep/80 text-white text-[10px] font-bold py-0.5 px-2.5 rounded-md backdrop-blur-sm">
                      {p.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 text-white text-xs font-semibold">
                    <p>{p.location}</p>
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="font-display font-bold text-sm text-solar-navy mb-1">{p.title}</h4>
                  <p className="text-xs text-solar-emerald font-bold">{p.metric}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Vehari Trusts Us */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-white border-t border-solar-border">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-2">
              <span className="w-5 h-0.5 bg-solar-amber" />
              <span>Our Core Commitment</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight">
              Why Choose Dream Solar Energy?
            </h2>
            <p className="text-solar-muted text-sm sm:text-base mt-2">
              Built on quality, honest advice, and direct personal accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map(({ title, desc, icon: Icon }) => (
              <div
                key={title}
                className="bg-solar-subtle border border-solar-border rounded-2xl p-6 hover:border-solar-navy/30 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-solar-amber/15 text-solar-amber flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-base text-solar-navy mb-2">
                  {title}
                </h3>
                <p className="text-xs sm:text-sm text-solar-muted leading-relaxed font-sans">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Visit & Contact CTA */}
      <section className="py-16 md:py-20 px-5 sm:px-6 lg:px-8 bg-solar-subtle border-t border-solar-border">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-solar-amber mb-3">
            <span className="w-5 h-0.5 bg-solar-amber" />
            <span>Come Visit Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-solar-navy tracking-tight mb-4">
            Visit Our Office in Vehari
          </h2>
          <p className="text-solar-muted text-sm sm:text-base max-w-xl mx-auto mb-8 font-sans">
            Our office is located on Allama Iqbal Road, near Bank of Punjab, Vehari. Come have tea with us and let’s discuss the best solar setup for your home or business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-deep hover:bg-solar-navy text-white font-display font-semibold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all"
            >
              <span>Get Location & Directions</span>
              <ArrowRight className="w-4 h-4 text-solar-amber" />
            </Link>

            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-solar-amber hover:bg-solar-gold text-solar-deep font-display font-bold text-sm px-7 py-3.5 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Zap className="w-4 h-4" />
              <span>Get Free Quotation</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
