"use client";

import Navbar from "./Navbar";
import HeroSection from "./sections/HeroSection";
import TeamSection from "./sections/TeamSection";
import ResearchSection from "./sections/ResearchSection";
import ProductDescriptionSection from "./sections/ProductDescriptionSection";
import PricingSection from "./sections/PricingSection";
import ProductLevelsSection from "./sections/ProductLevelsSection";
import OmnichannelSection from "./sections/OmnichannelSection";
import ObjectivesSection from "./sections/ObjectivesSection";
import SegmentationSection from "./sections/SegmentationSection";
import SwotSection from "./sections/SwotSection";
import ReferencesSection from "./sections/ReferencesSection";
import { PawPrint } from "lucide-react";

export default function PresentationClient() {
  return (
    <div className="min-h-screen bg-[#071414] text-white selection:bg-teal-500/30 font-sans">
      <Navbar />
      
      <main className="relative z-10">
        <HeroSection />
        <TeamSection />
        <ResearchSection />
        <ProductDescriptionSection />
        <ProductLevelsSection />
        <OmnichannelSection />
        <PricingSection />
        <ObjectivesSection />
        <SegmentationSection />
        <SwotSection />
        <ReferencesSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#081212]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrint className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white">
              TAOP <span className="gradient-text">KIT PRO</span>
            </span>
          </div>
          <p className="text-teal-200/40 text-sm">
            Cuidado integral para mascotas — Presentación del Proyecto Académico (IUE)
          </p>
        </div>
      </footer>
    </div>
  );
}
