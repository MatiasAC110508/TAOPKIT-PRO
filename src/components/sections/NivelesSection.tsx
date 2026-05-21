"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../Animations";
import {
  Layers,
  Heart,
  Box,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
  Users,
  Clock,
  CheckCircle2,
  HelpCircle,
  HelpCircle as QuestionIcon
} from "lucide-react";

const productosIncluidos = [
  "Champú especializado",
  "Acondicionador suavizante",
  "Loción aromática",
  "Talco protector",
  "Baño en seco",
  "Crema dental canina",
  "Cepillo de dientes de doble cerda",
];

const serviciosPrincipales = [
  "Higiene corporal de la mascota.",
  "Cuidado del pelaje.",
  "Limpieza y salud oral.",
  "Organización de productos en un solo kit.",
  "Fácil transporte para viajes y salidas.",
];

const caracteristicas = [
  "Productos seguros para mascotas.",
  "Diseño práctico y fácil de usar.",
  "Ahorro de tiempo para el dueño.",
  "Experiencia cómoda y organizada.",
  "Productos funcionales y de calidad.",
];

const diferenciadores = [
  {
    icon: Truck,
    text: "Su diseño compacto y fácil de transportar.",
  },
  {
    icon: Star,
    text: "Ser ideal para viajes, vacaciones o emergencias.",
  },
  {
    icon: Users,
    text: "Permitir personalización según el tipo de mascota y sus necesidades.",
  },
  {
    icon: Sparkles,
    text: "Ofrecer una experiencia práctica y organizada.",
  },
];

const experiencia = [
  "Ahorro de tiempo.",
  "Practicidad.",
  "Organización.",
  "Tranquilidad en el cuidado de su mascota.",
];

type NivelKey = "basico" | "real" | "aumentado";

export default function NivelesSection() {
  const [activeNivel, setActiveNivel] = useState<NivelKey>("basico");

  return (
    <section id="niveles" className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#081313] to-[#0c1a1a] dot-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Estructura de la Propuesta
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Niveles del Producto
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
              De acuerdo con la teoría de Kotler, estructuramos a 
              <strong className="text-white"> TAOP KIT PRO </strong> en tres niveles complementarios para asegurar valor básico, tangible y aumentado.
            </p>
          </div>
        </FadeIn>

        {/* Dynamic Levels Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left Column: Visual Concentric Diagram */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full flex items-center justify-center border border-white/5 bg-[#091515]/30">
              
              {/* Outer Layer: Producto Aumentado */}
              <button
                onClick={() => setActiveNivel("aumentado")}
                className={`absolute inset-0 rounded-full border-2 transition-all duration-300 flex items-start justify-center pt-5 ${
                  activeNivel === "aumentado"
                    ? "border-rose-400 bg-rose-950/10 scale-100 z-10"
                    : "border-teal-500/10 hover:border-teal-500/35 hover:bg-white/5"
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-widest ${activeNivel === "aumentado" ? "text-rose-400" : "text-teal-300/40"}`}>
                  Producto Aumentado
                </span>
              </button>

              {/* Middle Layer: Producto Real */}
              <button
                onClick={() => setActiveNivel("real")}
                className={`absolute w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full border-2 transition-all duration-300 flex items-start justify-center pt-5 ${
                  activeNivel === "real"
                    ? "border-amber-400 bg-amber-950/10 scale-102 z-20"
                    : "border-teal-500/15 hover:border-teal-500/40 hover:bg-white/5"
                }`}
              >
                <span className={`text-[10px] uppercase font-bold tracking-widest ${activeNivel === "real" ? "text-amber-400" : "text-teal-300/50"}`}>
                  Producto Real
                </span>
              </button>

              {/* Core Layer: Producto Básico */}
              <button
                onClick={() => setActiveNivel("basico")}
                className={`absolute w-[140px] h-[140px] md:w-[160px] md:h-[160px] rounded-full border-2 transition-all duration-300 flex flex-col items-center justify-center p-3 text-center ${
                  activeNivel === "basico"
                    ? "border-teal-400 bg-teal-950/30 scale-105 z-30"
                    : "border-teal-500/20 hover:border-teal-500/50 hover:bg-white/5"
                }`}
              >
                <Heart className={`w-6 h-6 mb-1 ${activeNivel === "basico" ? "text-teal-400" : "text-teal-400/40"}`} />
                <span className={`text-[9px] uppercase font-bold tracking-widest ${activeNivel === "basico" ? "text-white" : "text-teal-300/60"}`}>
                  P. Básico
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Active Level Description Cards */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeNivel === "basico" && (
                <motion.div
                  key="basico"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card-strong rounded-3xl p-8 border border-teal-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-teal-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">Producto Básico</h3>
                      <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">Necesidad Esencial a Satisfacer</p>
                    </div>
                  </div>
                  <p className="text-teal-100/90 text-sm md:text-base leading-relaxed mb-6">
                    Satisface la necesidad primaria de <strong className="text-white">higiene, bienestar y salud integral</strong> de las mascotas. Al mantener limpio al animal, controla los olores y mejora de manera directa la convivencia familiar e higiene del hogar.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    {[
                      "Bienestar y salud canina",
                      "Control biológico de olores",
                      "Higiene y convivencia familiar",
                      "Cuidado básico preventivo"
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                        <span className="text-teal-200/60 text-xs">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeNivel === "real" && (
                <motion.div
                  key="real"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card-strong rounded-3xl p-8 border border-amber-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <Box className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">Producto Real</h3>
                      <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Especificaciones Tangibles</p>
                    </div>
                  </div>
                  <p className="text-teal-100/90 text-sm md:text-base leading-relaxed mb-6">
                    El kit físico tangible y de fácil transporte. Contiene 7 productos de higiene en una caja protectora, complementados con un manual de usuario pedagógico.
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-3">Productos Físicos Incluidos</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {productosIncluidos.map((p) => (
                        <div key={p} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          <span className="text-teal-200/60 text-xs">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeNivel === "aumentado" && (
                <motion.div
                  key="aumentado"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card-strong rounded-3xl p-8 border border-rose-500/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center">
                      <Star className="w-5 h-5 text-rose-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white leading-tight">Producto Aumentado</h3>
                      <p className="text-xs text-rose-400 font-semibold uppercase tracking-wider">Servicio & Valor Diferenciador</p>
                    </div>
                  </div>
                  <p className="text-teal-100/90 text-sm md:text-base leading-relaxed mb-6">
                    Soporte extendido e intangibles que facilitan la vida del dueño. Incluye comodidad, el algoritmo de personalización en la web, asesoría médica directa y recordatorios de recompra inteligentes.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    {diferenciadores.map((d, idx) => {
                      const Icon = d.icon;
                      return (
                        <div key={idx} className="flex items-start gap-2">
                          <Icon className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span className="text-teal-200/60 text-xs leading-tight">{d.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Support Services and Specs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <FadeIn direction="left">
            <div className="glass-card-strong rounded-2xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-teal-400" />
                <h4 className="text-lg font-bold text-white">Servicios de Soporte</h4>
              </div>
              <div className="space-y-3">
                {serviciosPrincipales.map((s) => (
                  <div key={s} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span className="text-teal-200/70 text-xs md:text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card-strong rounded-2xl p-8 border border-white/5 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-amber-400" />
                <h4 className="text-lg font-bold text-white">Características del Servicio</h4>
              </div>
              <div className="space-y-3">
                {caracteristicas.map((c) => (
                  <div key={c} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <span className="text-teal-200/70 text-xs md:text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Customer Experience Summary */}
        <FadeIn>
          <div className="rounded-3xl bg-[#091616]/40 p-8 text-center max-w-3xl mx-auto border border-white/5">
            <Clock className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h4 className="text-lg font-bold text-white mb-3">La Experiencia del Cliente</h4>
            <p className="text-teal-200/70 text-sm mb-6 max-w-xl mx-auto">
              Facilitamos el cuidado integral de la mascota, ahorrando tiempo y eliminando la fricción de comprar cada elemento por separado.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {experiencia.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 rounded-full bg-teal-950/40 border border-teal-500/25 text-teal-300 text-xs font-semibold"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
