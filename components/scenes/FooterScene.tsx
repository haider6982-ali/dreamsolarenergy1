"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowUp, MapPin } from "lucide-react";

export default function FooterScene() {
  const [pakistanTime, setPakistanTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to PKT (UTC+5)
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Karachi",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setPakistanTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-solar-deep text-white pt-16 sm:pt-20 pb-12 px-5 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-white/10">
          {/* Logo & Full Brand Name */}
          <div className="flex items-center gap-3.5">
            <div className="relative w-9 h-9 rounded-full overflow-hidden border border-white/20 bg-white shrink-0">
              <Image
                src="/dream-solar-logo.jpg"
                alt="Dream Solar Energy"
                fill
                className="object-cover"
                sizes="36px"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-base tracking-tight text-white block">
                {siteContent.meta.companyName}
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Clean Energy • Brighter Tomorrow
              </span>
            </div>
          </div>

          {/* Dedicated Local Time Pill */}
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 px-4 py-2 rounded-full font-mono text-xs w-fit">
            <span className="w-2 h-2 rounded-full bg-solar-emerald animate-pulse" />
            <span className="text-slate-400 font-medium">Local Time (PKT):</span>
            <span className="text-solar-emerald font-bold">
              {pakistanTime || "12:00:00"}
            </span>
          </div>

          {/* Back to top magnetic button */}
          <Magnetic strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-cursor="top"
              className="font-mono text-[11px] uppercase tracking-widest text-solar-amber hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer w-fit"
            >
              <span>{siteContent.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>

        {/* Middle Navigation & Information Grid - Baseline Aligned with Equal Vertical Rhythm */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 text-slate-300 font-sans text-sm">
          {/* Col 1: Engineering Mission */}
          <div className="md:col-span-5 flex flex-col justify-start">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-solar-amber mb-4">
              Engineering Mission
            </h4>
            <p className="leading-relaxed max-w-md mb-4 text-slate-300">
              {siteContent.footer.mission}
            </p>
            <p className="text-slate-200 font-medium text-xs">
              {siteContent.footer.directContact}
            </p>
            <div className="mt-4 pt-3 border-t border-white/10 space-y-1">
              <span className="text-[11px] uppercase tracking-wider text-solar-amber font-bold block">
                Office &amp; Showroom Location
              </span>
              <p className="text-xs text-slate-300">
                Allama Iqbal Road, near Bank of Punjab, Vehari, Punjab
              </p>
              <a
                href="https://maps.app.goo.gl/LkGAoUZfkiuKcTDE8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-solar-amber hover:text-white transition-colors group mt-1.5"
              >
                <MapPin className="w-3.5 h-3.5 text-solar-amber" />
                <span className="underline underline-offset-4">Open Google Maps Location</span>
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>

          {/* Col 2: Company Pages */}
          <div className="md:col-span-3 flex flex-col justify-start">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-solar-amber mb-4">
              Company Pages
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products & Packages", href: "/products" },
                { label: "Installation Services", href: "/services" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Col 3: Quick Links & Assistance */}
          <div className="md:col-span-4 flex flex-col justify-start">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-solar-amber mb-4">
              Quick Assistance
            </h4>
            <nav className="flex flex-col gap-2.5">
              <Link
                href="/calculator"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Solar Savings Calculator
              </Link>
              <Link
                href="/contact"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Contact &amp; Showroom
              </Link>
              <a
                href="https://maps.app.goo.gl/LkGAoUZfkiuKcTDE8"
                target="_blank"
                rel="noreferrer"
                className="text-solar-amber hover:text-white transition-colors text-sm flex items-center gap-1.5"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Google Maps Directions</span>
              </a>
              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="text-solar-emerald hover:text-white transition-colors text-sm font-medium"
              >
                WhatsApp: 0320-2200884
              </a>
              <a
                href="tel:03202200884"
                className="text-slate-400 hover:text-white transition-colors text-sm"
              >
                Call: 0320-2200884
              </a>
            </nav>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold mt-4">
              {siteContent.footer.colophon}
            </p>
          </div>
        </div>

        {/* Bottom Bar: Single complete service-area line with right clearance for floating chat button */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-slate-400 font-sans text-xs pr-0 sm:pr-24 pb-8 sm:pb-2">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} Dream Solar Energy. All rights reserved.</span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-slate-300 font-medium">
              Service Area: Vehari • Burewala • Mailsi • South Punjab
            </span>
          </div>

          {/* Agency Credit */}
          <div className="flex items-center gap-2 pt-2 md:pt-0 border-t border-white/10 md:border-t-0 w-full md:w-auto">
            <span className="text-slate-400 font-medium text-[11px] sm:text-xs">
              Powered by
            </span>
            <a
              href="https://nexyt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center transition-opacity hover:opacity-80"
              title="Powered by NEXYT"
            >
              <Image
                src="/nexyt-logo.png"
                alt="NEXYT"
                width={80}
                height={16}
                className="h-3.5 sm:h-4 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
