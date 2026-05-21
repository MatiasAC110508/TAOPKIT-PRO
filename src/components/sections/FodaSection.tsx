"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn } from "../Animations";
import { Table2, X } from "lucide-react";

type ExcelCell = { id: string; text: string };
type SelectedCell = { section: string; id: string; text: string } | null;

const excelFoda: {
  strengths: ExcelCell[];
  weaknesses: ExcelCell[];
  opportunities: ExcelCell[];
  threats: ExcelCell[];
  FO: ExcelCell[];
  DO: ExcelCell[];
  FA: ExcelCell[];
  DA: ExcelCell[];
} = {
  strengths: [
    {
      id: "F1",
      text: "Modelo “Todo En Uno”: El modelo “Todo En Uno” integra productos, información y asesoría en una sola plataforma, eliminando la confusión del usuario y facilitando el cuidado de su mascota.",
    },
    {
      id: "F2",
      text: "Respaldo Profesional: Garantiza que la información y los productos recomendados están validados por veterinarios, lo que genera confianza en el usuario y reduce la desinformación presente en el mercado digital.",
    },
    {
      id: "F3",
      text: "Gamificación: La utilización de la App motiva al usuario a ser constante mediante dinámicas de juego que hacen más atractivo el cuidado de la mascota.",
    },
    {
      id: "F4",
      text: "Acompañamiento Educativo: Mejora el uso de los productos al profesional al enseñar cómo y por qué utilizarlos, reduciendo la falta de información del usuario.",
    },
    {
      id: "F5",
      text: "Personalización Real: El diseño de kits por parte de los mismos usuarios según sus necesidades permite ofrecer soluciones específicas para cada mascota, aumentando la efectividad frente a productos genéricos.",
    },
    {
      id: "F6",
      text: "Bajo Costo Tecnológico: El proyecto utiliza herramientas ya existentes de manera eficiente, lo que nos permite implementar el proyecto con menor inversión al usar tecnología accesible y existente.",
    },
  ],
  weaknesses: [
    {
      id: "D1",
      text: "Dependencia Tecnológica: Depende del uso constante de la App y conexión a internet, lo que puede limitar su funcionamiento.",
    },
    {
      id: "D2",
      text: "Logística de Envíos: La distribución de los kits físicos implica retos en tiempos de entrega, costos y posibles fallas en el proceso, lo que puede afectar la experiencia del usuario.",
    },
    {
      id: "D3",
      text: "Costos de Personalización: Diseñar kits específicos para cada mascota incrementa los costos operativos, lo que puede elevar el precio final y limitar el acceso para el público objetivo.",
    },
    {
      id: "D4",
      text: "Marca Nueva: Al no contar con reconocimiento ni trayectoria en el mercado, puede generar desconfianza en los usuarios y dificultar la captación de clientes en sus primeras etapas.",
    },
    {
      id: "D5",
      text: "Recursos Limitados: Al contar con un presupuesto reducido, se dificulta la inversión en marketing, desarrollo y expansión, lo que puede limitar el crecimiento del proyecto.",
    },
    {
      id: "D6",
      text: "Falta de control directo en la cadena de suministro: Al no contar con producción propia de los insumos o productos del kit, el proyecto carece de control directo sobre los tiempos de disponibilidad y los estándares de calidad finales, dependiendo de la gestión de proveedores externos.",
    },
  ],
  opportunities: [
    {
      id: "O1",
      text: "Segmento Desatendido: Existe un grupo de usuarios, especialmente estudiantes con poco tiempo, que no cuentan con soluciones efectivas para el cuidado de sus mascotas.",
    },
    {
      id: "O2",
      text: "Crecimiento del Sector: Cada vez más personas consideran a sus animales como parte de la familia, lo que incrementa la demanda de productos y servicios de bienestar.",
    },
    {
      id: "O3",
      text: "Adopción Tecnológica: El uso creciente de Apps facilita la adopción de soluciones digitales para resolver problemas cotidianos del cuidado de mascotas.",
    },
    {
      id: "O4",
      text: "Alianzas con Veterinarias: Permite fortalecer la credibilidad del producto, ampliar su alcance y garantizar la calidad de la información médica ofrecida.",
    },
    {
      id: "O5",
      text: "Demanda de Practicidad: Los usuarios buscan soluciones prácticas que les ahorren tiempo, lo que favorece directamente el formato de nuestra propuesta",
    },
    {
      id: "O6",
      text: "Mercado con Desinformación: La gran cantidad de información poco confiable en redes permite destacar ofreciendo recomendaciones claras, profesionales y verificadas.",
    },
  ],
  threats: [
    {
      id: "A1",
      text: "Competencia Consolidada: Existen plataformas y tiendas con mayor reconocimiento, experiencia y confianza en el mercado, dificultando la captación inicial.",
    },
    {
      id: "A2",
      text: "Ingresos Limitados: El público objetivo (estudiantes), al contar con bajo poder adquisitivo, puede limitar la demanda o frecuencia de compra por presupuesto.",
    },
    {
      id: "A3",
      text: "Saturación de Aplicaciones: El exceso de Apps en los dispositivos móviles de los usuarios puede generar rechazo o fatiga para instalar una nueva plataforma.",
    },
    {
      id: "A4",
      text: "Facilidad de Copia: Competidores con más recursos económicos pueden replicar rápidamente la idea de personalización y el ecosistema todo en uno.",
    },
    {
      id: "A5",
      text: "Logística Externa: Factores fuera del control del proyecto, como fallas en transporte local o proveedores de insumos, afectando la experiencia final.",
    },
    {
      id: "A6",
      text: "Cambios Normativos: Nuevas regulaciones legales relacionadas con la salud animal, empaques o el uso y protección de datos pueden obligar a modificar costos.",
    },
  ],
  FO: [
    {
      id: "F3+O5",
      text: "Explotar al máximo las dinámicas de juego, la barra de nivel de salud y el sistema de medallas de la aplicación para enganchar a los estudiantes de la IUE que viven cortos de tiempo. Al convertir las tareas en micro-retos diarios divertidos y satisfactorios, resolvemos su falta de disponibilidad sin que sientan el cuidado de su mascota como una carga pesada.",
    },
    {
      id: "F2+O6",
      text: "Posicionar el respaldo y la validación de nuestros profesionales veterinarios como el principal sello de confianza y veracidad de la marca. Esto nos permitirá destacar con fuerza frente a la gigantesca ola de desinformación, mitos falsos y consejos sin sustento científico que confunden a los jóvenes en las redes sociales.",
    },
    {
      id: "F1+O1",
      text: "Consolidar nuestro ecosistema centralizado \"Todo en Uno\" como la solución definitiva para el segmento universitario de la IUE que hoy se encuentra desatendido. Al integrar productos físicos, asesoría guiada y alertas en una sola app, eliminamos la confusión de tener que saltar entre múltiples plataformas independientes",
    },
    {
      id: "F5+O2",
      text: "Impulsar la opción de personalización real de los kits interactivos aprovechando la fuerte tendencia cultural donde las mascotas son consideradas miembros de la familia. Ofrecer soluciones específicas para las necesidades exactas de cada perro genera un vínculo emocional altísimo y destruye la oferta de productos genéricos del mercado.",
    },
    {
      id: "F6+O3",
      text: "Desplegar una estrategia de adopción digital rápida entre los jóvenes universitarios apoyándonos en nuestra infraestructura de bajo costo tecnológico. Al optimizar herramientas digitales que ya existen y son familiares para ellos, facilitamos que integren la plataforma a su ritmo de vida acelerado sin exigir grandes inversiones iniciales.",
    },
    {
      id: "F2+O4",
      text: "Cerrar alianzas estratégicas con clínicas veterinarias aliadas en la zona de influencia de la institución. Esto nos permitirá validar médicamente el contenido educativo de la app, ofrecer cupones de descuento cruzados y ampliar el alcance comercial del proyecto con un respaldo real en el sector.",
    },
  ],
  DO: [
    {
      id: "D2+O4",
      text: "Corregir las limitaciones y los altos costos de la logística de envíos físicos mediante convenios con centros veterinarios locales. Al usarlos como puntos físicos de distribución autorizados (\"pick-up points\"), los estudiantes pueden recoger sus kits directamente, eliminando el costo de envío y garantizando entregas seguras.",
    },
    {
      id: "D2+O2",
      text: "Neutralizar el impacto de los altos costos operativos que genera personalizar cada kit aprovechando la gran demanda y crecimiento del sector de mascotas. Al consolidar una comunidad de usuarios en la IUE, podemos generar compras de insumos en bloque y por volumen, negociando tarifas preferenciales con proveedores.",
    },
    {
      id: "D4+O5",
      text: "Superar la desconfianza natural que genera ser una marca nueva y sin trayectoria en el mercado enfocándonos en la practicidad extrema. Al demostrarle a los estudiantes con datos y testimonios reales del campus que la app les ahorra tiempo real en sus rutinas diarias, la marca ganará reputación por su utilidad directa.",
    },
    {
      id: "D5+O3",
      text: "Compensar la escasez de presupuesto para marketing y expansión explotando las facilidades del entorno digital y la alta adopción tecnológica de los jóvenes. En lugar de pauta costosa, implementaremos estrategias de contenido orgánico, viralización y desafíos comunitarios dentro de las redes que ellos ya usan todos los días.",
    },
    {
      id: "D6+O4",
      text: "Reducir la peligrosa dependencia de terceros y la pérdida de control en los insumos firmando alianzas estratégicas con distribuidoras del sector veterinario. Esto nos garantiza prioridad en el abastecimiento de productos esenciales para los kits, stock seguro y un control de calidad certificado por profesionales.",
    },
    {
      id: "D4+O6",
      text: "Romper la barrera de entrada de ser una marca nueva posicionándonos como el canal de información verídica que combate la desinformación del mercado. Publicar guías y diagnósticos preventivos claros y validados científicamente en la app hará que los usuarios desconfiados nos vean rápido como un referente transparente y seguro.",
    },
  ],
  FA: [
    {
      id: "F1+A1",
      text: "Utilizar la propuesta de valor integral del modelo \"Todo en Uno\" para competir con ventajas reales frente a monopolios digitales consolidados como Mercado Libre o tiendas tradicionales. Ellos son simples canales de venta fríos; nosotros ofrecemos personalización, manuales físicos pedagógicos y asesoría virtual guiada.",
    },
    {
      id: "F2+A2",
      text: "Apoyarse en el sello y respaldo profesional veterinario para contrarrestar la limitación de ingresos económicos de los estudiantes de la IUE. Al demostrarles que un kit preventivo guiado evita que cometan errores médicos costosos, el usuario percibirá el servicio como una inversión inteligente que cuida su bolsillo.",
    },
    {
      id: "F3+A3",
      text: "Aplicar las mecánicas de gamificación, recompensas por constancia y medallas de logro para combatir el riesgo de abandono por la saturación de aplicaciones en el celular. Hacer que la interacción diaria sea dinámica, divertida y satisfactoria evita que nuestra app sea percibida como una herramienta aburrida que deban borrar.",
    },
    {
      id: "F5+A4",
      text: "Explotar el sistema de personalización real interactiva (donde el usuario es el cocreador de su propio kit) como barrera competitiva ante la facilidad de copia del modelo por parte de empresas con más recursos. El vínculo emocional y la experiencia a la medida construida por el dueño de la mascota son imposibles de replicar con simple dinero.",
    },
    {
      id: "F4+A6",
      text: "Desplegar el acompañamiento educativo interactivo y los manuales físicos incluidos en cada caja para blindar al usuario ante regulaciones gubernamentales confusas o normativas de salud animal. Mantener al cliente perfectamente educado sobre el uso correcto de cada insumo garantiza el cumplimiento estricto de las normas vigentes.",
    },
    {
      id: "F6+A6",
      text: "Aprovechar nuestra infraestructura operativa ágil de bajo costo tecnológico para absorber cambios imprevistos en normativas de datos o de salud sin que afecte el negocio. Al no depender de servidores costosos ni desarrollos complejos en esta etapa, el proyecto puede pivotar rápido y adaptarse legalmente sin tener que subirle las tarifas a los estudiantes.",
    },
  ],
  DA: [
    {
      id: "D3+A2",
      text: "Reestructurar la escala de costos operativos de empaque y personalización para diseñar una línea exclusiva de \"Kits modulares express\" económicos. Esto nos permite ajustarnos estrictamente al bajo poder adquisitivo y presupuestos limitados de los estudiantes de la IUE, evitando que el precio final tumbe la demanda.",
    },
    {
      id: "D2+A5",
      text: "Desarrollar un protocolo logístico interno descentralizado que incluya mensajería local alternativa e independiente del Valle de Aburrá. De esta forma, si ocurren problemas externos de transporte masivo o bloqueos logísticos de las grandes agencias, las entregas de los kits del campus no se verán interrumpidas.",
    },
    {
      id: "D4+A1",
      text: "Crear una identidad de marca comunitaria muy cercana, humana e integrada a la vida universitaria de la IUE para neutralizar la amenaza de la competencia consolidada. Las grandes corporaciones son percibidas como entes corporativos distantes; un proyecto nacido en las mismas aulas genera una lealtad local muy difícil de arrebatar.",
    },
    {
      id: "D1+A3",
      text: "Garantizar que el desarrollo técnico de la aplicación sea sumamente ligero, permitiendo la consulta de tareas en modo offline o mediante recordatorios directos automatizados vía canales nativos como WhatsApp. Esto reduce la dependencia estricta de internet constante y mitiga el peligro de que borren la app por falta de espacio.",
    },
    {
      id: "D6+A5",
      text: "Diversificar la cartera de proveedores de insumos esenciales estableciendo al menos tres opciones de suministro locales. Esto nos permite descentralizar las compras y evitar que paros de transporte o fallas de producción de un único tercero dejen los kits vacíos o retrasen los envíos.",
    },
    {
      id: "D5+A6",
      text: "Optimizar la distribución del presupuesto limitado enfocándolo en el cumplimiento legal básico de la mano de los consultorios jurídicos de la misma universidad. Así mitigamos riesgos de multas o sanciones imprevistas por normativas de protección de datos o manejo de salud animal sin desangrar el capital de marketing.",
    },
  ],
};

function HeaderCell({
  title,
  subtitle,
  gradient,
}: {
  title: string;
  subtitle?: string;
  gradient: string;
}) {
  return (
    <th
      colSpan={2}
      className={`sticky top-0 z-10 px-4 py-3 text-center uppercase tracking-wide border border-white/10 bg-gradient-to-r ${gradient}`}
    >
      <div className="text-xs md:text-sm font-extrabold text-white">{title}</div>
      {subtitle && <div className="text-[10px] font-semibold text-white/80 mt-0.5">{subtitle}</div>}
    </th>
  );
}

function IdCell({ value }: { value: string }) {
  return (
    <td className="w-[86px] border border-white/10 bg-[#061010]/80 text-center align-top px-2 py-3">
      <span className="inline-flex min-w-12 justify-center rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[11px] md:text-xs font-extrabold text-white">
        {value}
      </span>
    </td>
  );
}

function TextCell({
  section,
  cell,
  onOpen,
}: {
  section: string;
  cell: ExcelCell;
  onOpen: (selected: { section: string; id: string; text: string }) => void;
}) {
  return (
    <td className="border border-white/10 bg-[#0a1717]/70 align-top">
      <button
        type="button"
        onClick={() => onOpen({ section, id: cell.id, text: cell.text })}
        className="w-full min-h-24 px-3 py-3 text-left transition-colors hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300/60"
        aria-label={`Ampliar ${cell.id}`}
      >
        <div className="text-[11px] md:text-xs leading-relaxed text-teal-100/80">
          {cell.text}
        </div>
      </button>
    </td>
  );
}

function MobileExcelCell({
  label,
  section,
  cell,
  gradient,
  onOpen,
}: {
  label: string;
  section: string;
  cell: ExcelCell;
  gradient: string;
  onOpen: (selected: { section: string; id: string; text: string }) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen({ section, id: cell.id, text: cell.text })}
      className="w-full overflow-hidden border border-white/10 bg-[#0a1717]/80 text-left transition-colors active:bg-white/[0.06]"
      aria-label={`Ampliar ${cell.id}`}
    >
      <div className={`px-3 py-2 bg-gradient-to-r ${gradient} border-b border-white/10 flex items-center justify-between gap-3`}>
        <span className="text-[10px] font-extrabold uppercase tracking-wide text-white">{label}</span>
        <span className="font-mono text-[11px] font-extrabold text-white">{cell.id}</span>
      </div>
      <div className="px-3 py-3 text-[12px] leading-relaxed text-teal-100/80">{cell.text}</div>
    </button>
  );
}

function ExcelFrame({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="glass-card-strong rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden shadow-2xl shadow-black/30">
      <div className="px-4 sm:px-6 py-4 border-b border-white/10 bg-gradient-to-r from-teal-950/60 via-[#071414]/50 to-amber-950/35 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl md:rounded-2xl bg-teal-500/10 border border-teal-400/20 flex items-center justify-center shrink-0">
            <Table2 className="w-5 h-5 text-teal-300" />
          </div>
          <div>
            <div className="text-white font-extrabold text-sm md:text-base">{title}</div>
            <div className="text-teal-200/55 text-[11px] md:text-xs">{label}</div>
          </div>
        </div>
        <a
          href="#referencias"
          className="text-[11px] md:text-xs font-semibold text-amber-300/90 hover:text-amber-200 transition-colors"
        >
          Referencias APA 7
        </a>
      </div>
      {children}
    </div>
  );
}

export default function FodaSection() {
  const [selected, setSelected] = useState<SelectedCell>(null);

  return (
    <section id="foda" className="relative py-20 md:py-28 px-4 sm:px-6 dot-pattern bg-[#081313]/60">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-10 md:mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Análisis Estratégico
            </span>
            <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-4">FODA y Plan de Acción</h2>
            <p className="text-teal-100/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Matriz tipo Excel (interactiva) con factores internos/externos y cruce estratégico FO/DO/FA/DA.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-10">
          <FadeIn>
            <ExcelFrame title="Factores Internos" label="Fortalezas y Debilidades">
              <div className="md:hidden bg-[#061010]/60 p-3">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  {excelFoda.strengths.map((strength, idx) => {
                    const weakness = excelFoda.weaknesses[idx];
                    return (
                      <div key={`mobile-internal-${strength.id}`} className="grid grid-cols-1 border-b border-white/10 last:border-b-0">
                        <MobileExcelCell
                          label="FORTALEZA"
                          section="Fortalezas"
                          cell={strength}
                          gradient="from-teal-500/95 to-teal-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                        <MobileExcelCell
                          label="DEBILIDAD"
                          section="Debilidades"
                          cell={weakness}
                          gradient="from-amber-500/95 to-amber-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden md:block max-h-[58vh] overflow-auto bg-[#061010]/60">
                <table className="min-w-[920px] w-full border-collapse">
                  <colgroup>
                    <col className="w-[86px]" />
                    <col className="w-[420px]" />
                    <col className="w-[86px]" />
                    <col className="w-[420px]" />
                  </colgroup>
                  <thead>
                    <tr>
                      <HeaderCell title="FORTALEZAS" gradient="from-teal-500/95 to-teal-600/80" />
                      <HeaderCell title="DEBILIDADES" gradient="from-amber-500/95 to-amber-600/80" />
                    </tr>
                  </thead>
                  <tbody>
                    {excelFoda.strengths.map((strength, idx) => {
                      const weakness = excelFoda.weaknesses[idx];
                      return (
                        <tr key={`internal-${strength.id}`}>
                          <IdCell value={strength.id} />
                          <TextCell section="Fortalezas" cell={strength} onOpen={(val) => setSelected(val)} />
                          <IdCell value={weakness.id} />
                          <TextCell section="Debilidades" cell={weakness} onOpen={(val) => setSelected(val)} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </ExcelFrame>
          </FadeIn>

          <FadeIn delay={0.15}>
            <ExcelFrame title="Matriz FODA" label="Oportunidades, Amenazas y cruces estratégicos">
              <div className="md:hidden bg-[#061010]/60 p-3">
                <div className="overflow-hidden rounded-xl border border-white/10">
                  {excelFoda.opportunities.map((opportunity, idx) => {
                    const fo = excelFoda.FO[idx];
                    const doCell = excelFoda.DO[idx];
                    return (
                      <div key={`mobile-opportunity-${opportunity.id}`} className="grid grid-cols-1 border-b border-white/10 last:border-b-0">
                        <MobileExcelCell
                          label="OPORTUNIDAD"
                          section="Oportunidades"
                          cell={opportunity}
                          gradient="from-emerald-500/95 to-emerald-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                        <MobileExcelCell
                          label="FO ESTRATEGIA"
                          section="FO Estrategias"
                          cell={fo}
                          gradient="from-teal-500/95 to-emerald-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                        <MobileExcelCell
                          label="DO ESTRATEGIA"
                          section="DO Estrategias"
                          cell={doCell}
                          gradient="from-amber-500/95 to-emerald-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                      </div>
                    );
                  })}

                  {excelFoda.threats.map((threat, idx) => {
                    const fa = excelFoda.FA[idx];
                    const da = excelFoda.DA[idx];
                    return (
                      <div key={`mobile-threat-${threat.id}`} className="grid grid-cols-1 border-b border-white/10 last:border-b-0">
                        <MobileExcelCell
                          label="AMENAZA"
                          section="Amenazas"
                          cell={threat}
                          gradient="from-rose-500/95 to-rose-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                        <MobileExcelCell
                          label="FA ESTRATEGIA"
                          section="FA Estrategias"
                          cell={fa}
                          gradient="from-teal-500/95 to-rose-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                        <MobileExcelCell
                          label="DA ESTRATEGIA"
                          section="DA Estrategias"
                          cell={da}
                          gradient="from-amber-500/95 to-rose-600/80"
                          onOpen={(val) => setSelected(val)}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="hidden md:block max-h-[72vh] overflow-auto bg-[#061010]/60">
                <table className="min-w-[1180px] w-full border-collapse">
                  <colgroup>
                    <col className="w-[86px]" />
                    <col className="w-[380px]" />
                    <col className="w-[86px]" />
                    <col className="w-[420px]" />
                    <col className="w-[86px]" />
                    <col className="w-[420px]" />
                  </colgroup>
                  <thead>
                    <tr>
                      <HeaderCell title="OPORTUNIDADES" gradient="from-emerald-500/95 to-emerald-600/80" />
                      <HeaderCell title="FO" subtitle="ESTRATEGIAS" gradient="from-teal-500/95 to-emerald-600/80" />
                      <HeaderCell title="DO" subtitle="ESTRATEGIAS" gradient="from-amber-500/95 to-emerald-600/80" />
                    </tr>
                  </thead>
                  <tbody>
                    {excelFoda.opportunities.map((opportunity, idx) => {
                      const fo = excelFoda.FO[idx];
                      const doCell = excelFoda.DO[idx];
                      return (
                        <tr key={`opportunity-${opportunity.id}`}>
                          <IdCell value={opportunity.id} />
                          <TextCell section="Oportunidades" cell={opportunity} onOpen={(val) => setSelected(val)} />
                          <IdCell value={fo.id} />
                          <TextCell section="FO Estrategias" cell={fo} onOpen={(val) => setSelected(val)} />
                          <IdCell value={doCell.id} />
                          <TextCell section="DO Estrategias" cell={doCell} onOpen={(val) => setSelected(val)} />
                        </tr>
                      );
                    })}

                    <tr>
                      <HeaderCell title="AMENAZAS" gradient="from-rose-500/95 to-rose-600/80" />
                      <HeaderCell title="FA" subtitle="ESTRATEGIAS" gradient="from-teal-500/95 to-rose-600/80" />
                      <HeaderCell title="DA" subtitle="ESTRATEGIAS" gradient="from-amber-500/95 to-rose-600/80" />
                    </tr>

                    {excelFoda.threats.map((threat, idx) => {
                      const fa = excelFoda.FA[idx];
                      const da = excelFoda.DA[idx];
                      return (
                        <tr key={`threat-${threat.id}`}>
                          <IdCell value={threat.id} />
                          <TextCell section="Amenazas" cell={threat} onOpen={(val) => setSelected(val)} />
                          <IdCell value={fa.id} />
                          <TextCell section="FA Estrategias" cell={fa} onOpen={(val) => setSelected(val)} />
                          <IdCell value={da.id} />
                          <TextCell section="DA Estrategias" cell={da} onOpen={(val) => setSelected(val)} />
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </ExcelFrame>
          </FadeIn>
        </div>
      </div>

      {/* Cell modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Cerrar"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            />
            <motion.div
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 18, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-3xl max-h-[86vh] rounded-2xl md:rounded-3xl glass-card-strong border border-white/10 overflow-hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Detalle de celda"
            >
              <div className="px-4 sm:px-6 py-4 border-b border-white/10 flex items-start justify-between gap-4 bg-gradient-to-r from-teal-950/50 via-[#071414]/40 to-amber-950/40">
                <div>
                  <div className="text-teal-200/60 text-xs font-semibold tracking-widest uppercase">{selected.section}</div>
                  <div className="mt-1 flex items-center gap-3">
                    <span className="font-mono text-xs font-extrabold px-2 py-1 rounded-lg bg-teal-500/10 border border-teal-400/20 text-white">
                      {selected.id}
                    </span>
                    <span className="text-white font-bold text-sm md:text-base">Detalle</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  className="p-2 rounded-xl hover:bg-white/5 text-teal-200/70 hover:text-white transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 sm:p-6 overflow-y-auto max-h-[62vh]">
                <p className="text-teal-100/80 text-sm md:text-base leading-relaxed whitespace-pre-wrap">{selected.text}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
