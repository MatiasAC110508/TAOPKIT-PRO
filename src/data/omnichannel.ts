import { Globe, HeartHandshake, Mail, MessageSquare, Percent, QrCode, Send, Smartphone, Tv, UserCheck, Users2 } from "lucide-react";
import { CimCategoryKey, CimDataEntry, OmnichannelChannel, OmnichannelStep } from "../types";

export const userFlowSteps: OmnichannelStep[] = [
  {
    icon: Smartphone,
    title: "1. Descubrimiento",
    desc: "El cliente ve una promoción, anuncio o video en Instagram, TikTok o Facebook con mascotas usando los kits.",
    accent: "text-rose-400"
  },
  {
    icon: Globe,
    title: "2. Registro Web",
    desc: "Entra a la página web y crea el perfil de su mascota con datos como piel, pelaje, tamaño, raza, edad y necesidades especiales.",
    accent: "text-teal-400"
  },
  {
    icon: MessageSquare,
    title: "3. Asesoría Directa",
    desc: "Resuelve dudas por WhatsApp Business y recibe asesoría personalizada antes de comprar.",
    accent: "text-emerald-400"
  },
  {
    icon: UserCheck,
    title: "4. Compra Premium",
    desc: "Compra el kit personalizado recomendado según el perfil y las necesidades de su mascota.",
    accent: "text-amber-400"
  },
  {
    icon: Mail,
    title: "5. Fidelización",
    desc: "Recibe por correo recomendaciones, promociones personalizadas y recordatorios de recompra.",
    accent: "text-purple-400"
  }
];

export const omnichannelChannels: OmnichannelChannel[] = [
  {
    icon: Globe,
    title: "Página Web Oficial",
    desc: "Canal principal de TAOP. Permite crear el perfil personalizado de la mascota con tipo de piel, sensibilidad o alergias, pelaje, tamaño, raza, edad y necesidades especiales para recomendar kits adecuados, comprar y hacer seguimiento de pedidos."
  },
  {
    icon: Smartphone,
    title: "Redes Sociales",
    desc: "Instagram, TikTok y Facebook estarán conectados con la página web para dirigir al usuario al proceso de compra. Allí se compartirán videos de mascotas usando los kits, consejos de cuidado, promociones, testimonios y lanzamientos."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    desc: "Canal de atención personalizada para resolver dudas, recibir asesoría, consultar pedidos, obtener promociones exclusivas y recibir recomendaciones según las necesidades de la mascota."
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    desc: "El email marketing permitirá mantener relación constante con promociones personalizadas, recordatorios de recompra, consejos de higiene y cuidado, recomendaciones y novedades de productos o eventos."
  },
  {
    icon: QrCode,
    title: "Eventos y Ferias",
    desc: "TAOP participará en eventos pet-friendly y ferias de mascotas. Las personas podrán conocer los productos presencialmente y escanear códigos QR hacia la web y el registro de su mascota."
  },
  {
    icon: Users2,
    title: "Influencers Aliados",
    desc: "La marca trabajará con influencers relacionados con mascotas y bienestar animal para aumentar su alcance y mostrar la experiencia de personalización desde la página web hasta la entrega."
  }
];

export const cimData: Record<CimCategoryKey, CimDataEntry> = {
  advertising: {
    title: "Publicidad",
    sub: "Creativa, emocional y moderna",
    icon: Tv,
    gradient: "from-teal-500 to-teal-600",
    text: "TAOP utilizará Instagram, TikTok y Facebook para dar a conocer sus kits personalizados de una manera creativa, emocional y moderna, mostrando mascotas reales y explicando cómo se selecciona cada componente según sus características.",
    tactics: [
      "Fotos y videos de alta calidad mostrando mascotas reales utilizando los productos.",
      "Explicar la selección de componentes según pelaje, piel sensible, tamaño, edad, cuidados especiales y dieta.",
      "Anuncios emocionales y dinámicos para conectar con personas que consideran a sus mascotas parte de la familia."
    ]
  },
  promotion: {
    title: "Promoción de Ventas",
    sub: "Incentivo inmediato y conversión",
    icon: Percent,
    gradient: "from-amber-500 to-amber-600",
    text: "TAOP incentivará la primera compra y motivará a los usuarios a crear el perfil personalizado de su mascota para ofrecer productos más adecuados según las necesidades de cada animal.",
    tactics: [
      "15% de descuento en el primer kit al completar el perfil detallado de la mascota.",
      "Envíos gratis en compras superiores a cierto valor.",
      "Promociones en fechas especiales relacionadas con mascotas.",
      "Beneficios y puntos para clientes frecuentes.",
      "Kits edición especial o muestras gratis de nuevos productos para incentivar recompra."
    ]
  },
  publicRelations: {
    title: "Relaciones Públicas",
    sub: "Credibilidad y Confianza Social",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-rose-600",
    text: "La marca busca construir una buena imagen y generar confianza mediante eventos, colaboraciones, alianzas, contenido educativo y campañas de concientización sobre bienestar animal.",
    tactics: [
      "Eventos y ferias para mascotas.",
      "Colaboraciones con veterinarios e influencers pet-friendly.",
      "Alianzas con refugios y campañas de bienestar animal.",
      "Difusión de contenido educativo sobre higiene y cuidado animal.",
      "Presencia en blogs, revistas digitales y páginas de tecnología, emprendimiento, mascotas y estilo de vida."
    ]
  },
  personalSales: {
    title: "Ventas Personales",
    sub: "Asesoría y acompañamiento personalizado",
    icon: Users2,
    gradient: "from-emerald-500 to-emerald-600",
    text: "Aunque las ventas se realizan por la página web, TAOP contará con atención personalizada por chat o redes sociales para ayudar a los clientes a elegir el kit ideal.",
    tactics: [
      "Atención personalizada por chat y redes sociales.",
      "Asesores de Bienestar en ferias y eventos.",
      "Ayuda en tiempo real para completar perfiles y elegir el kit ideal.",
      "Recomendaciones específicas según raza, edad o necesidades especiales."
    ]
  },
  directMarketing: {
    title: "Marketing Directo",
    sub: "Relaciones directas a largo plazo",
    icon: Send,
    gradient: "from-purple-500 to-purple-600",
    text: "TAOP mantendrá contacto directo con sus clientes mediante correos electrónicos, mensajes y notificaciones personalizadas basadas en los datos registrados de cada mascota.",
    tactics: [
      "Recomendaciones acertadas según el perfil de la mascota.",
      "Promociones especiales para clientes registrados.",
      "Recordatorios para volver a comprar productos cuando se estén acabando."
    ]
  }
};
