"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/content/site";
import Magnetic from "@/components/ui/Magnetic";
import { ArrowUp } from "lucide-react";

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
    <footer className="bg-solar-deep text-white pt-20 pb-12 px-5 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Top Colophon Line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-3.5">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/20 bg-white">
              <Image
                src="/dream-solar-logo.jpg"
                alt="Dream Solar Energy"
                fill
                className="object-cover"
                sizes="32px"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-sm tracking-tight text-white block">
                {siteContent.meta.companyName}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                {siteContent.footer.badge}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[10px] sm:text-xs text-slate-400">
            <span>{siteContent.meta.coordinates}</span>
            <span>•</span>
            <span className="text-solar-emerald font-bold">
              PKT: {pakistanTime || "11:42:00"}
            </span>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-cursor="top"
              className="font-mono text-[11px] uppercase tracking-widest text-solar-amber hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>{siteContent.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </Magnetic>
        </div>

        {/* Middle Narrative + Navigation */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 gap-8 text-slate-300 font-sans text-sm">
          <div className="md:col-span-5">
            <p className="leading-relaxed max-w-md mb-6">
              {siteContent.footer.mission}
            </p>
            <p className="text-slate-200 font-medium">
              {siteContent.footer.directContact}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-solar-amber mb-4">Pages</h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Services", href: "/services" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end justify-between gap-4">
            <div>
              <h4 className="font-display font-bold text-xs uppercase tracking-widest text-solar-amber mb-4 md:text-right">Quick Links</h4>
              <nav className="flex flex-col gap-2.5 md:items-end">
                {[
                  { label: "Savings Calculator", href: "/calculator" },
                  { label: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <Link key={link.href} href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                ))}
                <a href="https://wa.me/923202200884" target="_blank" rel="noreferrer" className="text-solar-emerald hover:text-white transition-colors text-sm font-medium">
                  WhatsApp: 0320-2200884
                </a>
              </nav>
            </div>
            <p className="text-xs uppercase tracking-wider text-slate-500 font-semibold md:text-right">
              {siteContent.footer.colophon}
            </p>
          </div>
        </div>

        {/* Bottom Giant Brand Wordmark Watermark */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 font-sans text-xs">
          <span>© 2026 Dream Solar Energy. All rights reserved.</span>
          <span>Vehari • Burewala • Mailsi • South Punjab</span>
        </div>
      </div>
    </footer>
  );
}
