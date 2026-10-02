"use client";

import React from "react";
import {
  Sun,
  Battery,
  Cpu,
  Wrench,
  Home,
  Store,
  Factory,
  Wheat,
  ShieldCheck,
  Award,
  Users,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  const services = [
    {
      icon: Sun,
      title: "Solar Panels",
      desc: "Tier-1 monocrystalline panels from Jinko Solar, Longi Green Energy, JA Solar — proven brands with 25-year output warranties.",
      color: "text-amber-600 bg-amber-50 border-amber-200",
    },
    {
      icon: Cpu,
      title: "Hybrid Inverters",
      desc: "On-grid, off-grid & hybrid inverters from Knox, Inverex, Huawei, and Solis — smart energy management for every setup.",
      color: "text-sky-600 bg-sky-50 border-sky-200",
    },
    {
      icon: Battery,
      title: "Batteries & Storage",
      desc: "Lithium LiFePO4 batteries, tubular GEL, and AGM deep-cycle batteries to keep your power flowing 24/7.",
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
    },
    {
      icon: Wrench,
      title: "Accessories & Hardware",
      desc: "Galvanized mounting structures, DC/AC cables, connectors, fuses, breakers, energy meters, and all balance-of-system parts.",
      color: "text-purple-600 bg-purple-50 border-purple-200",
    },
  ];

  const installations = [
    {
      icon: Home,
      title: "Residential Homes",
      desc: "4 kW – 20 kW solar systems for houses & housing societies. Cut electricity bills by up to 90% and enjoy uninterrupted power.",
      badge: "Most Popular",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      icon: Store,
      title: "Shops & Offices",
      desc: "Custom commercial solar solutions for shops, plazas, offices, and retail businesses. Eliminate high commercial tariff bills.",
      badge: "Commercial",
      badgeColor: "bg-sky-100 text-sky-800",
    },
    {
      icon: Factory,
      title: "Factories & Industry",
      desc: "Large-scale industrial solar installations (50 kW – 1 MW+) for factories, warehouses, cold storages, and processing units.",
      badge: "Industrial",
      badgeColor: "bg-slate-100 text-slate-700",
    },
    {
      icon: Wheat,
      title: "Tube Wells & Farms",
      desc: "Agricultural solar pump systems to replace diesel engines. Irrigate your crops 365 days a year with free solar energy.",
      badge: "Agriculture",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
  ];

  const stats = [
    { value: "500+", label: "Systems Installed", icon: Zap },
    { value: "10+", label: "Years Experience", icon: Award },
    { value: "1000+", label: "Happy Customers", icon: Users },
    { value: "100%", label: "Genuine Products", icon: ShieldCheck },
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#0D2354]/5 border border-[#0D2354]/10 rounded-full px-4 py-1.5 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-solar-amber" />
            <span className="text-xs font-bold text-[#0D2354] uppercase tracking-widest">
              Who We Are
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D2354] tracking-tight mb-4"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Your One-Stop Solar{" "}
            <span className="text-solar-amber">
              Solution Partner
            </span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            <strong className="text-[#0D2354]">Dream Solar Energy</strong>, based in Vehari, Punjab, is a full-service solar company.
            We supply, install, and maintain complete solar power systems for homes, shops, factories, and agricultural setups
            across South Punjab. Owner <strong className="text-[#0D2354]">Tariq Mahmood</strong> leads a professional team
            committed to quality, reliability, and after-sale support.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {stats.map(({ value, label, icon: Icon }) => (
            <div
              key={label}
              className="bg-white border border-slate-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md hover:border-amber-200 transition-all group"
            >
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-100 transition-colors">
                <Icon className="w-5 h-5 text-amber-600" />
              </div>
              <p className="text-2xl sm:text-3xl font-black text-[#0D2354]" style={{ fontFamily: "var(--font-outfit)" }}>
                {value}
              </p>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Products We Sell */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-linear-to-b from-[#F59E0B] to-[#16A34A]" />
            <h3
              className="text-xl sm:text-2xl font-black text-[#0D2354]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Products We Sell
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map(({ icon: Icon, title, desc, color }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-4 ${color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h4
                  className="font-bold text-base text-[#0D2354] mb-2"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  {title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Installation Services */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 rounded-full bg-linear-to-b from-[#5CB3E8] to-[#0D2354]" />
            <h3
              className="text-xl sm:text-2xl font-black text-[#0D2354]"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Installation Services
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {installations.map(({ icon: Icon, title, desc, badge, badgeColor }) => (
              <div
                key={title}
                className="bg-white border border-slate-100 rounded-2xl p-6 flex gap-5 hover:shadow-lg hover:-translate-y-0.5 transition-all group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#0D2354]/5 border border-[#0D2354]/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#0D2354] group-hover:border-[#0D2354] transition-colors">
                  <Icon className="w-6 h-6 text-[#0D2354] group-hover:text-white transition-colors" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-sm text-[#0D2354]" style={{ fontFamily: "var(--font-outfit)" }}>
                      {title}
                    </h4>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-linear-to-br from-[#0D2354] to-[#163574] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-amber-400/5 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-75 h-[200px] bg-sky-400/8 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/15 border border-amber-400/25 rounded-full px-3.5 py-1 mb-4">
                <span className="text-xs font-bold text-amber-300 uppercase tracking-widest">Why Dream Solar?</span>
              </div>
              <h3
                className="text-2xl sm:text-3xl font-black text-white mb-4 leading-tight"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Professional, Reliable &amp;{" "}
                <span className="text-amber-400">Affordable</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                We are a locally-rooted team with deep experience in the South Punjab solar market.
                Our commitment to using only genuine Tier-1 products and providing hands-on after-sale
                support makes us the most trusted solar company in Vehari.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-solar-amber hover:bg-[#D97706] text-black font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-lg"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Genuine Tier-1 Solar Products Only",
                "Certified & Trained Installation Team",
                "MEPCO Net Metering Assistance",
                "5-Year Installation Warranty",
                "After-Sale Service & Maintenance",
                "Competitive Prices in South Punjab",
                "Free Site Survey & System Design",
                "Transparent No-Hidden-Cost Quotes",
              ].map((point) => (
                <div key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-300">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
