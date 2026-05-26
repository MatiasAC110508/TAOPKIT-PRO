import { Compass, Heart, Music, User } from "lucide-react";
import { TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Juan Miguel Zapata Montoya",
    role: "Co-fundador & Desarrollo de Producto",
    description:
      "Estudiante de la Institución Universitaria de Envigado. Se considera una persona creativa, responsable y comprometida con cada meta que se propone. Le gusta aprender constantemente, desarrollar nuevas ideas y participar en proyectos donde pueda crecer personal y profesionalmente.",
    goals: [
      "Construir un futuro exitoso a través del esfuerzo, la disciplina y la constancia.",
      "Convertirse en una persona capaz de cumplir grandes metas, crecer profesionalmente y alcanzar estabilidad económica.",
      "Destacar por creatividad, liderazgo y capacidad de innovar, dejando una huella positiva en cada proyecto.",
    ],
    image: "/collaboratos/juanmiguel.jpeg",
    icon: Compass,
    color: "from-teal-500/20 to-teal-400/10",
    border: "border-teal-500/30",
    accent: "text-teal-400",
  },
  {
    name: "Yashar Farhang Bermúdez",
    role: "Co-fundador & Estrategia de Mercadeo",
    description:
      "21 años, estudiante de primer semestre de Mercadeo. En sus tiempos libres le gusta leer libros de motivación y salir a trotar, actividades que le ayudan a crecer como persona y mantener una buena disciplina. Se considera creativo, chistoso y con muchas ganas de aprender cosas nuevas.",
    goals: [
      "Convertirse en una persona exitosa y poder ayudarle a su mamá para que no tenga que trabajar más.",
      "Lograrlo siendo un buen profesional, con esfuerzo, dedicación y haciendo lo que realmente le gusta.",
      "Alcanzar el éxito profesional y ser una persona feliz y agradecida con la vida.",
    ],
    image: "/collaboratos/yashar.jpeg",
    icon: Heart,
    color: "from-amber-500/20 to-amber-400/10",
    border: "border-amber-500/30",
    accent: "text-amber-400",
  },
  {
    name: "Sara Torres Valencia",
    role: "Co-fundador & Liderazgo y Dirección",
    description:
      "Estudiante de primer semestre de Mercadeo en la Institución Universitaria de Envigado. Actualmente trabaja en un proyecto enfocado en dirección, manejando una orquesta, una banda de marcha y una escuela de música, mientras fortalece sus habilidades artísticas, administrativas y de liderazgo.",
    goals: [
      "Unir el mercadeo con el ámbito artístico.",
      "Impulsar proyectos culturales y musicales que generen impacto positivo en la comunidad.",
      "Promover espacios donde el talento, la disciplina y la creatividad puedan crecer y desarrollarse.",
    ],
    image: "/collaboratos/Sara.jpeg",
    icon: Music,
    color: "from-coral-500/20 to-coral-400/10",
    border: "border-rose-500/30",
    accent: "text-rose-400",
  },
  {
    name: "Michelle Granados Botero",
    role: "Co-fundador & Ventas y Relaciones",
    description:
      "17 años, estudiante de primer semestre de Mercadeo en la Institución Universitaria de Envigado. Es responsable, comprometida y tiene una excelente actitud para aprender y trabajar en equipo. Su experiencia en ventas le ha permitido desarrollar comunicación, atención al cliente y manejo de relaciones interpersonales.",
    goals: [
      "Seguir fortaleciendo sus conocimientos en mercadeo y adquirir experiencia laboral.",
      "Desarrollar nuevas habilidades para desempeñarse eficientemente en el ámbito académico y laboral.",
      "Aportar actitud positiva, compromiso y disposición para mejorar continuamente.",
    ],
    image: "/collaboratos/michelle.jpeg",
    icon: User,
    color: "from-indigo-500/20 to-indigo-400/10",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
];
