"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import {
  Shield,
  AlertTriangle,
  Lightbulb,
  Flame,
  ChevronDown,
  ArrowUpDown,
  BookOpen,
  Briefcase,
  Activity,
  UserCheck
} from "lucide-react";

type FodaCategory = "fortalezas" | "debilidades" | "oportunidades" | "amenazas";
type CruceCategory = "FO" | "DO" | "FA" | "DA";

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
    {
      id: "O6",
      titulo: "Mercado con Desinformación",
      desc: "La gran cantidad de información poco confiable en redes permite destacar ofreciendo recomendaciones claras, profesionales y verificadas.",
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
    {
      id: "A6",
      titulo: "Cambios Normativos",
      desc: "Nuevas regulaciones legales relacionadas con la salud animal, empaques o el uso y protección de datos pueden obligar a modificar costos.",
    },
  ],
};

const cruceData: Record<
  CruceCategory,
  { ids: string; titulo: string; desc: string }[]
> = {
  FO: [
    {
      ids: "F1 + O1",
      titulo: "Consolidación de Solución Integral",
      desc: "Consolidar el ecosistema 'Todo en Uno' como la respuesta para el segmento universitario de la IUE desatendido. Al integrar productos, asesoría y alertas en una sola app, evitamos que tengan que usar múltiples proveedores.",
    },
    {
      ids: "F5 + O2",
      titulo: "Vínculo de Personalización Familiar",
      desc: "Impulsar la personalización de los kits interactivos aprovechando la fuerte tendencia cultural donde las mascotas son de la familia. Ofrecer empaques específicos según la raza genera un vínculo emocional inigualable.",
    },
    {
      ids: "F6 + O3",
      titulo: "Estrategia de Adopción Ágil",
      desc: "Desplegar la adopción digital rápida entre jóvenes universitarios apoyándonos en nuestra infraestructura de bajo costo tecnológico. Optimizando herramientas existentes, ingresan rápido sin altos costos iniciales.",
    },
    {
      ids: "F2 + O4",
      titulo: "Validación Médica Estratégica",
      desc: "Cerrar alianzas con veterinarias aliadas en la zona de influencia de la institución. Esto valida científicamente el contenido educativo de la app, permitiendo dar cupones de descuento cruzados.",
    },
    {
      ids: "F2 + O6",
      titulo: "Combate de Mitos Científicos",
      desc: "Posicionar el respaldo profesional veterinario como el principal sello de veracidad del kit frente a la ola de desinformación y mitos falsos de redes sociales.",
    },
  ],
  DO: [
    {
      ids: "D2 + O4",
      titulo: "Puntos de Entrega Autorizados",
      desc: "Corregir las limitaciones y altos costos de envíos físicos mediante convenios con centros veterinarios locales como pick-up points. Los estudiantes recogen allí, reduciendo costos.",
    },
    {
      ids: "D2 + O2",
      titulo: "Compras en Bloque de Insumos",
      desc: "Mitigar los altos costos operativos de empaquetar por mascota aprovechando la demanda de estudiantes. Al agrupar pedidos, compramos materia prima por volumen con mejores tarifas.",
    },
    {
      ids: "D4 + O5",
      titulo: "Atracción por Practicidad",
      desc: "Superar la desconfianza de marca nueva enfocando la comunicación en el ahorro de tiempo real diario. Los testimonios locales disipan la incertidumbre inicial de compra.",
    },
    {
      ids: "D5 + O3",
      titulo: "Crecimiento Orgánico Viral",
      desc: "Compensar la escasez de presupuesto de marketing explotando las redes sociales de manera orgánica. Crearemos desafíos comunitarios y videos interactivos dentro de los campus.",
    },
    {
      ids: "D6 + O4",
      titulo: "Estabilidad de Abastecimiento",
      desc: "Disminuir la dependencia de terceros firmando acuerdos comerciales directos con grandes distribuidores del sector veterinario, asegurando stock permanente.",
    },
    {
      ids: "D4 + O6",
      titulo: "Diagnósticos Preventivos Informativos",
      desc: "Superar la barrera de mercado publicando guías y diagnósticos médicos validados por la app. Esto educa al usuario y lo convierte en cliente recurrente.",
    },
  ],
  FA: [
    {
      ids: "F1 + A1",
      titulo: "Diferenciación vs Monopolios",
      desc: "Enfrentar a gigantes como Mercado Libre destacando que somos asesores personalizados con manuales pedagógicos incluidos en el kit, no solo intermediarios de venta.",
    },
    {
      ids: "F2 + A2",
      titulo: "Prevención Médica Económica",
      desc: "Contrarrestar el bajo presupuesto estudiantil demostrando que un kit preventivo guiado evita que cometan errores médicos futuros, cuidando su bolsillo a mediano plazo.",
    },
    {
      ids: "F3 + A3",
      titulo: "Gamificación contra Abandono",
      desc: "Combatir la fatiga de aplicaciones móviles mediante mecánicas de juego, recompensas y medallas de constancia en el cuidado diario del animal.",
    },
    {
      ids: "F5 + A4",
      titulo: "Fidelización de Co-creación",
      desc: "Crear una barrera contra la copia de competidores con más capital mediante la personalización interactiva. El vínculo emocional construido es imposible de clonar con dinero.",
    },
    {
      ids: "F4 + A6",
      titulo: "Cumplimiento Educativo y Resguardo",
      desc: "Desplegar manuales educativos impresos y acompañamiento digital para educar correctamente al usuario y cumplir de manera natural las normativas de salud animal.",
    },
    {
      ids: "F6 + A6",
      titulo: "Adaptabilidad Legal Sin Costo",
      desc: "Aprovechar la infraestructura ágil y ligera para absorber cambios imprevistos en normativas de datos o de salud sin tener que subirle las tarifas finales a los clientes.",
    },
  ],
  DA: [
    {
      ids: "D3 + A2",
      titulo: "Línea Express Modular Económica",
      desc: "Reestructurar los empaques para crear una línea express más económica enfocada estrictamente en el bolsillo universitario con menores ingresos.",
    },
    {
      ids: "D2 + A5",
      titulo: "Mensajería Local Descentralizada",
      desc: "Crear una red de transporte de mensajería independiente en el Valle de Aburrá para que paros o incidentes externos no retrasen las entregas.",
    },
    {
      ids: "D4 + A1",
      titulo: "Identidad Comunitaria Universitaria",
      desc: "Neutralizar grandes marcas competidoras con una identidad muy cercana. Un proyecto nacido de las aulas de la IUE genera una lealtad local muy fuerte.",
    },
    {
      ids: "D1 + A3",
      titulo: "Funcionalidad Offline y Canales Directos",
      desc: "Desarrollar la app de manera ultraligera y permitir el registro por WhatsApp. Reduce la exigencia de memoria y datos móviles de los estudiantes.",
    },
    {
      ids: "D6 + A5",
      titulo: "Diversificación de Insumos",
      desc: "Mantener al menos tres proveedores alternativos locales de insumos clave para que fallas logísticas de terceros no detengan el ensamblado.",
    },
    {
      ids: "D5 + A6",
      titulo: "Respaldo Consultorio Jurídico IUE",
      desc: "Optimizar el presupuesto apoyándonos en los consultorios jurídicos de la universidad para la revisión legal y protección de datos sin gastar en abogados corporativos.",
    },
  ],
};

const mainTabs = [
  { key: "matriz", label: "Matriz FODA Básica" },
  { key: "cruce", label: "Cruce Estratégico (Excel)" },
];

const categoryTabs: {
  key: FodaCategory;
  label: string;
  icon: typeof Shield;
  gradient: string;
  border: string;
}[] = [
  {
    key: "fortalezas",
    label: "Fortalezas",
    icon: Shield,
    gradient: "from-teal-500 to-teal-600",
    border: "border-teal-500/20",
  },
  {
    key: "debilidades",
    label: "Debilidades",
    icon: AlertTriangle,
    gradient: "from-amber-500 to-amber-600",
    border: "border-amber-500/20",
  },
  {
    key: "oportunidades",
    label: "Oportunidades",
    icon: Lightbulb,
    gradient: "from-emerald-500 to-emerald-600",
    border: "border-emerald-500/20",
  },
  {
    key: "amenazas",
    label: "Amenazas",
    icon: Flame,
    gradient: "from-rose-500 to-rose-600",
    border: "border-rose-500/20",
  },
];

const cruceTabs: {
  key: CruceCategory;
  label: string;
  desc: string;
  gradient: string;
  accent: string;
}[] = [
  {
    key: "FO",
    label: "FO (Maxi-Maxi)",
    desc: "Estrategias de crecimiento: Usar fortalezas para aprovechar oportunidades.",
    gradient: "from-teal-500 to-emerald-600",
    accent: "text-teal-400",
  },
  {
    key: "DO",
    label: "DO (Mini-Maxi)",
    desc: "Estrategias de mejora: Superar debilidades usando oportunidades.",
    gradient: "from-amber-500 to-emerald-600",
    accent: "text-amber-400",
  },
  {
    key: "FA",
    label: "FA (Maxi-Mini)",
    desc: "Estrategias de defensa: Usar fortalezas para evitar amenazas.",
    gradient: "from-teal-500 to-rose-600",
    accent: "text-rose-400",
  },
  {
    key: "DA",
    label: "DA (Mini-Mini)",
    desc: "Estrategias de supervivencia: Reducir debilidades y evitar amenazas.",
    gradient: "from-amber-500 to-rose-600",
    accent: "text-amber-500",
  },
];

export default function FodaSection() {
  const [activeMainTab, setActiveMainTab] = useState<"matriz" | "cruce">("matriz");
  const [activeFodaCat, setActiveFodaCat] = useState<FodaCategory>("fortalezas");
  const [activeCruceCat, setActiveCruceCat] = useState<CruceCategory>("FO");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="foda" className="relative py-28 px-6 dot-pattern bg-[#081313]/60">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Análisis Estratégico
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              FODA y Plan de Acción
            </h2>
            <p className="text-teal-100/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Meticulosa evaluación del micro y macroentorno del negocio. Compara los factores internos/externos y visualiza la matriz de cruce táctico.
            </p>
          </div>
        </FadeIn>

        {/* Main Tab Selector (Matriz vs Cruce) */}
        <div className="flex justify-center mb-12">
          <div className="p-1 rounded-full bg-teal-950/40 border border-teal-500/20 inline-flex">
            {mainTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveMainTab(tab.key as "matriz" | "cruce");
                  setExpandedId(null);
                }}
                className={`px-6 py-2.5 rounded-full font-bold text-xs md:text-sm transition-all duration-300 ${
                  activeMainTab === tab.key
                    ? "bg-teal-500 text-white shadow-md"
                    : "text-teal-200/50 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic content wrapper */}
        <div className="min-h-[480px]">
          
          {/* TAB 1: MATRIZ FODA BÁSICA */}
          {activeMainTab === "matriz" && (
            <div>
              {/* Category sub-selector */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {categoryTabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeFodaCat === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveFodaCat(tab.key);
                        setExpandedId(null);
                      }}
                      className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300 border ${
                        isActive
                          ? `bg-gradient-to-r ${tab.gradient} border-transparent text-white shadow-lg`
                          : `glass-card ${tab.border} text-teal-200/60 hover:text-white hover:bg-white/5`
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Category Item List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFodaCat}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 max-w-4xl mx-auto"
                >
                  {fodaData[activeFodaCat].map((item) => (
                    <div
                      key={item.id}
                      className="glass-card-strong rounded-2xl overflow-hidden hover:border-teal-400/25 transition-all duration-200 border border-white/5"
                    >
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span
                            className={`text-xs font-bold px-3 py-1 rounded-lg bg-gradient-to-r ${
                              categoryTabs.find((t) => t.key === activeFodaCat)?.gradient
                            } text-white`}
                          >
                            {item.id}
                          </span>
                          <span className="font-bold text-white text-sm md:text-base">
                            {item.titulo}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-400 transition-transform duration-300 shrink-0 ${
                            expandedId === item.id ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedId === item.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 pl-14 text-teal-100/70 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3 bg-teal-950/10">
                              {item.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

          {/* TAB 2: CRUCE ESTRATÉGICO */}
          {activeMainTab === "cruce" && (
            <div>
              {/* Crossover grid selector */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                {cruceTabs.map((tab) => {
                  const isActive = activeCruceCat === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => {
                        setActiveCruceCat(tab.key);
                        setExpandedId(null);
                      }}
                      className={`text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-28 ${
                        isActive
                          ? `bg-gradient-to-br ${tab.gradient} border-transparent text-white shadow-lg`
                          : "glass-card border-white/5 text-teal-200/60 hover:bg-white/5"
                      }`}
                    >
                      <span className="font-extrabold text-lg block">{tab.label}</span>
                      <span className={`text-[10px] leading-tight ${isActive ? "text-white/80" : "text-teal-200/40"}`}>
                        {tab.desc}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Strategy Item List */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCruceCat}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3 max-w-4xl mx-auto"
                >
                  {cruceData[activeCruceCat].map((strategy) => (
                    <div
                      key={strategy.ids}
                      className="glass-card-strong rounded-2xl overflow-hidden hover:border-amber-400/25 transition-all duration-200 border border-white/5"
                    >
                      <button
                        onClick={() => toggleExpand(strategy.ids)}
                        className="w-full flex items-center justify-between p-5 text-left"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 border border-amber-500/25">
                            {strategy.ids}
                          </span>
                          <span className="font-bold text-white text-sm md:text-base leading-tight">
                            {strategy.titulo}
                          </span>
                        </div>
                        <ChevronDown
                          className={`w-5 h-5 text-teal-400 transition-transform duration-300 shrink-0 ${
                            expandedId === strategy.ids ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {expandedId === strategy.ids && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="px-5 pb-5 pl-14 text-teal-100/70 text-xs md:text-sm leading-relaxed border-t border-white/5 pt-3 bg-amber-950/10">
                              {strategy.desc}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
