"use client";

import { motion } from "framer-motion";
import { FadeIn, ScaleIn } from "../Animations";
import { User, Music, Compass, Target, Heart } from "lucide-react";

const teamMembers = [
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
    icon: User,
    color: "from-indigo-500/20 to-indigo-400/10",
    border: "border-indigo-500/30",
    accent: "text-indigo-400",
  },
];

export default function EquipoSection() {
  return (
    <section id="equipo" className="relative py-28 px-6 bg-[#091212]/50 dot-pattern">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-amber-400 mb-3">
              ¿Quiénes somos?
              </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
              El Equipo de TAOP KIT PRO
            </h2>
            <p className="text-teal-100/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Somos estudiantes de la{" "}
              <strong className="text-white font-semibold">
                Institución Universitaria de Envigado (IUE)
              </strong>
              , unidos por el propósito de redefinir el bienestar animal mediante
              la innovación y el mercadeo estratégico.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <ScaleIn key={member.name} delay={i * 0.15}>
              <div
                className={`glass-card-strong rounded-3xl p-8 border ${member.border} hover:scale-[1.02] transition-all duration-300 h-full flex flex-col`}
              >
                {/* Header profile */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center border border-white/10`}>
                    <member.icon className={`w-6 h-6 ${member.accent}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg leading-tight">
                      {member.name}
                    </h3>
                    <p className={`text-xs font-semibold ${member.accent} mt-1`}>
                      {member.role}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-teal-100/70 text-sm leading-relaxed mb-6 flex-grow">
                  {member.description}
                </p>

                {/* Goals */}
                <div className="mt-auto border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className={`w-4 h-4 ${member.accent}`} />
                    <span className="text-white font-bold text-xs uppercase tracking-wider">
                      Objetivos & Propósitos
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {member.goals.map((goal, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-teal-200/60 leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full bg-teal-400/60 mt-1.5 shrink-0`} />
                        <span>{goal}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
