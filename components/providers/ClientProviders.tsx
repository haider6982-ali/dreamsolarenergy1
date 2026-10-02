"use client";

import React from "react";
import SmoothScroll from "@/components/providers/SmoothScroll";
import { QuoteModalProvider } from "@/components/providers/QuoteModalContext";
import Navbar from "@/components/ui/Navbar";
import CustomCursor from "@/components/ui/CustomCursor";
import Grain from "@/components/ui/Grain";
import QuoteModal from "@/components/ui/QuoteModal";
import FooterScene from "@/components/scenes/FooterScene";
import FloatingCTA from "@/components/ui/FloatingCTA";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <QuoteModalProvider>
        <Grain />
        <CustomCursor />
        <Navbar />
        <main className="relative z-10 overflow-x-clip">{children}</main>
        <FooterScene />
        <FloatingCTA />
        <QuoteModal />
      </QuoteModalProvider>
    </SmoothScroll>
  );
}
