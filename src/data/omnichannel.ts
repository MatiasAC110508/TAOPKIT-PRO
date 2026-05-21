import { Globe, HeartHandshake, Mail, MessageSquare, Percent, QrCode, Send, Smartphone, Tv, UserCheck, Users2 } from "lucide-react";
import { CimCategoryKey, CimDataEntry, OmnichannelChannel, OmnichannelStep } from "../types";

export const userFlowSteps: OmnichannelStep[] = [
  {
    icon: Smartphone,
    title: "1. Descubrimiento",
    desc: "El cliente ve un video dinámico o un anuncio en Instagram o TikTok que conecta con el amor por su mascota.",
    accent: "text-rose-400"
  },
  {
    icon: Globe,
    title: "2. Registro Web",
    desc: "Entra a la página web y crea el perfil digital detallando tipo de pelaje, edad y necesidades especiales de su mascota.",
    accent: "text-teal-400"
  },
  {
    icon: MessageSquare,
    title: "3. Asesoría Directa",
    desc: "Resuelve sus dudas e inquietudes médicas o de empaque chateando con un 'Asesor de Bienestar' en WhatsApp.",
    accent: "text-emerald-400"
  },
  {
    icon: UserCheck,
    title: "4. Compra Premium",
    desc: "Adquiere el kit personalizado que el algoritmo de TAOP generó idealmente para su mascota.",
    accent: "text-amber-400"
  },
  {
    icon: Mail,
    title: "5. Fidelización",
    desc: "Recibe recordatorios automáticos de recompra por correo cuando sus productos están por agotarse.",
    accent: "text-purple-400"
  }
];

export const omnichannelChannels: OmnichannelChannel[] = [
  {
    icon: Globe,
    title: "Página Web Oficial",
    desc: "Eje central del ecosistema. Los usuarios registran los datos clave de la mascota (tipo de pelaje, sensibilidad, tamaño, edad, alergias) para recibir recomendaciones algorítmicas, comprar y rastrear pedidos."
  },
  {
    icon: Smartphone,
    title: "Redes Sociales",
    desc: "Instagram, TikTok y Facebook actúan como canales de atracción. Comparten testimonios, videos dinámicos de mascotas y contenido educativo para derivar tráfico calificado a la página web."
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Business",
    desc: "Canal de atención personalizada instantánea. Los asesores guían la compra, informan sobre envíos y recomiendan kits específicos según la raza o patología especial de la mascota."
  },
  {
    icon: Mail,
    title: "Correo Electrónico",
    desc: "Estrategias de email marketing adaptadas. Incluye ofertas personalizadas basadas en el perfil de la mascota y alertas amigables para recompra de productos cuando se estén acabando."
  },
  {
    icon: QrCode,
    title: "Eventos y Ferias",
    desc: "Puntos de contacto físico. Participación en ferias pet-friendly donde las personas escanean códigos QR para registrar a su mascota e interactuar directamente con los kits."
  },
  {
    icon: Users2,
    title: "Influencers Aliados",
    desc: "Colaboración con creadores de contenido del sector veterinario y bienestar animal para demostrar la veracidad de la personalización de los kits físicos."
  }
];

export const cimData: Record<CimCategoryKey, CimDataEntry> = {
  advertising: {
    title: "Publicidad",
    sub: "Creativa, Emocional y de Impacto",
    icon: Tv,
    gradient: "from-teal-500 to-teal-600",
    text: "Uso estratégico de Instagram, TikTok y Facebook con anuncios que tocan fibras emocionales al mostrar mascotas reales. Explicamos cómo el algoritmo de TAOP selecciona componentes según tipo de pelaje, sensibilidad, edad, tamaño y dieta.",
    tactics: [
      "Videos demostrativos de mascotas reales usando el kit.",
      "Anuncios sobre la personalización del algoritmo.",
      "Contenido enfocado en dueños que consideran a las mascotas familia."
    ]
  },
  promotion: {
    title: "Promoción de Ventas",
    sub: "Incentivo inmediato y conversión",
    icon: Percent,
    gradient: "from-amber-500 to-amber-600",
    text: "Diseñamos mecánicas que invitan a la acción inmediata y aseguran la recopilación de datos de la mascota para brindar un servicio personalizado de alta calidad.",
    tactics: [
      "15% de descuento en el primer kit al completar el perfil detallado.",
      "Envíos gratis en compras superiores a montos específicos.",
      "Descuentos cruzados y promociones en fechas especiales de mascotas.",
      "Puntos acumulables para compras y recompensas de recompra."
    ]
  },
  publicRelations: {
    title: "Relaciones Públicas",
    sub: "Credibilidad y Confianza Social",
    icon: HeartHandshake,
    gradient: "from-rose-500 to-rose-600",
    text: "Construimos reputación de marca a través del valor social y el respaldo científico, posicionándonos como defensores del bienestar y cuidado animal responsable.",
    tactics: [
      "Alianzas activas con refugios de mascotas y campañas de adopción.",
      "Validación en blogs de tecnología, emprendimiento e innovación.",
      "Difusión de manuales educativos validados por médicos veterinarios."
    ]
  },
  personalSales: {
    title: "Ventas Personales",
    sub: "El factor humano en cada contacto",
    icon: Users2,
    gradient: "from-emerald-500 to-emerald-600",
    text: "Aunque la compra es digital, el cliente nunca está solo. Implementamos asesores presenciales y virtuales con amplio conocimiento en bienestar animal.",
    tactics: [
      "Atención y soporte humano directo vía WhatsApp y redes sociales.",
      "'Asesores de Bienestar' interactuando en ferias y eventos físicos.",
      "Recomendación en tiempo real para mascotas con patologías específicas."
    ]
  },
  directMarketing: {
    title: "Marketing Directo",
    sub: "Relaciones directas a largo plazo",
    icon: Send,
    gradient: "from-purple-500 to-purple-600",
    text: "Mantenemos un canal de comunicación directo con cada cliente gracias a los datos recopilados de su mascota en nuestro portal web.",
    tactics: [
      "Correos electrónicos personalizados según la edad/raza de la mascota.",
      "Recordatorios de recompra justo antes de que se agoten los productos.",
      "Alertas con ofertas en el mes del cumpleaños de la mascota."
    ]
  }
};
