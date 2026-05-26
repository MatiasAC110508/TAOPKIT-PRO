"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { FadeIn, ScaleIn } from "../Animations";
import { AlertTriangle, Download, Grid3X3, Search, Shield, Target, TrendingUp } from "lucide-react";
import { swotData } from "../../data/swot";
import type { SwotCell } from "../../types";
import { SwotModal } from "./swot/SwotModal";
import { SwotMobileCard } from "./swot/SwotMobileCard";
import { SwotDesktopTable } from "./swot/SwotDesktopTable";

export default function SwotSection() {
  const [modalData, setModalData] = useState<{
    isOpen: boolean;
    title: string;
    items: SwotCell[];
    gradient: string;
    icon: ReactNode;
  }>({
    isOpen: false,
    title: "",
    items: [],
    gradient: "",
    icon: null,
  });

  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");

  const openModal = (title: string, items: SwotCell[], gradient: string, icon: ReactNode) => {
    setModalData({ isOpen: true, title, items, gradient, icon });
  };

  const closeModal = () => {
    setModalData({ ...modalData, isOpen: false });
  };

  return (
    <section id="swot" className="relative py-28 px-6 bg-[#091212] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block p-3 rounded-2xl bg-gradient-to-br from-teal-500/20 to-teal-400/10 border border-teal-500/20 mb-6">
              <Grid3X3 className="w-8 h-8 text-teal-400" />
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Matriz Cruzada FODA
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Análisis estratégico interactivo. Haz clic en cada cuadrante para explorar las tácticas de integración que usaremos para mitigar riesgos y maximizar oportunidades en el mercado.
            </p>
            <a
              href="/taop-dofa-matriz.pdf"
              download="TAOP-KIT-PRO-Matriz-DOFA.pdf"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-amber-500/20 transition-all duration-300 hover:from-amber-400 hover:to-amber-500 md:hover:scale-105"
            >
              <Download className="w-4 h-4" />
              Descargar DOFA en PDF
            </a>
          </div>
        </FadeIn>

        {/* Variables de Análisis Base */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <ScaleIn delay={0.1}>
            <SwotMobileCard
              title="Fortalezas"
              gradient="from-teal-600 to-teal-800"
              icon={<Shield className="w-5 h-5" />}
              items={swotData.strengths}
              onClick={() => openModal("Fortalezas Internas", swotData.strengths, "from-teal-600 to-teal-800", <Shield />)}
            />
          </ScaleIn>
          <ScaleIn delay={0.2}>
            <SwotMobileCard
              title="Debilidades"
              gradient="from-rose-600 to-rose-800"
              icon={<AlertTriangle className="w-5 h-5" />}
              items={swotData.weaknesses}
              onClick={() => openModal("Debilidades Internas", swotData.weaknesses, "from-rose-600 to-rose-800", <AlertTriangle />)}
            />
          </ScaleIn>
          <ScaleIn delay={0.3}>
            <SwotMobileCard
              title="Oportunidades"
              gradient="from-amber-600 to-amber-800"
              icon={<TrendingUp className="w-5 h-5" />}
              items={swotData.opportunities}
              onClick={() => openModal("Oportunidades del Entorno", swotData.opportunities, "from-amber-600 to-amber-800", <TrendingUp />)}
            />
          </ScaleIn>
          <ScaleIn delay={0.4}>
            <SwotMobileCard
              title="Amenazas"
              gradient="from-indigo-600 to-indigo-800"
              icon={<Target className="w-5 h-5" />}
              items={swotData.threats}
              onClick={() => openModal("Amenazas del Entorno", swotData.threats, "from-indigo-600 to-indigo-800", <Target />)}
            />
          </ScaleIn>
        </div>

        {/* Matriz Cruzada (Cards para móvil por defecto, Tabla opcional, Tabla siempre en desktop) */}
        <FadeIn delay={0.5}>
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
            <h3 className="text-xl md:text-2xl font-bold text-white">Estrategias Cruzadas</h3>
            
            {/* Toggle solo visible en pantallas pequeñas */}
            <div className="bg-white/5 p-1 rounded-xl flex gap-1 border border-white/10 lg:hidden self-start">
              <button 
                onClick={() => setViewMode("cards")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${viewMode === "cards" ? "bg-teal-500 text-white shadow-md shadow-teal-500/20" : "text-teal-100/60 hover:text-white hover:bg-white/5"}`}
              >
                Tarjetas
              </button>
              <button 
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${viewMode === "table" ? "bg-teal-500 text-white shadow-md shadow-teal-500/20" : "text-teal-100/60 hover:text-white hover:bg-white/5"}`}
              >
                Tabla
              </button>
            </div>
          </div>

          <div className={`mb-8 space-y-4 ${viewMode === "cards" ? "block lg:hidden" : "hidden"}`}>
            <SwotMobileCard
              title="Estrategias FO"
              gradient="from-teal-700 to-teal-900"
              icon={<Search />}
              items={swotData.so}
              onClick={() => openModal("Estrategias FO", swotData.so, "from-teal-600 to-teal-800", <Search />)}
            />
             <SwotMobileCard
              title="Estrategias DO"
              gradient="from-amber-700 to-amber-900"
              icon={<Search />}
              items={swotData.wo}
              onClick={() => openModal("Estrategias DO", swotData.wo, "from-amber-600 to-amber-800", <Search />)}
            />
             <SwotMobileCard
              title="Estrategias FA"
              gradient="from-indigo-700 to-indigo-900"
              icon={<Search />}
              items={swotData.st}
              onClick={() => openModal("Estrategias FA", swotData.st, "from-indigo-600 to-indigo-800", <Search />)}
            />
             <SwotMobileCard
              title="Estrategias DA"
              gradient="from-rose-700 to-rose-900"
              icon={<Search />}
              items={swotData.wt}
              onClick={() => openModal("Estrategias DA", swotData.wt, "from-rose-600 to-rose-800", <Search />)}
            />
          </div>

          <div className={`overflow-x-auto pb-6 custom-scrollbar ${viewMode === "table" ? "block" : "hidden lg:block"}`}>
            <SwotDesktopTable swotData={swotData} onOpenModal={openModal} />
          </div>
        </FadeIn>

      </div>

      <SwotModal
        isOpen={modalData.isOpen}
        onClose={closeModal}
        title={modalData.title}
        items={modalData.items}
        gradient={modalData.gradient}
        icon={modalData.icon}
      />
    </section>
  );
}
