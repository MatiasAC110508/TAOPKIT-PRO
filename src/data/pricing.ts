import { PricingItem, ServiceItem } from "../types";

export const productCosts: PricingItem[] = [
  { item: "Productos de higiene y cuidado", cost: "$25.000" },
  { item: "Snacks o suplementos", cost: "$15.000" },
  { item: "Empaque personalizado", cost: "$8.000" },
  { item: "Manual e instrucciones impresas", cost: "$4.000" },
  { item: "Diseño y personalización del kit", cost: "$6.000" },
  { item: "Envío aproximado", cost: "$12.000" },
];

export const serviceCosts: ServiceItem[] = [
  { service: "Página web y mantenimiento", cost: "$80.000" },
  { service: "Publicidad en redes sociales", cost: "$150.000" },
  { service: "Diseño y contenido digital", cost: "$70.000" },
  { service: "Atención al cliente", cost: "$50.000" },
];

export const costJustifications: string[] = [
  "La personalización algorítmica del kit.",
  "La asesoría e indicaciones confiables.",
  "La comodidad de comprar todo en un solo portal.",
  "El ahorro de tiempo y traslados para el cliente.",
  "El valor educativo y acompañamiento ofrecido por la marca.",
];
