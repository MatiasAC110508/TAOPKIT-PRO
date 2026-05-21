"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../Animations";
import { MapPin, Users, Brain, Activity, Target } from "lucide-react";

type SegTab = "geografica" | "demografica" | "psicografica" | "conductual";

const segmentacionData = {
  geografica: {
    id: "geografica",
    title: "Geográfica",
    icon: MapPin,
    gradient: "from-teal-500 to-teal-600",
    color: "text-teal-400",
    bgIcon: "bg-teal-500/10",
    content: (
      <div className="space-y-4 text-teal-100/90 text-sm md:text-base leading-relaxed">
        <p>
          La estrategia de TAOP se concentra en zonas urbanas de Antioquia caracterizadas por una alta cultura pet-friendly.
        </p>
        <div className="pt-2">
          <span className="font-bold text-white mb-2 block">Principales municipios objetivo:</span>
          <div className="flex flex-wrap gap-2">
            {["Medellín", "Envigado", "Sabaneta", "Bello", "Itagüí", "Rionegro"].map((city) => (
              <span key={city} className="px-3 py-1 rounded-full bg-teal-950/40 border border-teal-500/20 text-teal-200 text-xs font-medium">
                {city}
              </span>
            ))}
          </div>
        </div>
        <p className="pt-2">
          Estas zonas presentan un crecimiento constante en el consumo de productos para mascotas y una mayor adopción de experiencias de compra digitales.
        </p>
      </div>
    )
  },
  demografica: {
    id: "demografica",
    title: "Demográfica",
    icon: Users,
    gradient: "from-amber-500 to-amber-600",
    color: "text-amber-400",
    bgIcon: "bg-amber-500/10",
    content: (
      <div className="space-y-4 text-teal-100/90 text-sm md:text-base leading-relaxed">
        <p>
          Hombres y mujeres entre los <strong className="text-white">18 y 45 años</strong> de edad. Incluye personas solteras, parejas sin hijos y familias nucleares en diferentes etapas del ciclo de vida familiar.
        </p>
        <p>
          En cuanto al nivel socioeconómico, se ubican principalmente en estratos <strong className="text-white">medio-alto y alto</strong>, con ingresos estables que les permiten destinar recursos al consumo de bienes y servicios especializados.
        </p>
        <p>
          En términos de nivel educativo, se consideran individuos con formación técnica, tecnológica o profesional (en curso o finalizada). Finalmente, en cuanto a ocupación, se incluyen estudiantes universitarios, empleados del sector privado, emprendedores y trabajadores independientes.
        </p>
      </div>
    )
  },
  psicografica: {
    id: "psicografica",
    title: "Psicográfica",
    icon: Brain,
    gradient: "from-rose-500 to-rose-600",
    color: "text-rose-400",
    bgIcon: "bg-rose-500/10",
    content: (
      <div className="space-y-4 text-teal-100/90 text-sm md:text-base leading-relaxed">
        <p>
          El público objetivo se caracteriza por ser personas que sienten un <strong className="text-white">fuerte vínculo emocional</strong> con sus mascotas y las consideran parte de su familia.
        </p>
        <p>
          Tienen un estilo de vida urbano y buscan comodidad, practicidad y bienestar en su día a día. Son consumidores que <strong className="text-white">valoran la calidad por encima del precio</strong> y muestran interés por productos que mejoren la salud de sus mascotas.
        </p>
        <p>
          Prefieren opciones modernas, funcionales y personalizadas. Además, tienden a ser responsables, cuidadosos y altamente comprometidos con sus animales de compañía.
        </p>
      </div>
    )
  },
  conductual: {
    id: "conductual",
    title: "Conductual",
    icon: Activity,
    gradient: "from-indigo-500 to-indigo-600",
    color: "text-indigo-400",
    bgIcon: "bg-indigo-500/10",
    content: (
      <div className="space-y-4 text-teal-100/90 text-sm md:text-base leading-relaxed">
        <p>
          Presentan un <strong className="text-white">comportamiento de compra recurrente</strong> en productos y servicios para mascotas, con alta sensibilidad hacia los beneficios funcionales y emocionales del producto.
        </p>
        <p>
          Se identifican consumidores que buscan principalmente beneficios como bienestar, salud, higiene, entretenimiento y seguridad.
        </p>
        <p>
          Son usuarios que <strong className="text-white">tienden a informarse antes de comprar</strong>, comparan opciones y valoran recomendaciones. Además, muestran una fuerte tendencia a la fidelización cuando encuentran marcas que cumplen con sus expectativas.
        </p>
      </div>
    )
  }
};

export default function SegmentacionSection() {
  const [activeTab, setActiveTab] = useState<SegTab>("geografica");
  const activeData = segmentacionData[activeTab];
  const ActiveIcon = activeData.icon;

  return (
    <section id="segmentacion" className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#091515] to-[#0c1a1a] dot-pattern">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              <Target className="w-4 h-4" />
              Público Objetivo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Segmentación de Mercado
            </h2>
            <p className="text-teal-100/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Definimos de forma detallada a nuestro buyer persona a través de cuatro variables clave para asegurar estrategias de mercado altamente efectivas y dirigidas.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Tabs Navigation */}
          <FadeIn direction="left" className="lg:col-span-5">
            <div className="space-y-3">
              {(Object.keys(segmentacionData) as SegTab[]).map((key) => {
                const item = segmentacionData[key];
                const Icon = item.icon;
                const isActive = activeTab === key;
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`w-full flex items-center gap-4 p-4 md:p-5 rounded-2xl font-semibold text-left transition-all duration-300 border ${
                      isActive
                        ? `bg-gradient-to-r ${item.gradient} border-transparent text-white shadow-lg shadow-black/25 scale-[1.02]`
                        : "glass-card border-white/5 text-teal-200/70 hover:text-white hover:bg-white/10 hover:border-white/10"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isActive ? 'bg-white/20' : item.bgIcon}`}>
                      <Icon className={`w-6 h-6 ${isActive ? 'text-white' : item.color}`} />
                    </div>
                    <div>
                      <span className="block text-base md:text-lg font-bold leading-tight mb-1">{item.title}</span>
                      <span className={`text-xs md:text-sm ${isActive ? 'text-white/80' : 'text-teal-200/50'}`}>
                        Variable {item.title.toLowerCase()}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Tab Content Area */}
          <FadeIn direction="right" delay={0.15} className="lg:col-span-7">
            <div className="glass-card-strong rounded-3xl p-6 md:p-10 border border-white/10 min-h-[400px] flex flex-col shadow-2xl shadow-black/20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.98 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex-1 flex flex-col"
                >
                  <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
                    <div className={`w-14 h-14 rounded-2xl ${activeData.bgIcon} flex items-center justify-center shrink-0`}>
                      <ActiveIcon className={`w-7 h-7 ${activeData.color}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        {activeData.title}
                      </h3>
                      <p className="text-teal-400 font-semibold text-xs tracking-wider uppercase">
                        Detalle del perfil
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {activeData.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
