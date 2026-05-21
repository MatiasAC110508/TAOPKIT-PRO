"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { Target, TrendingUp, Megaphone } from "lucide-react";

const metas = [
  {
    id: 1,
    titulo: "Meta 1",
    desc: "Aumentar en un 40% el reconocimiento de TAOP KIT PRO en estudiantes y familias dueñas de mascotas durante los próximos 6 meses.",
    tacticas: [
      "Publicar contenido educativo en redes sociales tres veces por semana.",
      "Compartir testimonios y experiencias reales de clientes.",
      "Realizar alianzas con veterinarias y tiendas para mascotas.",
    ],
    color: "from-teal-500 to-teal-600",
    iconColor: "text-teal-400",
    borderColor: "hover:border-teal-400/40",
  },
  {
    id: 2,
    titulo: "Meta 2",
    desc: "Incrementar en un 25% las ventas de kits personalizados a través de la página web durante los próximos 8 meses.",
    tacticas: [
      "Crear promociones y descuentos para nuevos clientes.",
      "Diseñar kits según las necesidades de cada mascota.",
      "Facilitar el proceso de compra y pagos en la página web.",
    ],
    color: "from-amber-500 to-amber-600",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-400/40",
  },
  {
    id: 3,
    titulo: "Meta 3",
    desc: "Lograr que el 80% de los clientes se sientan satisfechos con el servicio y vuelvan a comprar durante los próximos 12 meses.",
    tacticas: [
      "Ofrecer asesoría personalizada antes y después de la compra.",
      "Realizar seguimiento a la experiencia de los clientes.",
      "Implementar recompensas y descuentos para clientes frecuentes.",
    ],
    color: "from-coral-400 to-coral-500",
    iconColor: "text-coral-400",
    borderColor: "hover:border-coral-400/40",
  },
];

export default function ObjetivoSection() {
  return (
    <section
      id="objetivo"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#0e2020] to-[#0c1a1a]"
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

        {/* Objetivo principal */}
        <FadeIn delay={0.1}>
          <div className="glass-card rounded-2xl p-8 mb-16 max-w-4xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-amber-400 flex items-center justify-center mx-auto mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">
              Objetivo General
            </h3>
            <p className="text-teal-100/80 text-lg leading-relaxed">
              <strong className="text-white font-medium">Mejorar el cuidado y la organización</strong> de las mascotas mediante kits
              personalizados e información confiable desde nuestra plataforma digital. 
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

        {/* Metas */}
        <div className="grid md:grid-cols-3 gap-8">
          {metas.map((meta, i) => (
            <FadeIn key={meta.id} delay={i * 0.15}>
              <div
                className={`glass-card-strong rounded-2xl p-8 ${meta.borderColor} transition-all duration-300 hover:-translate-y-2 h-full flex flex-col`}
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${meta.color} flex items-center justify-center mb-4`}
                >
                  {meta.id === 1 && (
                    <Megaphone className="w-6 h-6 text-white" />
                  )}
                  {meta.id === 2 && (
                    <TrendingUp className="w-6 h-6 text-white" />
                  )}
                  {meta.id === 3 && (
                    <Target className="w-6 h-6 text-white" />
                  )}
                </div>
                <h4 className="text-lg font-bold text-white mb-3">
                  {meta.titulo}
                </h4>
                <p className="text-teal-100/70 mb-6 text-sm leading-relaxed">
                  {meta.desc}
                </p>
                <div className="mt-auto">
                  <h5
                    className={`font-semibold ${meta.iconColor} text-sm mb-3`}
                  >
                    Tácticas
                  </h5>
                  <StaggerContainer className="space-y-2">
                    {meta.tacticas.map((t, j) => (
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
