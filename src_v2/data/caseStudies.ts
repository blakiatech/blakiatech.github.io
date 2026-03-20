import cordoba_ai from "@/assets/cordoba_ai.png";

export interface CaseStudy {
  title: string;
  client: string;
  url: string;
  description: string;
  metric: string;
  image: ImageMetadata;
  tags: string[];
}

export interface Person {
  id: number;
  name: string;
  designation: string;
  initials: string;
  image?: string;
}

export const cases: CaseStudy[] = [
  {
    title: "Cordob.ai - El ChatGPT de Córdoba",
    client: "Cordoba",
    url: "https://cordob.ai/",
    description:
      "IA generativa avanzada para resolver dudas ciudadanas y turísticas en tiempo real vía WhatsApp y Web.",
    metric: "+85% Eficiencia",
    image: cordoba_ai,
    tags: ["WhatsApp", "N8N", "AI Search"],
  },
];

export const people: Person[] = [
  {
    id: 1,
    name: "Ana García",
    designation: "CEO, TechStart",
    initials: "AG",
  },
  {
    id: 2,
    name: "Carlos Ruiz",
    designation: "CTO, Innova",
    initials: "CR",
  },
  {
    id: 3,
    name: "Laura M.",
    designation: "Ops Manager",
    initials: "LM",
  },
  {
    id: 4,
    name: "David B.",
    designation: "Founder",
    initials: "DB",
  },
];

export const totalClients = 0;
