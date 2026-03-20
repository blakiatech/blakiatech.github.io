import { Clock, Settings, TrendingUp } from "lucide-react";

export type Benefit = {
  title: string;
  description: string;
  icon: typeof Clock;
};

export const benefits: Benefit[] = [
  {
    title: "Ahorra tiempo y recursos",
    description:
      "Eliminamos tareas repetitivas como agendamiento, seguimiento, envío de correos...",
    icon: Clock,
  },
  {
    title: "Optimiza procesos",
    description: "Operaciones clave con precisión.",
    icon: Settings,
  },
  {
    title: "Resultados visibles",
    description: "Impacto desde el primer mes.",
    icon: TrendingUp,
  },
];