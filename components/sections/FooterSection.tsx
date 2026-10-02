"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, MessageSquare, MapPin, Clock, Mail, ArrowRight } from "lucide-react";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  const { openModal } = useQuoteModal();

  const MAPS_URL =
    "https://www.google.com/maps/place/30%C2%B002'30.4%22N+72%C2%B021'07.0%22E/@30.0417733,72.3493651,633m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d30.0417733!4d72.35194?hl=en&entry=ttu";

  return (
    <footer className="bg-[#0F1B2E] text-[#EFEDE7]/80 pt-16 pb-24 sm:pb-10 px-5 sm:px-6 lg:px-8 border-t border-[#1B2A4A]">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#1B2A4A]">

          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-[#22325A] shadow-site flex items-center justify-center shrink-0 bg-white p-0.5">
                <div className="relative w-full h-full rounded-md overflow-hidden flex items-center justify-center">
                  <Image
                    src="/dream-solar-logo.jpg"
                    alt="Dream Solar Energy"
                    fill
                    className="object-contain scale-[0.88]"
                    sizes="48px"
                  />
                </div>
              </div>
              <div>
                <span
                  className="block font-black text-lg text-white tracking-tight"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  <span className="text-[#F8F7F4]">DREAM</span>{" "}
                  <span className="text-[#F7941D]">SOLAR</span>{" "}
                  <span className="text-[#3C8C2E]">ENERGY</span>
                </span>
                <span className="block text-[11px] font-semibold text-[#5B6472] uppercase tracking-wider">
                  Clean Energy &bull; Brighter Tomorrow
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#EFEDE7]/70 leading-relaxed max-w-sm">
              Vehari&apos;s leading solar engineering company. Authorized sales of Tier-1 solar panels,
              hybrid inverters, lithium batteries, and complete balance-of-system accessories. Turnkey
              installations for homes, commercial shops, factories, and agricultural tube wells.
            </p>

            {/* Owner info */}
            <div className="flex items-center gap-2.5 bg-[#1B2A4A] border border-[#22325A] rounded-lg px-4 py-2.5 max-w-sm">
              <div className="relative w-9 h-9 rounded-md overflow-hidden border border-[#F7941D]/40 shrink-0 bg-[#0F1B2E]">
                <Image
                  src="/tariq-mahmood.png"
                  alt="Tariq Mahmood"
                  fill
                  className="object-cover object-top"
                  sizes="36px"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold text-[#5B6472] uppercase tracking-widest">Business Owner</p>
                <p className="text-sm font-bold text-white" style={{ fontFamily: "var(--font-outfit)" }}>
                  Tariq Mahmood
                </p>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 bg-[#F7941D] hover:bg-[#EE6B00] text-[#0F1B2E] font-bold text-xs px-4 py-2.5 rounded-lg transition-colors shadow-site"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <span>Request Free Survey</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0F1B2E]" />
              </button>
            </div>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-2">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Company Pages
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                ["Home", "/"],
                ["About Us", "/about"],
                ["Products & Hardware", "/products"],
                ["Services & Installations", "/services"],
                ["Savings Calculator", "/calculator"],
                ["Contact Us", "/contact"],
              ].map(([title, url]) => (
                <li key={title}>
                  <Link href={url} className="text-[#EFEDE7]/70 hover:text-[#F7941D] transition-colors">
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions & Packages */}
          <div className="lg:col-span-3">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Solar Solutions
            </p>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EFEDE7]/70">
              <li>
                <Link href="/products" className="hover:text-[#F7941D] transition-colors">
                  4 kW Residential Solar System
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F7941D] transition-colors">
                  6 kW &amp; 8 kW Hybrid Solar Systems
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F7941D] transition-colors">
                  10 kW – 20 kW On-Grid &amp; Net Metering
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F7941D] transition-colors">
                  Commercial Shops &amp; Plaza Solar
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F7941D] transition-colors">
                  Industrial Factory Solar Plants
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-[#F7941D] transition-colors">
                  Agricultural Solar Tube Wells
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-[#F7941D] transition-colors">
                  Lithium LiFePO4 &amp; Tubular Batteries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <p
              className="font-bold text-sm text-white uppercase tracking-wider mb-4"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Visit &amp; Contact
            </p>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#EFEDE7]/70 hover:text-[#F7941D] transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#F7941D] shrink-0 mt-0.5" />
              <span>
                Vehari, Punjab, Pakistan<br />
                <span className="font-mono text-[10px] text-[#5B6472]">30°02&apos;30.4&quot;N 72°21&apos;07.0&quot;E</span>
              </span>
            </a>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Phone className="w-4 h-4 text-[#F7941D] shrink-0" />
              <a href="tel:03202200884" className="font-bold text-[#F8F7F4] hover:text-[#F7941D] transition-colors">
                0320-2200884
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <MessageSquare className="w-4 h-4 text-[#7CB342] shrink-0" />
              <a
                href="https://wa.me/923202200884"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#7CB342] hover:underline transition-colors"
              >
                WhatsApp: 0320-2200884
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm">
              <Mail className="w-4 h-4 text-[#FBB859] shrink-0" />
              <a
                href="mailto:tariqdp36@gmail.com"
                className="font-bold text-[#FBB859] hover:underline transition-colors"
              >
                tariqdp36@gmail.com
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-[#EFEDE7]/60 pt-2 border-t border-[#1B2A4A]">
              <Clock className="w-4 h-4 text-[#5B6472] shrink-0 mt-0.5" />
              <div>
                <p>Sat - Thu: 8:00 AM - 7:00 PM</p>
                <p>Friday: 9:00 AM - 12:30 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Strip */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#5B6472] pr-0 sm:pr-24 pb-6 sm:pb-0">
          <span>
            &copy; {currentYear} Dream Solar Energy. All rights reserved.
          </span>
          <span>
            Serving: Vehari &bull; Burewala &bull; Mailsi &bull; South Punjab
          </span>
        </div>
      </div>
    </footer>
  );
}
