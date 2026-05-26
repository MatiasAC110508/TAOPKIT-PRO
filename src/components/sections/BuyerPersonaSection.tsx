"use client";

import { FadeIn } from "../Animations";
import { UserCircle2, Heart, Clock, DollarSign, BookOpen, Target } from "lucide-react";

export default function BuyerPersonaSection() {
  return (
    <section id="buyer-persona" className="relative py-28 px-6 bg-[#071414] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold text-purple-400 mb-6">
              <UserCircle2 className="w-4 h-4" />
              Perfil del Cliente Ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Buyer Persona
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
              Basado en nuestra investigación de mercado, este es el perfil representativo de nuestro cliente ideal: estudiantes y familias dueñas de mascotas que buscan soluciones personalizadas.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Avatar and Basic Info */}
          <FadeIn direction="left" className="lg:col-span-4 flex flex-col">
            <div className="glass-card-strong rounded-3xl p-8 flex-1 flex flex-col items-center text-center relative overflow-hidden border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-32 h-32 rounded-full border-4 border-purple-500/30 p-1 mb-6 relative z-10">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <UserCircle2 className="w-16 h-16 text-white" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Laura Gómez</h3>
              <p className="text-purple-300 font-medium mb-6 relative z-10">Estudiante Universitaria / Joven Profesional</p>
              
              <div className="w-full space-y-3 text-left relative z-10">
                <div className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-teal-100/60">Edad</span>
                  <span className="text-white font-semibold">22 - 30 años</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-teal-100/60">Ubicación</span>
                  <span className="text-white font-semibold">Medellín y Área Metropolitana</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-white/5 text-sm">
                  <span className="text-teal-100/60">Mascota</span>
                  <span className="text-white font-semibold">Perro/Gato (Considerado familia)</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Details */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <FadeIn direction="right" delay={0.1}>
              <div className="glass-card-strong rounded-3xl p-6 md:p-8 border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Target className="w-5 h-5 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Objetivo Principal</h4>
                </div>
                <p className="text-teal-100/80 leading-relaxed">
                  Mejorar el cuidado y la organización de sus mascotas mediante kits personalizados e información confiable desde plataformas digitales, asegurando siempre el bienestar integral de su animal de compañía sin invertir tiempo excesivo en la búsqueda de productos.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-6 flex-1">
              <FadeIn direction="right" delay={0.2} className="h-full">
                <div className="glass-card rounded-3xl p-6 h-full border border-white/5">
                  <div className="flex items-center gap-3 mb-5">
                    <Heart className="w-5 h-5 text-rose-400" />
                    <h5 className="font-bold text-white">Motivaciones</h5>
                  </div>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      Busca la mejor nutrición y cuidado para su mascota.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      Valora la conveniencia y la personalización.
                    </li>
                    <li className="flex gap-2">
                      <span className="text-rose-400">•</span>
                      Prefiere marcas responsables y transparentes.
                    </li>
                  </ul>
                </div>
              </FadeIn>

              <FadeIn direction="right" delay={0.3} className="h-full">
                <div className="glass-card rounded-3xl p-6 h-full border border-white/5">
                  <div className="flex items-center gap-3 mb-5">
                    <Target className="w-5 h-5 text-amber-400" />
                    <h5 className="font-bold text-white">Puntos de Dolor (Limitaciones)</h5>
                  </div>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <Clock className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" />
                      Falta de tiempo para buscar productos específicos.
                    </li>
                    <li className="flex gap-2">
                      <BookOpen className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" />
                      Desinformación sobre artículos realmente necesarios.
                    </li>
                    <li className="flex gap-2">
                      <DollarSign className="w-4 h-4 text-amber-500/70 shrink-0 mt-0.5" />
                      Presupuesto limitado, busca mejor relación calidad-precio.
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
