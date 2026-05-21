"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import { Globe, RefreshCw } from "lucide-react";
import { CimCategoryKey } from "../../types";
import { cimData, omnichannelChannels, userFlowSteps } from "../../data/omnichannel";

export default function OmnichannelSection() {
  const [activeTab, setActiveTab] = useState<CimCategoryKey>("advertising");
  const activeData = cimData[activeTab];
  const ActiveIcon = activeData.icon;

  return (
    <section id="omnichannel" className="relative py-28 px-6 bg-[#091515] overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-teal-500/5 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[40%] h-[40%] rounded-full bg-amber-500/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Main Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              <RefreshCw className="w-4 h-4" />
              Estrategia CIM
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Comunicaciones Integradas y Omnicanalidad
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Diseñamos un ecosistema digital y físico sin interrupciones. Desde el primer impacto publicitario en Instagram hasta el seguimiento personalizado de recompra en WhatsApp.
            </p>
          </div>
        </FadeIn>

        {/* 1. Customer Journey Flow */}
        <div className="mb-24">
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center justify-center gap-3">
              Flujo de Usuario Ideal
            </h3>
          </FadeIn>
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-rose-500 via-teal-500 to-purple-500 opacity-20 hidden lg:block -translate-y-1/2" />
            <div className="grid lg:grid-cols-5 gap-6">
              {userFlowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <ScaleIn key={i} delay={i * 0.1}>
                    <div className="glass-card rounded-2xl p-6 relative h-full group hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-[#091515] border border-white/10 flex items-center justify-center mb-4 shadow-lg ${step.accent}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-white font-bold mb-2 text-sm">{step.title}</h4>
                      <p className="text-teal-200/60 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </ScaleIn>
                );
              })}
            </div>
          </div>
        </div>

        {/* 2. Omnichannel Channels */}
        <div className="mb-24">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-6 h-6 text-teal-400" />
              <h3 className="text-2xl font-bold text-white">Canales Integrados</h3>
            </div>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {omnichannelChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <FadeIn key={channel.title} delay={i * 0.1}>
                  <div className="glass-card-strong rounded-2xl p-6 border-l-4 border-l-teal-500/50 hover:border-l-teal-400 transition-colors duration-300 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <h4 className="text-white font-bold">{channel.title}</h4>
                    </div>
                    <p className="text-teal-200/70 text-sm leading-relaxed">{channel.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>

        {/* 3. CIM Detailed Strategy */}
        <FadeIn>
          <div className="glass-card-strong rounded-3xl p-2 max-w-5xl mx-auto border border-white/10 overflow-hidden shadow-2xl shadow-black/40">
            
            {/* Header CIM */}
            <div className="text-center p-8 pb-6 border-b border-white/5">
              <h3 className="text-2xl font-bold text-white mb-2">Estrategia Detallada por Componente</h3>
              <p className="text-teal-200/50 text-sm">Selecciona una categoría de la mezcla de comunicaciones</p>
            </div>

            <div className="grid md:grid-cols-[250px_1fr] gap-2 p-2">
              
              {/* Vertical Navigation */}
              <div className="flex flex-col gap-2">
                {(Object.keys(cimData) as CimCategoryKey[]).map((key) => {
                  const item = cimData[key];
                  const Icon = item.icon;
                  const isActive = activeTab === key;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`w-full flex items-center gap-3 p-4 rounded-xl text-left transition-all duration-300 ${
                        isActive
                          ? `bg-gradient-to-r ${item.gradient} text-white font-bold shadow-lg`
                          : "text-teal-200/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-white" : ""}`} />
                      <span className="text-sm">{item.title}</span>
                    </button>
                  );
                })}
              </div>

              {/* Content Panel */}
              <div className="bg-[#0b1717] rounded-xl p-6 md:p-8 border border-white/5 relative overflow-hidden min-h-[350px] flex flex-col justify-center">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${activeData.gradient} text-white text-xs font-bold uppercase tracking-wider mb-4 opacity-80`}>
                        {activeData.title}
                      </span>
                      <h4 className="text-2xl font-bold text-white mb-4 leading-tight">
                        {activeData.sub}
                      </h4>
                      <p className="text-teal-100/80 leading-relaxed text-sm">
                        {activeData.text}
                      </p>
                    </div>

                    <div className="mt-auto">
                      <h5 className="font-semibold text-white text-sm mb-4 uppercase tracking-wider opacity-60">Tácticas Clave</h5>
                      <div className="grid gap-3">
                        {activeData.tactics.map((t, i) => (
                          <div key={i} className="flex items-start gap-3 bg-white/5 rounded-lg p-3 border border-white/5">
                            <ActiveIcon className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                            <span className="text-teal-100/90 text-sm leading-relaxed">{t}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                
                {/* Background active icon watermark */}
                <ActiveIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-white/[0.02] pointer-events-none" />
              </div>

            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
