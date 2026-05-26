import { GoalItem } from "../types";

export const organizationalGoals: GoalItem[] = [
  {
    id: 1,
    title: "Meta 1",
    desc: "Aumentar en un 40% el reconocimiento de TAOP KIT PRO en estudiantes y familias dueñas de mascotas durante los próximos 6 meses.",
    tactics: [
      "Publicar contenido educativo en redes sociales tres veces por semana durante los próximos 6 meses.",
      "Compartir testimonios y experiencias reales de clientes dos veces al mes durante 6 meses.",
      "Realizar alianzas con veterinarias y tiendas para mascotas durante los próximos 4 meses.",
    ],
    color: "from-teal-500 to-teal-600",
    iconColor: "text-teal-400",
    borderColor: "hover:border-teal-400/40",
  },
  {
    id: 2,
    title: "Meta 2",
    desc: "Incrementar en un 25% las ventas de kits personalizados a través de la página web durante los próximos 8 meses.",
    tactics: [
      "Crear promociones y descuentos para nuevos clientes cada mes durante los próximos 8 meses.",
      "Diseñar kits personalizados según las necesidades de cada mascota durante todo el proceso de venta en los próximos 8 meses.",
      "Optimizar el proceso de compra y pagos en la página web durante los primeros 3 meses del proyecto.",
    ],
    color: "from-amber-500 to-amber-600",
    iconColor: "text-amber-400",
    borderColor: "hover:border-amber-400/40",
  },
  {
    id: 3,
    title: "Meta 3",
    desc: "Lograr que el 80% de los clientes se sientan satisfechos con el servicio y vuelvan a comprar durante los próximos 12 meses.",
    tactics: [
      "Ofrecer asesoría personalizada antes y después de cada compra durante los próximos 12 meses.",
      "Realizar seguimiento a la experiencia de los clientes una semana después de cada compra durante el próximo año.",
      "Implementar recompensas y descuentos para clientes frecuentes a partir del tercer mes del proyecto y mantenerlas durante los 12 meses.",
    ],
    color: "from-coral-400 to-coral-500",
    iconColor: "text-coral-400",
    borderColor: "hover:border-coral-400/40",
  },
];
