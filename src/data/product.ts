import { Clock, Heart, Shield, Sparkles } from "lucide-react";
import { HighlightFeature } from "../types";

export const productHighlights: HighlightFeature[] = [
  {
    icon: Sparkles,
    title: "Personalización",
    text: "Cada kit se adapta a las necesidades específicas de la mascota, teniendo en cuenta aspectos como higiene, alimentación, salud y bienestar.",
  },
  {
    icon: Heart,
    title: "Respaldo Veterinario",
    text: "Información respaldada por veterinarios y expertos, generando mayor confianza y seguridad en los usuarios.",
  },
  {
    icon: Clock,
    title: "Ahorro de Tiempo",
    text: "Evita que los usuarios gasten en productos innecesarios o pierdan tiempo buscando soluciones poco confiables.",
  },
  {
    icon: Shield,
    title: "Todo en Uno",
    text: "Integra bienestar, asesoría, personalización y practicidad, ofreciendo una experiencia moderna, confiable y accesible.",
  },
];
