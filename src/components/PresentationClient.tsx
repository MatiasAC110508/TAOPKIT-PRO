"use client";

import Navbar from "./Navbar";
import HeroSection from "./sections/HeroSection";
import DescripcionSection from "./sections/DescripcionSection";
import CostosSection from "./sections/CostosSection";
import NivelesSection from "./sections/NivelesSection";
import BuyerPersonSection from "./sections/BuyerPersonSection";
import FodaSection from "./sections/FodaSection";
import { PawPrint } from "lucide-react";

export default function PresentationClient() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <DescripcionSection />
        <CostosSection />
        <NivelesSection />
        <BuyerPersonSection />
        <FodaSection />
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 bg-[#0a1515]">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PawPrint className="w-5 h-5 text-teal-400" />
            <span className="font-bold text-white">
              TAOP <span className="gradient-text">KIT PRO</span>
            </span>
          </div>
          <p className="text-teal-200/40 text-sm">
            Cuidado integral para mascotas — Presentación del Proyecto
          </p>
        </div>
      </footer>
    </>
  );
}
