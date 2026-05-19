"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "../Animations";
import { DollarSign, Package, Wrench, Tag } from "lucide-react";

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
  "La personalización del kit.",
  "La asesoría confiable.",
  "La comodidad de comprar todo en un solo lugar.",
  "El ahorro de tiempo para el cliente.",
  "La experiencia y acompañamiento ofrecido por TAOP KIT PRO.",
];

export default function CostosSection() {
  return (
    <section
      id="costos"
      className="relative py-28 px-6 bg-gradient-to-b from-[#0c1a1a] via-[#0e2020] to-[#0c1a1a]"
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              Costos y Precio
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Inversión y Valor
            </h2>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Costos del producto */}
          <FadeIn direction="left">
            <div className="glass-card-strong rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center">
                  <Package className="w-5 h-5 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Costos del Producto (Kit)
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {costoProducto.map((item) => (
                  <div
                    key={item.elemento}
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <span className="text-teal-100/70 text-sm">
                      {item.elemento}
                    </span>
                    <span className="text-amber-300 font-semibold text-sm">
                      {item.costo}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-teal-500/30">
                <span className="text-white font-bold">
                  Costo total aproximado:
                </span>
                <span className="text-2xl font-bold gradient-text">
                  $70.000 COP
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Costos del servicio */}
          <FadeIn direction="right" delay={0.15}>
            <div className="glass-card-strong rounded-2xl p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  Costos del Servicio (Mensual)
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {costoServicio.map((item) => (
                  <div
                    key={item.servicio}
                    className="flex justify-between items-center py-2 border-b border-white/5"
                  >
                    <span className="text-teal-100/70 text-sm">
                      {item.servicio}
                    </span>
                    <span className="text-amber-300 font-semibold text-sm">
                      {item.costo}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center pt-4 border-t-2 border-amber-500/30">
                <span className="text-white font-bold">
                  Costos operativos mensuales:
                </span>
                <span className="text-2xl font-bold gradient-text-coral">
                  $350.000 COP
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Precio de venta */}
        <FadeIn delay={0.2}>
          <div className="glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Tag className="w-6 h-6 text-amber-400" />
              <h3 className="text-2xl font-bold text-white">
                Precio de Venta
              </h3>
            </div>
            <p className="text-teal-100/60 mb-4">
              Con un margen de ganancia del 40% al 50%
            </p>
            <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">
              $100.000 — $110.000 COP
            </p>
            <p className="text-sm text-teal-200/50">por kit</p>
          </div>
        </FadeIn>

        {/* Justificación del precio */}
        <FadeIn delay={0.3}>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <DollarSign className="w-6 h-6 text-teal-400" />
              <h3 className="text-xl font-bold text-white">
                Justificación del Precio
              </h3>
            </div>
            <p className="text-center text-teal-100/60 mb-6">
              El precio no solo cubre los productos físicos, sino también:
            </p>
            <StaggerContainer className="space-y-3">
              {justificaciones.map((j) => (
                <StaggerItem key={j}>
                  <div className="flex items-start gap-3 py-2">
                    <span className="mt-1.5 w-2 h-2 rounded-full bg-teal-400 shrink-0" />
                    <span className="text-teal-100/70">{j}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
            <p className="text-center text-teal-100/60 mt-6 text-sm italic">
              Esto hace que el cliente perciba el producto como una solución
              completa y no simplemente como un paquete de productos para
              mascotas.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
