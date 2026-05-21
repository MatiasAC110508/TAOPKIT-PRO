"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { DollarSign, Package, Wrench, Tag, Calculator, Percent, Sparkles } from "lucide-react";

const costoProducto = [
  { elemento: "Productos de higiene y cuidado", costo: "$25.000" },
  { elemento: "Snacks o suplementos", costo: "$15.000" },
  { elemento: "Empaque personalizado", costo: "$8.000" },
  { elemento: "Manual e instrucciones impresas", costo: "$4.000" },
  { elemento: "Diseño y personalización del kit", costo: "$6.000" },
  { elemento: "Envío aproximado", costo: "$12.000" },
];

const costoServicio = [
  { servicio: "Página web y mantenimiento", costo: "$80.000" },
  { servicio: "Publicidad en redes sociales", costo: "$150.000" },
  { servicio: "Diseño y contenido digital", costo: "$70.000" },
  { servicio: "Atención al cliente", costo: "$50.000" },
];

const justificaciones = [
  "La personalización algorítmica del kit.",
  "La asesoría e indicaciones confiables.",
  "La comodidad de comprar todo en un solo portal.",
  "El ahorro de tiempo y traslados para el cliente.",
  "El valor educativo y acompañamiento ofrecido por la marca.",
];

export default function CostosSection() {
  const [margen, setMargen] = useState(50); // 50% default margin
  
  const costoBase = 70000;
  const precioSugerido = Math.round(costoBase + (costoBase * (margen / 100)));

  return (
    <section
      id="costos"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#091515] to-[#0c1a1a] dot-pattern"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Costos y Precio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              Inversión, Costos y Valor
            </h2>
            <p className="text-teal-100/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Analizamos minuciosamente la estructura de costos de producción y mantenimiento tecnológico para proponer un precio competitivo.
            </p>
          </div>
        </FadeIn>

        {/* Costs lists Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Costos del producto */}
          <FadeIn direction="left">
            <div className="glass-card-strong rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
                    <Package className="w-5 h-5 text-teal-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Costo Unitario del Kit (Físico)
                  </h3>
                </div>

                <div className="space-y-2 mb-6">
                  {costoProducto.map((item) => (
                    <div
                      key={item.elemento}
                      className="flex justify-between items-center py-2 border-b border-white/5"
                    >
                      <span className="text-teal-200/70 text-xs md:text-sm">
                        {item.elemento}
                      </span>
                      <span className="text-amber-300 font-semibold text-xs md:text-sm">
                        {item.costo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-teal-500/20">
                <span className="text-white font-bold text-sm">
                  Costo de Producción Unitario:
                </span>
                <span className="text-xl font-bold text-teal-400">
                  $70.000 COP
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Costos del servicio */}
          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card-strong rounded-2xl p-8 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center">
                    <Wrench className="w-5 h-5 text-amber-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    Costos Mensuales Operativos (Servicio)
                  </h3>
                </div>

                <div className="space-y-2 mb-6">
                  {costoServicio.map((item) => (
                    <div
                      key={item.servicio}
                      className="flex justify-between items-center py-2 border-b border-white/5"
                    >
                      <span className="text-teal-200/70 text-xs md:text-sm">
                        {item.servicio}
                      </span>
                      <span className="text-amber-300 font-semibold text-xs md:text-sm">
                        {item.costo}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-amber-500/20">
                <span className="text-white font-bold text-sm">
                  Costo Operativo Mensual:
                </span>
                <span className="text-xl font-bold text-amber-400">
                  $350.000 COP
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Pricing Calculator Tool */}
        <FadeIn>
          <div className="glass-card-strong rounded-3xl p-8 max-w-4xl mx-auto border border-teal-500/25 mb-16">
            
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Calculator className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Calculadora del Precio de Venta</h3>
            </div>
            
            <p className="text-center text-teal-200/60 text-xs md:text-sm mb-8 max-w-xl mx-auto">
              Ajustamos la fórmula teórica de Kotler & Armstrong. Modifica el margen de ganancia proyectado para ver cómo varía el precio de comercialización recomendado.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Calculator controls */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Margen de Ganancia Proyectado</span>
                  <span className="text-teal-400 font-extrabold text-lg">{margen}%</span>
                </div>
                
                <input
                  type="range"
                  min="30"
                  max="60"
                  value={margen}
                  onChange={(e) => setMargen(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-teal-950/60 appearance-none cursor-pointer accent-teal-400"
                />
                
                <div className="flex justify-between text-[10px] text-teal-200/40">
                  <span>30% (Margen Mínimo)</span>
                  <span>40-50% (Sugerido por Kotler)</span>
                  <span>60% (Margen Alto)</span>
                </div>
              </div>

              {/* Calculator result */}
              <div className="bg-[#0b1717] rounded-2xl p-6 text-center border border-white/5 flex flex-col justify-center">
                <span className="text-teal-200/40 text-[10px] uppercase font-bold tracking-widest mb-2 block">
                  Precio de Venta Resultante
                </span>
                
                <span className="text-3xl md:text-4xl font-extrabold text-white block mb-2">
                  ${precioSugerido.toLocaleString("es-CO")} COP
                </span>
                
                <span className="text-[10px] text-amber-400 italic font-medium flex items-center justify-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Rango recomendado: $100.000 a $110.000 COP
                </span>
              </div>
            </div>
            
            {/* The math equation */}
            <div className="text-center mt-8 pt-6 border-t border-white/5">
              <span className="text-[10px] uppercase font-bold text-teal-200/30 tracking-widest block mb-2">Ecuación Teórica Usada</span>
              <code className="text-xs md:text-sm text-teal-300 font-mono">
                Precio = {costoBase.toLocaleString("es-CO")} + ({costoBase.toLocaleString("es-CO")} × {margen / 100}) = ${precioSugerido.toLocaleString("es-CO")} COP
              </code>
            </div>

          </div>
        </FadeIn>

        {/* Justificación del precio */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-teal-400" />
              <h3 className="text-lg font-bold text-white">Justificación del Valor Propuesto</h3>
            </div>
            <p className="text-center text-teal-200/60 text-xs md:text-sm mb-8 max-w-xl mx-auto">
              El cliente percibe a TAOP KIT PRO como una solución integral que excede por mucho la simple entrega física de productos de aseo:
            </p>
            <StaggerContainer className="grid md:grid-cols-2 gap-4">
              {justificaciones.map((j) => (
                <StaggerItem key={j}>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-teal-950/20 border border-teal-500/10 h-full">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-teal-100/70 text-xs md:text-sm">{j}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-teal-200/40 mt-8 text-xs italic">
              * Esto hace que el cliente perciba el producto como una solución completa y no simplemente como un paquete de productos para mascotas.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
