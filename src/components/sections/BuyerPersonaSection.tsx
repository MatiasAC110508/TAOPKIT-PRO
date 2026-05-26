"use client";

import { FadeIn } from "../Animations";
import { Target, TrendingUp, Users, HeartHandshake, Download } from "lucide-react";

export default function BuyerPersonaSection() {
  return (
    <section id="comprador" className="relative py-28 px-6 bg-[#071414] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 p-2 px-4 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 text-sm font-semibold text-purple-400 mb-6">
              <Users className="w-4 h-4" />
              Perfil del Cliente Ideal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Comprador
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-col gap-8 items-stretch">
          <FadeIn className="w-full">
            <div className="glass-card-strong rounded-3xl p-6 md:p-8 border border-white/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-purple-400" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-white">Objetivo</h4>
              </div>
              <p className="text-teal-100/80 leading-relaxed text-lg">
                Mejorar el cuidado y la organización de las mascotas mediante kits personalizados e información confiable desde la página web, aumentando en un 30% los clientes de TAOP KIT PRO durante los próximos 12 meses.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} className="w-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  src: "/buyer.jpg",
                  alt: "Perfil de Buyer Persona - Parte 1",
                  downloadName: "Buyer_Persona_1.jpg",
                  label: "Descargar",
                },
                {
                  src: "/buyerimg2.jpeg",
                  alt: "Perfil de Buyer Persona - Parte 2",
                  downloadName: "Buyer_Persona_2.jpeg",
                  label: "Descargar",
                },
                {
                  src: "/buyerimage3.jpeg",
                  alt: "Perfil de Buyer Persona - Parte 3",
                  downloadName: "Buyer_Persona_3.jpeg",
                  label: "Descargar",
                },
              ].map((img, index) => (
                <div key={index} className="glass-card rounded-3xl p-5 md:p-6 border border-white/10 flex flex-col items-center h-full">
                  <div className="w-full rounded-2xl overflow-hidden mb-6 border border-white/5 bg-black/20 flex-1 flex items-center justify-center">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto max-h-[400px] object-contain hover:scale-[1.02] transition-transform duration-500 ease-in-out"
                    />
                  </div>
                  <a
                    href={img.src}
                    download={img.downloadName}
                    className="inline-flex items-center gap-2 px-6 py-3 w-full justify-center bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-400 hover:to-pink-400 text-white font-semibold rounded-full transition-all shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)] hover:-translate-y-0.5 text-sm"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>{img.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1 mt-4">
            <FadeIn delay={0.2} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 mb-6">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 1</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Aumentar en un 40% el reconocimiento de TAOP KIT PRO en estudiantes y familias dueñas de mascotas durante los próximos 6 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Publicar contenido educativo en redes sociales tres veces por semana durante los próximos 6 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Compartir testimonios y experiencias reales de clientes dos veces al mes durante 6 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-blue-400 shrink-0 mt-0.5">•</span>
                      <span>Realizar alianzas con veterinarias y tiendas para mascotas durante los próximos 4 meses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 2</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Incrementar en un 25% las ventas de kits personalizados a través de la página web durante los próximos 8 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Crear promociones y descuentos para nuevos clientes cada mes durante los próximos 8 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Diseñar kits personalizados según las necesidades de cada mascota durante todo el proceso de venta en los próximos 8 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-emerald-400 shrink-0 mt-0.5">•</span>
                      <span>Optimizar el proceso de compra y pagos en la página web durante los primeros 3 meses del proyecto.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4} className="h-full">
              <div className="glass-card rounded-3xl p-6 md:p-8 h-full border border-white/5 flex flex-col">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-400 mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h5 className="text-xl font-bold text-white mb-4">Meta 3</h5>
                <p className="text-teal-100/90 font-semibold mb-6">
                  Lograr que el 80% de los clientes se sientan satisfechos con el servicio y vuelvan a comprar durante los próximos 12 meses.
                </p>
                <div className="mt-auto pt-6 border-t border-white/10">
                  <h6 className="text-sm uppercase tracking-wider text-teal-100/50 mb-4 font-semibold">Tácticas</h6>
                  <ul className="space-y-3 text-sm text-teal-100/70">
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Ofrecer asesoría personalizada antes y después de cada compra durante los próximos 12 meses.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Realizar seguimiento a la experiencia de los clientes una semana después de cada compra durante el próximo año.</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-amber-400 shrink-0 mt-0.5">•</span>
                      <span>Implementar recompensas y descuentos para clientes frecuentes a partir del tercer mes del proyecto y mantenerlas durante los 12 meses.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
