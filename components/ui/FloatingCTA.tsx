"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, X } from "lucide-react";

export default function FloatingCTA() {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => setExpanded(true);
  const handleMouseLeave = () => setExpanded(false);
  const handleFABClick = () => setExpanded((prev) => !prev);
  const handleClose = () => setExpanded(false);

  return (
    <div
      className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-200 ease-out ${
          expanded
            ? "max-h-40 opacity-100 translate-y-0 pointer-events-auto"
            : "max-h-0 opacity-0 translate-y-2 pointer-events-none"
        }`}
        aria-hidden={!expanded}
      >
        <a
          href="https://wa.me/923202200884?text=Hello%20Dream%20Solar%20Energy%2C%20I%20would%20like%20to%20inquire%20about%20solar%20systems."
          target="_blank"
          rel="noreferrer"
          onClick={handleClose}
          aria-label="Contact us on WhatsApp"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold shadow-lg transition-all border border-emerald-500/20"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Chat on WhatsApp</span>
        </a>

        <a
          href="tel:03202200884"
          onClick={handleClose}
          aria-label="Call Dream Solar Energy"
          className="flex items-center gap-2 px-4 py-2.5 bg-solar-deep hover:bg-solar-navy text-white rounded-xl text-xs font-semibold shadow-lg transition-all border border-white/10"
        >
          <Phone className="w-4 h-4 shrink-0 text-solar-amber" />
          <span>Call: 0320-2200884</span>
        </a>
      </div>

      <button
        onClick={handleFABClick}
        className="w-13 h-13 rounded-2xl bg-solar-deep hover:bg-solar-navy text-white shadow-xl border border-white/15 flex items-center justify-center transition-all duration-200 cursor-pointer"
        aria-label={expanded ? "Close contact options" : "Open contact options"}
        aria-expanded={expanded}
        aria-haspopup="true"
      >
        <span
          className="transition-transform duration-200"
          style={{ transform: expanded ? "rotate(90deg)" : "rotate(0deg)" }}
        >
          {expanded ? (
            <X className="w-5 h-5 text-solar-amber" />
          ) : (
            <MessageSquare className="w-5 h-5 text-solar-amber" />
          )}
        </span>
      </button>
    </div>
  );
}
