"use client";

import { useState } from "react";
import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { DollarSign, Package, Wrench, Calculator, Sparkles } from "lucide-react";
import { costJustifications, productCosts, serviceCosts } from "../../data/pricing";
import SectionReferences from "../SectionReferences";

export default function PricingSection() {
  const [margin, setMargin] = useState(50); // 50% default margin
  
  const baseCost = 70000;
  const suggestedPrice = Math.round(baseCost + (baseCost * (margin / 100)));

  return (
    <section
      id="pricing"
      className="relative isolate py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-[#0c1a1a] via-[#091515] to-[#0c1a1a] dot-pattern"
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
              Analizamos la estructura de costos del producto, los costos mensuales del servicio y el margen de ganancia sugerido para mantener el negocio.
            </p>
          </div>
        </FadeIn>

        {/* Costs lists Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Product Costs */}
          <FadeIn direction="left">
            <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
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
                  {productCosts.map((item) => (
                    <div
                      key={item.item}
                      className="flex justify-between items-center py-2 border-b border-white/5"
                    >
                      <span className="text-teal-200/70 text-xs md:text-sm">
                        {item.item}
                      </span>
                      <span className="text-amber-300 font-semibold text-xs md:text-sm">
                        {item.cost}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-teal-500/20">
                <span className="text-white font-bold text-sm">
                  Costo total aproximado:
                </span>
                <span className="text-xl font-bold text-teal-400">
                  $95.000 COP
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Service Costs */}
          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card-strong mobile-safe-card rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
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
                  {serviceCosts.map((item) => (
                    <div
                      key={item.service}
                      className="flex justify-between items-center py-2 border-b border-white/5"
                    >
                      <span className="text-teal-200/70 text-xs md:text-sm">
                        {item.service}
                      </span>
                      <span className="text-amber-300 font-semibold text-xs md:text-sm">
                        {item.cost}
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
                  $255.000 COP
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Pricing Calculator Tool */}
        <FadeIn>
          <div className="glass-card-strong render-layer rounded-3xl p-6 md:p-8 max-w-4xl mx-auto border border-teal-500/25 mb-16 overflow-hidden">
            
            <div className="flex items-center gap-3 mb-6 justify-center">
              <Calculator className="w-6 h-6 text-amber-400" />
              <h3 className="text-xl font-bold text-white">Calculadora del Precio de Venta</h3>
            </div>
            
            <p className="text-center text-teal-200/60 text-xs md:text-sm mb-8 max-w-xl mx-auto">
              Para obtener ganancias y mantener el negocio, se puede aplicar un margen de ganancia del 40% al 50%. Modifica el margen proyectado para ver cómo varía el precio.
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              
              {/* Calculator controls */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">Margen de Ganancia Proyectado</span>
                  <span className="text-teal-400 font-extrabold text-lg">{margin}%</span>
                </div>
                
                <input
                  type="range"
                  min="30"
                  max="60"
                  value={margin}
                  onChange={(e) => setMargin(Number(e.target.value))}
                  className="w-full h-2 rounded-lg bg-teal-950/60 appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-amber-400 [&::-webkit-slider-thumb]:cursor-pointer [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-6 [&::-moz-range-thumb]:h-6 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-amber-400 [&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                />
                
                <div className="flex justify-between text-[10px] text-teal-200/40">
                  <span>30% (Margen Mínimo)</span>
                  <span>40-50% (Sugerido)</span>
                  <span>60% (Margen Alto)</span>
                </div>
              </div>

              {/* Calculator result */}
              <div className="bg-[#0b1717] rounded-2xl p-6 text-center border border-white/5 flex flex-col justify-center">
                <span className="text-teal-200/40 text-[10px] uppercase font-bold tracking-widest mb-2 block">
                  Precio de Venta Resultante
                </span>
                
                <span className="text-3xl md:text-4xl font-extrabold text-white block mb-2">
                  ${suggestedPrice.toLocaleString("es-CO")} COP
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
                Precio = {baseCost.toLocaleString("es-CO")} + ({baseCost.toLocaleString("es-CO")} × {margin / 100}) = ${suggestedPrice.toLocaleString("es-CO")} COP
              </code>
            </div>

          </div>
        </FadeIn>

        {/* Price Justification */}
        <FadeIn delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-teal-400" />
              <h3 className="text-lg font-bold text-white">Justificación del Valor Propuesto</h3>
            </div>
            <p className="text-center text-teal-200/60 text-xs md:text-sm mb-8 max-w-xl mx-auto">
              El cliente percibe a TAOP KIT PRO como una solución integral que excede por mucho la simple entrega física de productos de aseo:
            </p>
            <StaggerContainer className="flex flex-wrap justify-center gap-4">
              {costJustifications.map((j) => (
                <StaggerItem key={j} className="w-full md:w-[calc(50%-0.5rem)] max-w-[400px]">
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

        <FadeIn delay={0.3}>
          <SectionReferences
            className="max-w-4xl mx-auto"
            references={[
              {
                label:
                  "Kotler, P., y Armstrong, G. (2017). Fundamentos de marketing (13.ª ed.). Pearson Educación.",
              },
              {
                label:
                  "Stanton, W., Etzel, M., y Walker, B. (2007). Fundamentos de marketing (14.ª ed.). McGraw-Hill.",
              },
            ]}
          />
        </FadeIn>

      </div>
    </section>
  );
}
