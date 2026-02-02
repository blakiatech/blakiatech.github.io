import mention1 from "@/assets/mentions/mention1.webp";
import mention2 from "@/assets/mentions/mention2.webp";
import mention3 from "@/assets/mentions/mention3.webp";

export interface Mention {
    id: number;
    source: string;
    logo: string;
    category: string;
    title: string;
    date: string;
    summary: string;
    url: string;
    author: string;
    image?: string;
    content: string[];
}

export const mentions: Mention[] = [
    {
        id: 1,
        source: "Diario Córdoba",
        logo: "DC",
        category: "Entrevista",
        title: 'José Álvaro Ruiz, socio de Blakia: "Lo que más nos piden es automatizar la comunicación con el cliente con chatbot"',
        date: "2025-12-14",
        summary: "La agencia se dedica a implantar «la herramienta número 1, la IA» en las empresas, con objeto de ahorrar costes, aumentar la eficiencia operativa e incrementar la facturación.",
        url: "https://www.diariocordoba.com/cordoba-ciudad/2025/12/14/jose-alvaro-ruiz-socio-blakia-124759167.html",
        author: "Pilar Cobos",
        image: mention1.src,
        content: [
            "José Álvaro Ruiz tiene 25 años de edad y en enero de este año constituyó la agencia de inteligencia artificial avanzada Blakia junto a Francisco Olmedo. Se dedican a implantar «la herramienta número 1, la IA» en las empresas, con objeto de ahorrar costes, aumentar la eficiencia operativa e incrementar, finalmente, la facturación.",
            "«Somos capaces de diseñar herramientas complejas a medida, que pueden llegar a cualquier empresa, desde autónomos a grandes sociedades», explica. Valga como ejemplo uno de sus proyectos más conocidos, el chatbot de la Feria de Córdoba.",
            "Blakia, que es miembro de la Asociación de Jóvenes Empresarios (AJE), cuenta en la actualidad con el trabajo de sus dos socios, pero en 2026 espera incorporar a tres profesionales en prácticas, «con opciones reales de contratación»."
        ]
    },
    {
        id: 2,
        source: "Subbética Hoy",
        logo: "SH",
        category: "Premios",
        title: "BlakIA-Tech triunfa en los premios EmprendeUCO que reconoceren los mejores proyectos de jóvenes emprendedores",
        date: "2025-09-24",
        summary: "El proyecto BlakIA-Tech, una iniciativa vinculada a soluciones ligadas a la Inteligencia Artificial, ha sido la propuesta vencedora y ha recibido los 6.000 euros de premio.",
        url: "https://www.subbeticahoy.com/articulo/empresas/diputacion-cordoba-acoge-entrega-premios-emprendeuco-que-reconocen-mejores-proyectos-jovenes-emprendedores-provincia/20250924132916039627.html",
        author: "David Ramírez",
        image: mention2.src,
        content: [
            "El Palacio de la Merced, sede de la Diputación de Córdoba, ha acogido esta tarde la gala de entrega de los premios EmprendeUCO con los que se reconoce a los mejores proyectos presentados por jóvenes emprendedores de la provincia.",
            "El proyecto BlakIA-Tech, una iniciativa vinculada a soluciones ligadas a la Inteligencia Artificial, ha sido la propuesta vencedora y ha recibido los 6.000 euros de premio. La iniciativa, promovida por Francisco Manuel Olmedo y José Álvaro, consigue la mejora de la productividad y la reducción de costes operativos en el desarrollo de empresas.",
            "«La Diputación de Córdoba está y estará del lado de quien emprende, con un compromiso que se ha materializado en la financiación de este programa», ha afirmado Salvador Fuentes, presidente de la institución provincial."
        ]
    },
    {
        id: 3,
        source: "Diario Córdoba",
        logo: "DC",
        category: "Universidad",
        title: "Promotores de BlakIA Tech: \"Vimos que era una oportunidad única para aprender y validar nuestra idea\"",
        date: "2025-10-08",
        summary: "BlakIA Tech es el proyecto empresarial ganador de la última edición de EmprendeUCO-Diputación de Córdoba.",
        url: "https://www.diariocordoba.com/universidad/2025/10/08/promotores-blakia-tech-vimos-oportunidad-122386228.html",
        author: "Lucía Abad",
        image: mention3.src,
        content: [
            "BlakIA Tech es el proyecto empresarial ganador de la última edición de EmprendeUCO-Diputación de Córdoba. La idea nació cuando Francisco M. Olmedo, que llevaba tiempo trabajando con integraciones y automatizaciones basadas en inteligencia artificial, comprobó el gran ahorro de tiempo y la mejora de eficiencia que le aportaban en su día a día.",
            "Decidió entonces ofrecer estas soluciones a otras personas y conoció a José Álvaro Ruiz, quien buscaba implementar IA en su marca deportiva para optimizar procesos. A partir de esa colaboración inicial, ambos unieron esfuerzos para llevar estas herramientas a más empresas y ayudarlas a mejorar su rendimiento.",
            "«Tras concluir el programa estamos plenamente convencidos de que BlakIA tiene un futuro sólido. Nuestro objetivo es seguir ayudando a empresas a ser más eficientes y, al mismo tiempo, escalar nuestro negocio para generar un impacto mayor», defienden."
        ]
    },
];
