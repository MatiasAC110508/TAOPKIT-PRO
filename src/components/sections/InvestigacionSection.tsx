"use client";

import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import { Users, Clock, AlertCircle, ExternalLink, BarChart3, ShieldAlert, Sparkles } from "lucide-react";

const limitantes = [
  { label: "Tiempo para el cuidado", valor: 53, color: "bg-teal-400", bg: "bg-teal-950/50" },
  { label: "Presupuesto / Dinero", valor: 29, color: "bg-amber-400", bg: "bg-amber-950/50" },
  { label: "Información y Guía", valor: 12, color: "bg-rose-400", bg: "bg-rose-950/50" },
  { label: "Acceso a Productos", valor: 6, color: "bg-emerald-400", bg: "bg-emerald-950/50" },
];

const hallazgos = [
  {
    titulo: "Higiene y Alimentación",
    desc: "Muchos dueños batallan por mantener la constancia en el baño de su perro y en elegir alimentos/snacks saludables.",
  },
  {
    titulo: "Falta de Tiempo",
    desc: "Los estudiantes de la IUE viven horarios saturados de estudio y trabajo, lo que dificulta la búsqueda individualizada de productos.",
  },
  {
    titulo: "Desconfianza en Internet",
    desc: "El mercado digital está saturado de información falsa y productos genéricos de baja calidad que pueden dañar a las mascotas.",
  },
  {
    titulo: "Gastos Ineficientes",
    desc: "Los usuarios a menudo compran productos equivocados debido a la desinformación, resultando en pérdidas financieras y frustración.",
  },
];

export default function InvestigacionSection() {
  const formsUrl = process.env.NEXT_PUBLIC_FORMS_URL;
  const hasFormsUrl = typeof formsUrl === "string" && /^https?:\/\//.test(formsUrl);

  return (
    <section id="investigacion" className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#091515] to-[#0c1a1a] dot-pattern">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Investigación de Mercado
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              El Pulso de los Dueños de Mascotas
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Realizamos una encuesta a estudiantes universitarios de 18 a 25 años en el área metropolitana de Medellín para descubrir sus mayores retos de cuidado diario.
            </p>
          </div>
        </FadeIn>

        {/* Dashboard Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Stat summary card */}
          <div className="lg:col-span-4 flex flex-col justify-between glass-card-strong rounded-3xl p-8 border border-white/5">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-teal-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Estudio de Muestra</h3>
              <p className="text-teal-200/60 text-sm leading-relaxed mb-6">
                Encuesta digital realizada a través de Microsoft Forms enfocada en hábitos de cuidado, limitaciones financieras y necesidades no resueltas.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">17</span>
                <span className="text-lg text-teal-300 font-semibold">Participantes</span>
              </div>
              <div className="text-xs text-teal-200/40">
                Jóvenes universitarios (18 a 25 años) • Dueños de mascotas (Perros/Gatos)
              </div>
            </div>
          </div>

          {/* Limitantes - Animated Progress Bars */}
          <div className="lg:col-span-8 glass-card-strong rounded-3xl p-8 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Principales Limitaciones</h3>
                </div>
                <span className="text-xs text-amber-300 font-semibold px-2.5 py-1 rounded-full bg-amber-500/10">
                  Porcentaje de impacto
                </span>
              </div>
              <p className="text-teal-200/60 text-sm leading-relaxed mb-8">
                Al preguntar a los estudiantes cuál es su mayor obstáculo al cuidar de su mascota, la falta de tiempo dominó las respuestas, seguida por el presupuesto.
              </p>
            </div>

            <div className="space-y-6">
              {limitantes.map((limit) => (
                <div key={limit.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-white font-medium">{limit.label}</span>
                    <span className="text-teal-300 font-bold">{limit.valor}%</span>
                  </div>
                  <div className={`w-full h-3 rounded-full ${limit.bg} overflow-hidden`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${limit.valor}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full ${limit.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hallazgos principales */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <ShieldAlert className="w-6 h-6 text-rose-400" />
            <h3 className="text-2xl font-bold text-white">Hallazgos y Problemas Identificados</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hallazgos.map((item, i) => (
              <ScaleIn key={item.titulo} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 border border-white/5 hover:border-teal-500/30 transition-all duration-300 h-full">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-teal-500/10 text-teal-300 mb-4 inline-block">
                    Problema {i + 1}
                  </span>
                  <h4 className="font-bold text-white text-base mb-2">{item.titulo}</h4>
                  <p className="text-teal-200/60 text-xs leading-relaxed">{item.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Call to action forms */}
        <FadeIn>
          <div className="rounded-3xl bg-gradient-to-r from-teal-900/40 via-amber-950/20 to-teal-900/40 p-8 border border-teal-500/20 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
            <div className="space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
                <h4 className="text-white font-bold text-lg">¿Quieres revisar la base metodológica?</h4>
              </div>
              <p className="text-teal-100/70 text-sm">
                {hasFormsUrl
                  ? "Puedes acceder al formulario oficial y su análisis en Microsoft Forms."
                  : "El enlace del formulario no está disponible aquí. Puedes revisar las referencias y fuentes del estudio."}
              </p>
            </div>
            {hasFormsUrl ? (
              <a
                href={formsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold hover:from-teal-400 hover:to-teal-500 transition-all duration-200 hover:scale-105 shrink-0 text-sm shadow-md"
              >
                Ver Microsoft Forms <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <a
                href="#referencias"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-200 hover:scale-105 shrink-0 text-sm shadow-md"
              >
                Ver referencias <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
