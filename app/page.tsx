import React from "react";
import HeroScene from "@/components/scenes/HeroScene";
import TensionScene from "@/components/scenes/TensionScene";
import CrucibleScene from "@/components/scenes/CrucibleScene";
import YieldSimulatorScene from "@/components/scenes/YieldSimulatorScene";
import ProjectOdysseyScene from "@/components/scenes/ProjectOdysseyScene";
import StandardsScene from "@/components/scenes/StandardsScene";
import ConversionScene from "@/components/scenes/ConversionScene";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Act I: The Dawn Strike */}
      <HeroScene />

      {/* Act I to II: The Grid Inversion & Tension */}
      <TensionScene />

      {/* Act II: The Hardware Crucible (Pinned Horizontal Strip) */}
      <CrucibleScene />

      {/* Act II: The Yield Architect (Interactive Simulator) */}
      <YieldSimulatorScene />

      {/* Act II Signature Scroll Moment: The Solar Horizon Wipe into Field Deployments */}
      <ProjectOdysseyScene />

      {/* Act III: The Engineering Pact */}
      <StandardsScene />

      {/* Act III: Sovereign Conversion */}
      <ConversionScene />
    </div>
  );
}
