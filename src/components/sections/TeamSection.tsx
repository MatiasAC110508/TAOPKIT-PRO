"use client";

import Image from "next/image";
import { FadeIn, ScaleIn } from "../Animations";
import { Target } from "lucide-react";
import { teamMembers } from "../../data/team";

export default function TeamSection() {
  return (
    <section id="team" className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#091212]/50 dot-pattern">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-12 md:mb-20">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              ¿Quiénes somos?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
              El Equipo de TAOP KIT PRO
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-sm md:text-lg leading-relaxed">
              Somos estudiantes de la{" "}
              <strong className="text-white font-semibold">
                Institución Universitaria de Envigado (IUE)
              </strong>
              , unidos por un proyecto académico de mercadeo enfocado en crear una
              solución práctica, organizada y confiable para el cuidado de mascotas.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
          {teamMembers.map((member, i) => {
            const Icon = member.icon;
            return (
              <ScaleIn key={member.name} delay={i * 0.15}>
                <div
                  className={`glass-card-strong render-layer rounded-2xl md:rounded-3xl p-4 sm:p-6 border ${member.border} md:hover:scale-[1.02] transition-all duration-300 h-full flex flex-col overflow-hidden`}
                >
                  <div className="relative mb-6">
                    <div className="relative aspect-[16/11] md:aspect-[4/5] w-full overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-teal-950/30">
                      <Image
                        src={member.image}
                        alt={`Foto de ${member.name}`}
                        fill
                        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                        quality={88}
                        className="object-cover transition-transform duration-700 md:hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#071414]/90 to-transparent" />
                    </div>
                    <div className={`absolute -bottom-4 left-4 w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center border border-white/10 md:backdrop-blur-xl shadow-lg`}>
                      <Icon className={`w-5 h-5 md:w-6 md:h-6 ${member.accent}`} />
                    </div>
                  </div>

                  {/* Header profile */}
                  <div className="mb-5 md:mb-6 pt-1 md:pt-2">
                    <h3 className="font-bold text-white text-base md:text-lg leading-tight">
                      {member.name}
                    </h3>
                    <p className={`text-xs font-semibold ${member.accent} mt-1`}>
                      {member.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-teal-100/70 text-sm leading-relaxed mb-5 md:mb-6 flex-grow">
                    {member.description}
                  </p>

                  {/* Goals */}
                  <div className="mt-auto border-t border-white/5 pt-5 md:pt-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Target className={`w-4 h-4 ${member.accent}`} />
                      <span className="text-white font-bold text-xs uppercase tracking-wider">
                        Objetivos & Propósitos
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {member.goals.map((goal, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-teal-200/60 leading-relaxed">
                          <span className={`w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 shrink-0`} />
                          <span>{goal}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScaleIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
