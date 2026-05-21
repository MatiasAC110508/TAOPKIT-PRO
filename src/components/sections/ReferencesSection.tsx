"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { BookOpen, ExternalLink, Link2 } from "lucide-react";
import { projectReferences } from "../../data/references";

export default function ReferencesSection() {
  return (
    <section id="references" className="relative py-28 px-6 bg-[#091515] border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block p-3 rounded-2xl bg-teal-500/10 mb-6">
              <BookOpen className="w-8 h-8 text-teal-400" />
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Referencias y Bibliografía
            </h2>
            <p className="text-teal-100/60 text-sm">
              Fuentes académicas e institucionales consultadas para la investigación y estructuración del proyecto.
            </p>
          </div>
        </FadeIn>

        <div className="glass-card-strong rounded-3xl p-6 md:p-10 border border-white/5">
          <StaggerContainer className="space-y-4">
            {projectReferences.map((ref, i) => (
              <StaggerItem key={i}>
                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200 group">
                  <div className="mt-1">
                    {ref.href ? (
                      <Link2 className="w-5 h-5 text-teal-400/50 group-hover:text-teal-400 transition-colors" />
                    ) : (
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-teal-100/50">
                        {i + 1}
                      </span>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-teal-100/70 text-sm leading-relaxed mb-2">
                      {ref.text}
                    </p>
                    {ref.href && (
                      <a
                        href={ref.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-amber-400/80 hover:text-amber-400 transition-colors font-medium"
                      >
                        Consultar fuente
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
