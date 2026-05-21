"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import {
  Smartphone,
  Globe,
  MessageSquare,
  Mail,
  QrCode,
  Users2,
  Tv,
  Percent,
  HeartHandshake,
  UserCheck,
  Send,
  ArrowRight,
  Sparkles
} from "lucide-react";

type CimCategory = "publicidad" | "promocion" | "relaciones" | "ventas" | "directo";

const userFlowSteps = [
  {
    icon: Smartphone,
    title: "1. Descubrimiento",
    desc: "El cliente ve un video dinámico o un anuncio en Instagram o TikTok que conecta con el amor por su mascota.",
    accent: "text-rose-400"
  },
  {
    icon: Globe,
    title: "2. Registro Web",
    desc: "Entra a la página web y crea el perfil digital detallando tipo de pelaje, edad y necesidades especiales de su mascota.",
    accent: "text-teal-400"
  },
  {
    icon: MessageSquare,
    title: "3. Asesoría Directa",
    desc: "Resuelve sus dudas e inquietudes médicas o de empaque chateando con un 'Asesor de Bienestar' en WhatsApp.",
    accent: "text-emerald-400"
  },
  {
    icon: UserCheck,
    title: "4. Compra Premium",
    desc: "Adquiere el kit personalizado que el algoritmo de TAOP generó idealmente para su mascota.",
    accent: "text-amber-400"
  },
  {
    icon: Mail,
    title: "5. Fidelización",
    desc: "Recibe recordatorios automáticos de recompra por correo cuando sus productos están por agotarse.",
    accent: "text-purple-400"
  }
];

const omniChannels = [
  {
    icon: Globe,
    title: "Página Web Oficial",
    desc: "Eje central del ecosistema. Los usuarios registran los datos clave de la mascota (tipo de pelaje, sensibilidad, tamaño, edad, alergias) para recibir recomendaciones algorítmicas, comprar y rastrear pedidos."
  },
  {
    icon: Smartphone,
    title: "Redes Sociales",
    desc: "Instagram, TikTok y Facebook actúan como canales de atracción. Comparten testimonios, videos dinámicos de mascotas y contenido educativo para derivar tráfico calificado a la página web."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    desc: "Canal de atención personalizada instantánea. Los asesores guían la compra, informan sobre envíos y recomiendan kits específicos según la raza o patología especial de la mascota."
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    desc: "Estrategias de email marketing adaptadas. Incluye ofertas personalizadas basadas en el perfil de la mascota y alertas amigables para recompra de productos cuando se estén acabando."
  },
  {
    icon: QrCode,
    title: "Eventos y Ferias",
    desc: "Puntos de contacto físico. Participación en ferias pet-friendly donde las personas escanean códigos QR para registrar a su mascota e interactuar directamente con los kits."
  },
  {
    icon: Users2,
    title: "Influencers Aliados",
    desc: "Colaboración con creadores de contenido del sector veterinario y bienestar animal para demostrar la veracidad de la personalización de los kits físicos."
  }
];

const cimData: Record<
  CimCategory,
  {
    title: string;
    sub: string;
    icon: typeof Tv;
    gradient: string;
    text: string;
    tactics: string[];
  }
> = {
  publicidad: {
    title: "Publicidad",
    sub: "Creativa, Emocional y de Impacto",
    icon: Tv,
    gradient: "from-teal-500 to-teal-600",
    text: "Uso estratégico de Instagram, TikTok y Facebook con anuncios que tocan fibras emocionales al mostrar mascotas reales. Explicamos cómo el algoritmo de TAOP selecciona componentes según tipo de pelaje, sensibilidad, edad, tamaño y dieta.",
    tactics: [
      "Videos demostrativos de mascotas reales usando el kit.",
      "Anuncios sobre la personalización del algoritmo.",
      "Contenido enfocado en dueños que consideran a las mascotas familia."
    ]
  },
  promocion: {
    title: "Promoción de Ventas",
    sub: "Incentivo inmediato y conversión",
    icon: Percent,
    gradient: "from-amber-500 to-amber-600",
    text: "Diseñamos mecánicas que invitan a la acción inmediata y aseguran la recopilación de datos de la mascota para brindar un servicio personalizado de alta calidad.",
    tactics: [
      "15% de descuento en el primer kit al completar el perfil detallado.",
      "Envíos gratis en compras superiores a montos específicos.",
      "Descuentos cruzados y promociones en fechas especiales de mascotas.",
      "Puntos acumulables para compras y recompensas de recompra."
    ]
  },
  relaciones: {
    title: "Relaciones Públicas",
    sub: "Credibilidad y Confianza Social",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-rose-600",
    text: "Construimos reputación de marca a través del valor social y el respaldo científico, posicionándonos como defensores del bienestar y cuidado animal responsable.",
    tactics: [
      "Alianzas activas con refugios de mascotas y campañas de adopción.",
      "Validación en blogs de tecnología, emprendimiento e innovación.",
      "Difusión de manuales educativos validados por médicos veterinarios."
    ]
  },
  ventas: {
    title: "Ventas Personales",
    sub: "El factor humano en cada contacto",
    icon: Users2,
    gradient: "from-emerald-500 to-emerald-600",
    text: "Aunque la compra es digital, el cliente nunca está solo. Implementamos asesores presenciales y virtuales con amplio conocimiento en bienestar animal.",
    tactics: [
      "Atención y soporte humano directo vía WhatsApp y redes sociales.",
      "'Asesores de Bienestar' interactuando en ferias y eventos físicos.",
      "Recomendación en tiempo real para mascotas con patologías específicas."
    ]
  },
  directo: {
    title: "Marketing Directo",
    sub: "Relaciones directas a largo plazo",
    icon: Send,
    gradient: "from-purple-500 to-purple-600",
    text: "Mantenemos un canal de comunicación directo con cada cliente gracias a los datos recopilados de su mascota en nuestro portal web.",
    tactics: [
      "Correos electrónicos personalizados según la edad/raza de la mascota.",
      "Recordatorios de recompra justo antes de que se agoten los productos.",
      "Alertas con ofertas en el mes del cumpleaños de la mascota."
    ]
  }
};

export default function OmnicanalidadSection() {
  const [activeCim, setActiveCim] = useState<CimCategory>("publicidad");

  return (
    <section id="cim" className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#0b1b1b] to-[#0c1a1a] dot-pattern">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Estrategia de Mercado
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Omnicanalidad & Estrategia CIM
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Conectamos todos los canales físicos y digitales bajo un mismo ecosistema (CIM) para asegurar un mensaje unificado, emocional y altamente personalizado.
            </p>
          </div>
        </FadeIn>

        {/* User Flow Journey */}
        <div className="mb-24">
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-10 text-center flex items-center justify-center gap-2">
              <Sparkles className="w-6 h-6 text-amber-400 animate-pulse" />
              El Viaje Omnicanal del Cliente
            </h3>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {/* Visual connector lines between columns (hidden on mobile) */}
            <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-teal-500/25 via-amber-500/25 to-teal-500/25 z-0" />

            {userFlowSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <ScaleIn key={step.title} delay={idx * 0.15}>
                  <div className="relative z-10 bg-[#0e2121]/60 border border-white/5 hover:border-teal-500/30 rounded-2xl p-6 text-center hover:bg-[#122b2b]/80 transition-all duration-300 h-full flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-2xl bg-[#142e2e] border border-white/10 flex items-center justify-center mb-4 ${step.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white text-base mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-teal-200/60 text-xs leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </ScaleIn>
              );
            })}
          </div>
        </div>

        {/* Grid: Omnicanal Channels */}
        <div className="mb-24">
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-10 text-center">
              Nuestros Canales Integrados
            </h3>
          </FadeIn>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {omniChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <ScaleIn key={channel.title} delay={i * 0.08}>
                  <div className="glass-card-strong rounded-2xl p-6 hover:border-teal-400/35 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <h4 className="font-bold text-white text-base">{channel.title}</h4>
                    </div>
                    <p className="text-teal-200/60 text-xs leading-relaxed">{channel.desc}</p>
                  </div>
                </ScaleIn>
              );
            })}
          </div>
        </div>

        {/* CIM Interactive Tabs */}
        <div>
          <FadeIn>
            <h3 className="text-2xl font-bold text-white mb-10 text-center">
              Mezcla de Comunicación Integrada de Marketing (CIM)
            </h3>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* Left selector column */}
            <div className="lg:col-span-4 space-y-3">
              {(Object.keys(cimData) as CimCategory[]).map((key) => {
                const item = cimData[key];
                const Icon = item.icon;
                const isActive = activeCim === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveCim(key)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl font-semibold text-left transition-all duration-300 border ${isActive
                        ? `bg-gradient-to-r ${item.gradient} border-transparent text-white shadow-lg shadow-black/25`
                        : "glass-card border-white/5 text-teal-200/70 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-white/20' : 'bg-teal-500/10'}`}>
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-teal-400'}`} />
                    </div>
                    <div>
                      <span className="block text-sm font-bold leading-tight">{item.title}</span>
                      <span className={`text-[10px] uppercase tracking-wider font-semibold ${isActive ? 'text-white/80' : 'text-teal-200/40'}`}>
                        {item.sub}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right details column */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCim}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className="glass-card-strong rounded-3xl p-8 border border-white/5 min-h-[380px] flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold px-3 py-1 rounded bg-teal-500/10 text-teal-300 uppercase tracking-widest mb-4 inline-block">
                      {cimData[activeCim].title} • Estrategia Central
                    </span>
                    <p className="text-teal-100/90 text-base leading-relaxed mb-8">
                      {cimData[activeCim].text}
                    </p>
                  </div>

                  <div className="border-t border-white/5 pt-6">
                    <h4 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-amber-400" />
                      Tácticas y Canales de Ejecución
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {cimData[activeCim].tactics.map((tactic, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-teal-200/60 leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                          <span>{tactic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
