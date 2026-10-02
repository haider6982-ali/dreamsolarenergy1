"use client";

import React from "react";
import { QuoteModalProvider } from "./QuoteModalContext";
import Navbar from "@/components/ui/Navbar";
import FooterSection from "@/components/sections/FooterSection";
import FloatingCTA from "@/components/ui/FloatingCTA";
import QuoteModal from "@/components/ui/QuoteModal";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <QuoteModalProvider>
      <div className="min-h-screen flex flex-col bg-[#F8F7F4] text-[#14202F] selection:bg-[#FBB859]/30 selection:text-[#0F1B2E]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <FooterSection />
        <FloatingCTA />
        <QuoteModal />
      </div>
    </QuoteModalProvider>
  );
}
