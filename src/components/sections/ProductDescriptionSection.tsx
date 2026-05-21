"use client";

import Image from "next/image";
import { FadeIn } from "../Animations";
import { productHighlights } from "../../data/product";

export default function ProductDescriptionSection() {
  return (
    <section id="description" className="relative py-28 px-6 dot-pattern">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Descripción
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              ¿Qué es TAOP KIT PRO?
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <FadeIn direction="left">
            <div className="space-y-6 text-teal-100/80 leading-relaxed text-lg">
              <p>
                <strong className="text-white font-semibold">TAOP KIT PRO</strong> es una <span className="text-teal-300 font-medium">solución integral</span> para el cuidado de las
                mascotas que combina productos personalizados, asesoría confiable
                y organización en un solo sistema. 
                <br /><br />
                Su objetivo principal no es
                únicamente vender productos, sino <strong className="text-amber-300 font-medium">facilitarles la vida</strong> a los
                dueños de mascotas, especialmente a quienes tienen poco tiempo o
                dificultades para encontrar información clara y efectiva sobre el
                cuidado animal.
              </p>
              <div className="pl-4 border-l-2 border-teal-500/50 my-6">
                <p className="text-white/90 text-base italic">
                  &ldquo;Nos destacamos por ofrecer información respaldada por veterinarios y expertos,
                  generando mayor confianza y seguridad en cada uso.&rdquo;
                </p>
              </div>
              <p>
                Cada kit incluye
                instrucciones claras y recomendaciones que ayudan a mejorar las
                rutinas de cuidado y promueven un manejo más responsable. Además, 
                incorpora elementos innovadores como <span className="text-amber-300 font-medium">recompensas, retos y
                seguimiento</span> del bienestar de tu mascota, haciendo que la
                experiencia sea mucho más <span className="text-coral-400 font-medium">dinámica y motivadora</span>.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-500/20 to-amber-400/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-60 group-hover:opacity-100" />
              <div className="relative rounded-2xl overflow-hidden glow-teal">
                <Image
                  src="/product-kit.png"
                  alt="TAOP KIT PRO - Kit de cuidado para mascotas"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Highlight cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productHighlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="glass-card-strong rounded-2xl p-6 hover:border-teal-400/40 transition-all duration-300 group hover:-translate-y-1 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500/20 to-teal-400/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-teal-200/60 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
