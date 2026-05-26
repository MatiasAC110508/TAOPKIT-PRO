import { PricingItem, ServiceItem } from "../types";

export const productCosts: PricingItem[] = [
  { item: "Productos de higiene y cuidado", cost: "$32.000" },
  { item: "Suplementos", cost: "$8.000" },
  { item: "Empaque personalizado", cost: "$30.000" },
  { item: "Manual e instrucciones impresas", cost: "$4.000" },
  { item: "Diseño y personalización del kit", cost: "$6.000" },
  { item: "Envío aproximado", cost: "$12.000" },
];

export const serviceCosts: ServiceItem[] = [
  { service: "Página web y mantenimiento", cost: "$50.000" },
  { service: "Publicidad en redes sociales", cost: "$90.000" },
  { service: "Diseño y contenido digital", cost: "$65.000" },
  { service: "Atención al cliente", cost: "$50.000" },
];

export const costJustifications: string[] = [
  "La personalización del kit.",
  "La asesoría confiable.",
  "La comodidad de comprar todo en un solo lugar.",
  "El ahorro de tiempo para el cliente.",
  "La experiencia y acompañamiento ofrecido por TAOP KIT PRO.",
];
