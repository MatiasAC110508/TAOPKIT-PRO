"use client";

import Image from "next/image";
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "../Animations";
import {
  Layers,
  Heart,
  Box,
  Star,
  Sparkles,
  ShieldCheck,
  Truck,
  Users,
  Clock,
  CheckCircle2,
} from "lucide-react";

const productosIncluidos = [
  "Champú",
  "Acondicionador",
  "Loción",
  "Talco",
  "Baño en seco",
  "Crema dental",
  "Cepillo de dientes",
];

const serviciosPrincipales = [
  "Higiene corporal de la mascota.",
  "Cuidado del pelaje.",
  "Limpieza y salud oral.",
  "Organización de productos en un solo kit.",
  "Fácil transporte para viajes y salidas.",
];

const caracteristicas = [
  "Productos seguros para mascotas.",
  "Diseño práctico y fácil de usar.",
  "Ahorro de tiempo para el dueño.",
  "Experiencia cómoda y organizada.",
  "Productos funcionales y de calidad.",
];

const diferenciadores = [
  {
    icon: Truck,
    text: "Su diseño compacto y fácil de transportar.",
  },
  {
    icon: Star,
    text: "Ser ideal para viajes, vacaciones o emergencias.",
  },
  {
    icon: Users,
    text: "Permitir personalización según el tipo de mascota y sus necesidades.",
  },
  {
    icon: Sparkles,
    text: "Ofrecer una experiencia práctica y organizada.",
  },
];

const experiencia = [
  "Ahorro de tiempo.",
  "Practicidad.",
  "Organización.",
  "Tranquilidad en el cuidado de su mascota.",
];

const nivelesResumen = [
  {
    nivel: "Producto Básico",
    desc: "Bienestar, higiene y salud de la mascota.",
    icon: Heart,
    color: "from-teal-500 to-teal-600",
  },
  {
    nivel: "Producto Real",
    desc: "Kit completo de productos de higiene y cuidado.",
    icon: Box,
    color: "from-amber-500 to-amber-600",
  },
  {
    nivel: "Producto Aumentado",
    desc: "Comodidad, ahorro de tiempo y experiencia premium.",
    icon: Star,
    color: "from-coral-400 to-coral-500",
  },
];

export default function NivelesSection() {
  return (
    <section id="niveles" className="relative py-28 px-6 dot-pattern">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Niveles del Producto
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              TAOP KIT PRO
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
              <strong className="text-white">TAOP KIT PRO</strong> nace con un propósito claro: <span className="text-teal-300 font-medium">facilitar la vida</span> de los
              dueños de mascotas que buscan productos de higiene de primera
              calidad, pero que muchas veces no cuentan con el tiempo suficiente
              para buscar cada producto por separado.
            </p>
            <div className="inline-block mt-6 px-6 py-3 rounded-2xl glass-card-strong border border-amber-500/20">
              <p className="text-white/90 max-w-2xl mx-auto">
                Nuestro kit reúne todo lo necesario en un <span className="text-amber-300 font-semibold">paquete práctico, moderno y fácil de transportar</span>, 
                ofreciendo comodidad inmediata y ahorro de tiempo sin descuidar el bienestar de tu mascota.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Producto Básico */}
        <div className="mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Producto Básico — Necesidad a Satisfacer
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card-strong rounded-2xl p-8 mb-8">
              <p className="text-teal-100/80 text-lg mb-6">
                El principal beneficio de TAOP KIT PRO es satisfacer la
                necesidad de higiene, bienestar y salud de las mascotas. El
                producto ayuda a:
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Mantener limpia a la mascota.",
                  "Controlar olores.",
                  "Mejorar la convivencia dentro del hogar.",
                  "Facilitar el cuidado diario del animal.",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0" />
                    <span className="text-teal-100/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Producto Real */}
        <div className="mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                <Box className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Producto Real
              </h3>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8">
            <FadeIn direction="left" delay={0.1}>
              <div className="glass-card-strong rounded-2xl p-8 h-full">
                <p className="text-teal-100/80 mb-6">
                  TAOP KIT PRO es un kit de higiene para mascotas que incluye
                  diferentes productos esenciales para su cuidado.
                </p>
                <h4 className="font-bold text-amber-300 mb-4">
                  Productos incluidos
                </h4>
                <StaggerContainer className="space-y-2">
                  {productosIncluidos.map((p) => (
                    <StaggerItem key={p}>
                      <div className="flex items-center gap-3 py-1">
                        <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                        <span className="text-teal-100/70">{p}</span>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
                <p className="text-teal-100/50 text-sm mt-4 italic">
                  Todo se entrega en un empaque práctico, resistente y fácil de
                  transportar.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.2}>
              <div className="relative group h-full">
                <div className="absolute -inset-3 bg-gradient-to-r from-amber-400/20 to-teal-400/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative rounded-2xl overflow-hidden h-full">
                  <Image
                    src="/products-flatlay.png"
                    alt="Productos incluidos en TAOP KIT PRO"
                    width={600}
                    height={500}
                    className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Servicios y Características */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <FadeIn direction="left">
            <div className="glass-card-strong rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="w-6 h-6 text-teal-400" />
                <h4 className="text-xl font-bold text-white">
                  Servicios Principales
                </h4>
              </div>
              <div className="space-y-3">
                {serviciosPrincipales.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 mt-1 shrink-0" />
                    <span className="text-teal-100/70 text-sm">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card-strong rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-6 h-6 text-amber-400" />
                <h4 className="text-xl font-bold text-white">
                  Características del Servicio
                </h4>
              </div>
              <div className="space-y-3">
                {caracteristicas.map((c) => (
                  <div key={c} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 mt-1 shrink-0" />
                    <span className="text-teal-100/70 text-sm">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Producto Aumentado */}
        <div className="mb-20">
          <FadeIn>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral-400 to-coral-500 flex items-center justify-center">
                <Star className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Producto Aumentado
              </h3>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="glass-card-strong rounded-2xl p-8 mb-8">
              <p className="text-teal-100/80 text-lg mb-4">
                TAOP KIT PRO no solo ofrece productos de higiene, sino también
                comodidad y facilidad para los dueños de mascotas. El cliente
                evita buscar productos individualmente y obtiene una solución
                completa en un solo lugar.
              </p>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {diferenciadores.map((d, i) => (
              <ScaleIn key={d.text} delay={i * 0.1}>
                <div className="glass-card rounded-2xl p-6 text-center hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-1 h-full">
                  <d.icon className="w-8 h-8 text-teal-400 mx-auto mb-3" />
                  <p className="text-teal-100/70 text-sm">{d.text}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>

        {/* Experiencia del Cliente */}
        <FadeIn>
          <div className="glass-card rounded-2xl p-8 mb-16 text-center max-w-3xl mx-auto">
            <Clock className="w-10 h-10 text-amber-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-4">
              Experiencia del Cliente
            </h4>
            <p className="text-teal-100/70 mb-6">
              El cliente vive una experiencia cómoda y sin complicaciones. Desde
              el momento en que recibe el kit hasta el uso de los productos,
              percibe:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {experiencia.map((e) => (
                <span
                  key={e}
                  className="px-4 py-2 rounded-full glass-card-strong text-teal-200 text-sm font-medium"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Resumen de Niveles */}
        <FadeIn>
          <h3 className="text-2xl font-bold text-center text-white mb-8">
            Resumen de los Niveles del Producto
          </h3>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {nivelesResumen.map((n, i) => (
            <ScaleIn key={n.nivel} delay={i * 0.15}>
              <div className="glass-card-strong rounded-2xl p-8 text-center hover:border-teal-400/30 transition-all duration-300 hover:-translate-y-2 h-full">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${n.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <n.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="font-bold text-white text-lg mb-2">
                  {n.nivel}
                </h4>
                <p className="text-teal-100/60 text-sm">{n.desc}</p>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* Conclusión */}
        <FadeIn delay={0.3}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Conclusión
            </h3>
            <p className="text-teal-100/70 text-lg leading-relaxed">
              TAOP KIT PRO es una propuesta innovadora que facilita el cuidado
              de las mascotas mediante un kit completo, práctico y funcional.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
