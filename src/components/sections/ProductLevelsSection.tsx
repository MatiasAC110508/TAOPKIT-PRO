"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import {
  Package,
  Wrench,
  Lightbulb,
  Box,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Heart,
  Layers,
} from "lucide-react";
import { 
  includedProducts, 
  mainServices, 
  serviceFeatures, 
  differentiators, 
  customerExperience 
} from "../../data/productLevels";

export default function ProductLevelsSection() {
  const [activeLevel, setActiveLevel] = useState<1 | 2 | 3>(1);

  return (
    <section id="levels" className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#091212]/50 dot-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Análisis del Producto
            </span>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
              Niveles del Producto
            </h2>
            <p className="text-teal-100/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Descubre cómo TAOP KIT PRO se estructura desde lo más básico hasta 
              la experiencia emocional que brinda a ti y a tu mascota.
            </p>
          </div>
        </FadeIn>

        {/* Interactive Diagram UI */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Level Selectors */}
          <FadeIn direction="left" className="lg:col-span-5">
            <div className="space-y-4">
              
              <button
                onClick={() => setActiveLevel(1)}
                className={`w-full flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                  activeLevel === 1
                    ? "bg-gradient-to-br from-teal-900/80 to-teal-800/50 border-teal-500/50 shadow-[0_0_30px_rgba(20,184,166,0.15)]"
                    : "glass-card border-white/5 hover:border-teal-500/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  activeLevel === 1 ? "bg-teal-500/20" : "bg-white/5"
                }`}>
                  <Package className={`w-6 h-6 ${activeLevel === 1 ? "text-teal-400" : "text-teal-200/50"}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${activeLevel === 1 ? "text-white" : "text-teal-100/70"}`}>
                    Nivel 1: Producto Básico
                  </h3>
                  <p className="text-teal-200/60 text-sm">Los elementos tangibles y directos que componen el kit físico.</p>
                </div>
              </button>

              <button
                onClick={() => setActiveLevel(2)}
                className={`w-full flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                  activeLevel === 2
                    ? "bg-gradient-to-br from-amber-900/80 to-amber-800/50 border-amber-500/50 shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                    : "glass-card border-white/5 hover:border-amber-500/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  activeLevel === 2 ? "bg-amber-500/20" : "bg-white/5"
                }`}>
                  <Wrench className={`w-6 h-6 ${activeLevel === 2 ? "text-amber-400" : "text-teal-200/50"}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${activeLevel === 2 ? "text-white" : "text-teal-100/70"}`}>
                    Nivel 2: Producto Real
                  </h3>
                  <p className="text-teal-200/60 text-sm">Las características, diseño y funcionalidad de los servicios asociados.</p>
                </div>
              </button>

              <button
                onClick={() => setActiveLevel(3)}
                className={`w-full flex items-start gap-4 p-5 rounded-2xl text-left transition-all duration-300 border ${
                  activeLevel === 3
                    ? "bg-gradient-to-br from-coral-900/80 to-coral-800/50 border-coral-500/50 shadow-[0_0_30px_rgba(251,113,133,0.15)]"
                    : "glass-card border-white/5 hover:border-coral-500/30"
                }`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                  activeLevel === 3 ? "bg-coral-500/20" : "bg-white/5"
                }`}>
                  <Lightbulb className={`w-6 h-6 ${activeLevel === 3 ? "text-coral-400" : "text-teal-200/50"}`} />
                </div>
                <div>
                  <h3 className={`font-bold text-lg mb-1 ${activeLevel === 3 ? "text-white" : "text-teal-100/70"}`}>
                    Nivel 3: Producto Aumentado
                  </h3>
                  <p className="text-teal-200/60 text-sm">El valor emocional, beneficios adicionales y la experiencia final.</p>
                </div>
              </button>

            </div>
          </FadeIn>

          {/* Level Details Panel */}
          <FadeIn direction="right" delay={0.2} className="lg:col-span-7 h-full">
            <div className="glass-card-strong rounded-3xl p-6 md:p-8 border border-white/10 h-full min-h-[450px]">
              <AnimatePresence mode="wait">
                
                {activeLevel === 1 && (
                  <motion.div
                    key="nivel1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-teal-500/20">
                      <Box className="w-8 h-8 text-teal-400" />
                      <h3 className="text-2xl font-bold text-white">Bienes Tangibles</h3>
                    </div>
                    <p className="text-teal-100/80 mb-6 text-sm leading-relaxed">
                      El producto básico se compone de los bienes físicos diseñados para la higiene y el cuidado directo de la mascota.
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3 flex-grow">
                      {includedProducts.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 bg-teal-950/30 border border-teal-500/10 p-3 rounded-xl">
                          <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                          <span className="text-teal-100/90 text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeLevel === 2 && (
                  <motion.div
                    key="nivel2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-amber-500/20">
                      <Layers className="w-8 h-8 text-amber-400" />
                      <h3 className="text-2xl font-bold text-white">Servicios y Características</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 flex-grow">
                      <div>
                        <h4 className="font-semibold text-amber-300 mb-4 flex items-center gap-2">
                          <ChevronRight className="w-4 h-4" /> Servicios Principales
                        </h4>
                        <ul className="space-y-3">
                          {mainServices.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-teal-100/80">
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-amber-950/20 p-5 rounded-2xl border border-amber-500/10">
                        <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Características</h4>
                        <ul className="space-y-3">
                          {serviceFeatures.map((item, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-amber-100/70">
                              <ShieldCheck className="w-4 h-4 text-amber-500 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeLevel === 3 && (
                  <motion.div
                    key="nivel3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-coral-500/20">
                      <Heart className="w-8 h-8 text-coral-400" />
                      <h3 className="text-2xl font-bold text-white">Experiencia y Diferenciación</h3>
                    </div>
                    
                    <p className="text-teal-100/80 mb-6 text-sm leading-relaxed">
                      El producto aumentado es el verdadero valor diferencial de TAOP KIT PRO, enfocado en resolver las carencias del mercado de manera única y experiencial.
                    </p>

                    <div className="grid gap-4 mb-6">
                      {differentiators.map((diff, i) => {
                        const Icon = diff.icon;
                        return (
                          <div key={i} className="flex items-center gap-4 bg-coral-950/20 border border-coral-500/10 p-4 rounded-xl">
                            <div className="w-10 h-10 rounded-lg bg-coral-500/20 flex items-center justify-center shrink-0">
                              <Icon className="w-5 h-5 text-coral-400" />
                            </div>
                            <p className="text-coral-100/90 text-sm">{diff.text}</p>
                          </div>
                        );
                      })}
                    </div>

                    <div className="mt-auto bg-gradient-to-r from-teal-900/40 to-coral-900/20 p-4 rounded-xl border border-white/5">
                      <p className="text-center text-sm font-medium text-white">
                        Brindamos a los clientes <span className="text-amber-300">tranquilidad, ahorro de tiempo</span> y <span className="text-coral-400">practicidad</span>.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
