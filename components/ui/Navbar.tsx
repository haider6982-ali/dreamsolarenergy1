"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteContent } from "@/content/site";
import Magnetic from "@/components/ui/Magnetic";
import { useQuoteModal } from "@/components/providers/QuoteModalContext";

export default function Navbar() {
  const { openModal } = useQuoteModal();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-solar-alabaster/90 backdrop-blur-md border-b border-solar-border py-3.5 shadow-sm"
          : "bg-transparent py-5 sm:py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Lockup with Dream Solar Logo */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group cursor-pointer"
          data-cursor="home"
        >
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-solar-border bg-white shadow-sm shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/dream-solar-logo.jpg"
              alt="Dream Solar Energy"
              fill
              className="object-cover"
              sizes="40px"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-sm sm:text-base tracking-tight text-solar-navy leading-none">
              DREAM SOLAR
            </span>
            <span className="font-sans text-[10px] uppercase tracking-wider text-solar-muted font-semibold mt-0.5">
              VEHARI • SOUTH PUNJAB
            </span>
          </div>
        </Link>

        {/* Desktop Central Navigation */}
        <nav className="hidden lg:flex items-center gap-7 bg-white/80 border border-solar-border backdrop-blur-md px-6 py-2.5 rounded-full shadow-[0_2px_12px_rgba(11,23,46,0.03)]">
          {siteContent.navigation.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-wider font-semibold transition-colors relative py-0.5 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-solar-amber after:transition-all after:duration-300 cursor-pointer ${
                  isActive
                    ? "text-solar-navy after:w-full"
                    : "text-solar-muted hover:text-solar-navy after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Live Telemetry Pill & Magnetic CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 font-sans text-xs text-solar-muted font-medium bg-solar-subtle border border-solar-border px-3.5 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-solar-emerald animate-pulse" />
            <span>{siteContent.meta.coordinates}</span>
          </div>

          <Magnetic strength={0.3}>
            <button
              onClick={() => openModal()}
              data-cursor="audit"
              className="font-sans text-xs uppercase tracking-wider font-bold bg-solar-navy text-white hover:bg-solar-amber hover:text-solar-navy px-6 py-2.5 rounded-full transition-all duration-300 shadow-sm cursor-pointer"
            >
              {siteContent.navigation.ctaQuote}
            </button>
          </Magnetic>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col items-end gap-1.5 p-2 focus:outline-none"
          aria-label="Toggle Navigation"
        >
          <span
            className={`w-6 h-0.5 bg-solar-navy transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`w-4 h-0.5 bg-solar-navy transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`w-6 h-0.5 bg-solar-navy transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16.25 bg-solar-alabaster border-b border-solar-border px-6 py-8 shadow-xl flex flex-col gap-6 animate-fade-in z-50">
          <div className="flex flex-col gap-4">
            {siteContent.navigation.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-display text-2xl font-bold transition-colors ${
                    isActive ? "text-solar-amber" : "text-solar-navy hover:text-solar-amber"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 border-t border-solar-border flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openModal();
              }}
              className="w-full text-center font-display text-xs uppercase tracking-widest font-bold bg-solar-deep text-white py-3 rounded-xl cursor-pointer"
            >
              {siteContent.navigation.ctaQuote}
            </button>
            <a
              href={`tel:${siteContent.meta.phone}`}
              className="w-full text-center font-display text-xs uppercase tracking-widest font-bold border border-solar-border bg-white text-solar-navy py-3 rounded-xl"
            >
              Call: {siteContent.navigation.ctaCall}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
