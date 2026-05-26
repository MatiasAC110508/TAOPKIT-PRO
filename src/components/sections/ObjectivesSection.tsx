"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { Target, TrendingUp, Megaphone } from "lucide-react";
import { organizationalGoals } from "../../data/objectives";

export default function ObjectivesSection() {
  return (
    <section
      id="objectives"
      className="relative isolate py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0c1a1a] via-[#0e2020] to-[#0c1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Objetivos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Objetivo y Metas
            </h2>
          </div>
        </FadeIn>

        {/* Main Objective */}
        <FadeIn delay={0.1}>
          <div className="glass-card mobile-safe-card rounded-2xl p-6 md:p-8 mb-16 max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-amber-400 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Objetivo General
            </h3>
            <p className="text-teal-100/80 text-lg leading-relaxed">
              <strong className="text-white font-medium">Mejorar el cuidado y la organización</strong> de las mascotas mediante kits
              personalizados e información confiable desde la página web. 
              <br /><br />
              <span className="inline-block px-4 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-sm font-bold border border-teal-500/30">
                Meta Principal:
              </span>
              <span className="block mt-2 text-white font-medium text-xl">
                Aumentar en un <span className="text-amber-400">30%</span> los clientes de TAOP KIT PRO 
                durante los próximos 12 meses.
              </span>
            </p>
          </div>
        </FadeIn>

        {/* Specific Goals */}
        <div className="grid md:grid-cols-3 gap-8">
          {organizationalGoals.map((goal, i) => (
            <FadeIn key={goal.id} delay={i * 0.15}>
              <div
                className={`glass-card-strong mobile-safe-card rounded-2xl p-6 md:p-8 ${goal.borderColor} transition-all duration-300 md:hover:-translate-y-2 h-full flex flex-col`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${goal.color} flex items-center justify-center mb-4`}
                >
                  {goal.id === 1 && (
                    <Megaphone className="w-6 h-6 text-white" />
                  )}
                  {goal.id === 2 && (
                    <TrendingUp className="w-6 h-6 text-white" />
                  )}
                  {goal.id === 3 && (
                    <Target className="w-6 h-6 text-white" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {goal.title}
                </h4>
                <p className="text-teal-100/70 mb-6 text-sm leading-relaxed">
                  {goal.desc}
                </p>
                <div className="mt-auto">
                  <h5
                    className={`font-semibold ${goal.iconColor} text-sm mb-3`}
                  >
                    Tácticas
                  </h5>
                  <StaggerContainer className="space-y-2">
                    {goal.tactics.map((t, j) => (
                      <StaggerItem key={j}>
                        <div className="flex items-start gap-2">
                          <span className="text-xs font-bold text-white/40 mt-0.5 shrink-0">
                            {j + 1}.
                          </span>
                          <span className="text-teal-100/60 text-sm">
                            {t}
                          </span>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
}
