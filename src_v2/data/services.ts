import {
  Headphones,
  MessageSquare,
  TrendingUp,
  Phone,
  Clock,
  Sparkles,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: typeof Headphones;
};

export const services: Service[] = [
  {
    title: "Soporte 24/7",
    description:
      "Atención automática, integración personalizada y flujos automatizados.",
    icon: Headphones,
  },
  {
    title: "Reduce carga operativa",
    description: "WhatsApp, Web, Instagram...",
    icon: MessageSquare,
  },
  {
    title: "Incrementa ventas",
    description: "Leads cualificados automáticamente.",
    icon: TrendingUp,
  },
  {
    title: "Llamada telefónica",
    description: "Consultas sin manos integradas en llamadas reales.",
    icon: Phone,
  },
  {
    title: "Disponibilidad total",
    description: "Ejecutan tareas, responden o controlan sistemas 24/7.",
    icon: Clock,
  },
  {
    title: "Innovación real",
    description: "UX con voz como canal principal.",
    icon: Sparkles,
  },
];