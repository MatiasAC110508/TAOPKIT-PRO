"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../Animations";
import {
  Shield,
  AlertTriangle,
  Lightbulb,
  Flame,
  ChevronDown,
} from "lucide-react";

type FodaCategory = "fortalezas" | "debilidades" | "oportunidades" | "amenazas";

const fodaData: Record<
  FodaCategory,
  { id: string; titulo: string; desc: string }[]
> = {
  fortalezas: [
    {
      id: "F1",
      titulo: 'Modelo "Todo En Uno"',
      desc: 'El modelo "Todo En Uno" integra productos, información y asesoría en una sola plataforma, eliminando la confusión del usuario y facilitando el cuidado de su mascota.',
    },
    {
      id: "F2",
      titulo: "Respaldo Profesional",
      desc: "Garantiza que la información y los productos recomendados están validados por veterinarios, lo que genera confianza en el usuario y reduce la desinformación presente en el mercado digital.",
    },
    {
      id: "F3",
      titulo: "Gamificación",
      desc: "La utilización de la App motiva al usuario a ser constante mediante dinámicas de juego que hacen más atractivo el cuidado de la mascota.",
    },
    {
      id: "F4",
      titulo: "Acompañamiento Educativo",
      desc: "Mejora el uso de los productos al enseñar cómo y por qué utilizarlos, reduciendo la falta de información del usuario.",
    },
    {
      id: "F5",
      titulo: "Personalización Real",
      desc: "El diseño de kits por parte de los mismos usuarios según sus necesidades permite ofrecer soluciones específicas para cada mascota, aumentando la efectividad frente a productos genéricos.",
    },
    {
      id: "F6",
      titulo: "Bajo Costo Tecnológico",
      desc: "El proyecto utiliza herramientas ya existentes de manera eficiente, lo que nos permite implementar el proyecto con menor inversión al usar tecnología accesible y existente.",
    },
  ],
  debilidades: [
    {
      id: "D1",
      titulo: "Dependencia Tecnológica",
      desc: "Depende del uso constante de la App y conexión a internet, lo que puede limitar su funcionamiento.",
    },
    {
      id: "D2",
      titulo: "Logística de Envíos",
      desc: "La distribución de los kits físicos implica retos en tiempos de entrega, costos y posibles fallas en el proceso, lo que puede afectar la experiencia del usuario.",
    },
    {
      id: "D3",
      titulo: "Costos de Personalización",
      desc: "Diseñar kits específicos para cada mascota incrementa los costos operativos, lo que puede elevar el precio final y limitar el acceso para el público objetivo.",
    },
    {
      id: "D4",
      titulo: "Marca Nueva",
      desc: "Al no contar con reconocimiento ni trayectoria en el mercado, puede generar desconfianza en los usuarios y dificultar la captación de clientes en sus primeras etapas.",
    },
    {
      id: "D5",
      titulo: "Recursos Limitados",
      desc: "Al contar con un presupuesto reducido, se dificulta la inversión en marketing, desarrollo y expansión, lo que puede limitar el crecimiento del proyecto.",
    },
    {
      id: "D6",
      titulo: "Dependencia de Terceros",
      desc: "Depender de un tercero puede ocasionar problemas de disponibilidad, retrasos en la entrega y pérdida de control sobre la calidad del producto.",
    },
  ],
  oportunidades: [
    {
      id: "O1",
      titulo: "Segmento Desatendido",
      desc: "Existe un grupo de usuarios, especialmente estudiantes con poco tiempo, que no cuentan con soluciones efectivas para el cuidado de sus mascotas.",
    },
    {
      id: "O2",
      titulo: "Crecimiento del Sector",
      desc: "Cada vez más personas consideran a sus animales como parte de la familia, lo que incrementa la demanda de productos y servicios de bienestar.",
    },
    {
      id: "O3",
      titulo: "Adopción Tecnológica",
      desc: "El uso creciente de Apps facilita la adopción de soluciones digitales para resolver problemas cotidianos del cuidado de mascotas.",
    },
    {
      id: "O4",
      titulo: "Alianzas con Veterinarias",
      desc: "Permite fortalecer la credibilidad del producto, ampliar su alcance y garantizar la calidad de la información médica ofrecida.",
    },
    {
      id: "O5",
      titulo: "Demanda de Practicidad",
      desc: "Los usuarios buscan soluciones prácticas que les ahorren tiempo, lo que favorece directamente el formato de nuestra propuesta.",
    },
  ],
  amenazas: [
    {
      id: "A1",
      titulo: "Competencia Consolidada",
      desc: "Existen plataformas y tiendas con mayor reconocimiento, experiencia y confianza en el mercado, dificultando la captación inicial.",
    },
    {
      id: "A2",
      titulo: "Ingresos Limitados",
      desc: "El público objetivo (estudiantes), al contar con bajo poder adquisitivo, puede limitar la demanda o frecuencia de compra por presupuesto.",
    },
    {
      id: "A3",
      titulo: "Saturación de Aplicaciones",
      desc: "El exceso de Apps en los dispositivos móviles de los usuarios puede generar rechazo o fatiga para instalar una nueva plataforma.",
    },
    {
      id: "A4",
      titulo: "Facilidad de Copia",
      desc: "Competidores con más recursos económicos pueden replicar rápidamente la idea de personalización y el ecosistema todo en uno.",
    },
    {
      id: "A5",
      titulo: "Logística Externa",
      desc: "Factores fuera del control del proyecto, como fallas en transporte local o proveedores de insumos, afectando la experiencia final.",
    },
  ],
};

const tabs: { key: FodaCategory; label: string; icon: typeof Shield; gradient: string; accent: string }[] = [
  { key: "fortalezas", label: "Fortalezas", icon: Shield, gradient: "from-teal-500 to-teal-600", accent: "text-teal-400" },
  { key: "debilidades", label: "Debilidades", icon: AlertTriangle, gradient: "from-amber-500 to-amber-600", accent: "text-amber-400" },
  { key: "oportunidades", label: "Oportunidades", icon: Lightbulb, gradient: "from-emerald-500 to-emerald-600", accent: "text-emerald-400" },
  { key: "amenazas", label: "Amenazas", icon: Flame, gradient: "from-coral-400 to-coral-500", accent: "text-coral-400" },
];

export default function FodaSection() {
  const [active, setActive] = useState<FodaCategory>("fortalezas");
  const [expanded, setExpanded] = useState<string | null>(null);

  const activeTab = tabs.find((t) => t.key === active)!;

  return (
    <section id="foda" className="relative py-28 px-6 dot-pattern">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Análisis Estratégico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              FODA
            </h2>
          </div>
        </FadeIn>

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActive(tab.key);
                  setExpanded(null);
                }}
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === tab.key
                    ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                    : "glass-card text-teal-200/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-3"
          >
            {fodaData[active].map((item) => (
              <motion.div
                key={item.id}
                layout
                className="glass-card-strong rounded-xl overflow-hidden hover:border-teal-400/20 transition-colors"
              >
                <button
                  onClick={() =>
                    setExpanded(expanded === item.id ? null : item.id)
                  }
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-md bg-gradient-to-r ${activeTab.gradient} text-white`}
                    >
                      {item.id}
                    </span>
                    <span className="font-semibold text-white">
                      {item.titulo}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 transition-transform duration-300 shrink-0 ${
                      expanded === item.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expanded === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pl-16">
                        <p className="text-teal-100/70 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
