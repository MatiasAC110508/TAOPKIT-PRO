import { Compass, Heart, Music, User } from "lucide-react";
import { TeamMember } from "../types";

export const teamMembers: TeamMember[] = [
  {
    name: "Juan Miguel Zapata Montoya",
    role: "Co-fundador & Desarrollo de Producto",
    description:
      "Estudiante de la Institución Universitaria de Envigado. Persona creativa, responsable y comprometida con el aprendizaje constante. Busca aportar una visión innovadora y disciplinada en cada reto del proyecto.",
    goals: [
      "Construir un futuro exitoso con esfuerzo, disciplina y constancia.",
      "Destacar por liderazgo, creatividad y capacidad de innovación.",
      "Lograr estabilidad y dejar una huella positiva en su comunidad.",
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
      "21 años, estudiante de primer semestre de Mercadeo en la IUE. Apasionado de la lectura motivacional y el atletismo, lo que le aporta rigor y disciplina. De mente creativa, alegre y con enorme curiosidad por aprender.",
    goals: [
      "Alcanzar el éxito profesional a través de la dedicación constante.",
      "Brindar apoyo y bienestar a su madre mediante su desarrollo laboral.",
      "Ser un profesional feliz, íntegro y agradecido con la vida.",
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
      "Estudiante de primer semestre de Mercadeo en la IUE. Combina la carrera con la dirección de una orquesta, una banda de marcha y una escuela de música, desarrollando habilidades notables de liderazgo y gestión.",
    goals: [
      "Unir el mercadeo con el ámbito artístico y cultural.",
      "Impulsar proyectos culturales con impacto comunitario positivo.",
      "Crear espacios donde el talento y la creatividad puedan desarrollarse.",
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
      "17 años, estudiante de primer semestre de Mercadeo en la IUE. Responsable, comprometida y con excelente actitud para aprender. Cuenta con experiencia en ventas y destaca por sus habilidades de comunicación y atención al cliente.",
    goals: [
      "Seguir aprendiendo y desarrollar nuevas habilidades en el área de mercadeo.",
      "Desempeñarse eficientemente aportando una actitud positiva y compromiso.",
      "Adquirir experiencia para crecer de manera integral, tanto personal como profesionalmente.",
    ],
    image: "/collaboratos/michelle.jpeg",
    icon: User,
    color: "from-indigo-500/20 to-indigo-400/10",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
];
