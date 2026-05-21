import { NavigationLink } from "../types";

export const primaryLinks: NavigationLink[] = [
  { href: "#hero", label: "Inicio" },
  { href: "#team", label: "Equipo" },
  { href: "#research", label: "Estudio" },
  { href: "#description", label: "Producto" },
  { href: "#swot", label: "FODA" },
];

export const moreLinks: NavigationLink[] = [
  { href: "#levels", label: "Niveles" },
  { href: "#omnichannel", label: "CIM" },
  { href: "#pricing", label: "Costos" },
  { href: "#objectives", label: "Objetivo" },
  { href: "#segmentation", label: "Segmentación" },
  { href: "#references", label: "Referencias" },
];

export const allLinks: NavigationLink[] = [...primaryLinks, ...moreLinks];
