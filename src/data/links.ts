import { Cpu, Send, Sparkles, Linkedin, Instagram } from "lucide-react";

export const NAV_LINKS = [
    { name: "Casos de éxito", href: "/#success_stories", icon: Sparkles },
    { name: "Noticias", href: "/#news", icon: Sparkles },
    { name: "Nuestros productos", href: "/#products", icon: Cpu },
    { name: "Contacto", href: "/#contact", icon: Send },
];

export const FOOTER_LINKS = [
    { name: "Casos de éxito", href: "/#success_stories" },
    { name: "Noticias", href: "/#news" },
    { name: "Nuestros productos", href: "/#products" },
    { name: "Contacto", href: "/#contact" },
];

export const LEGAL_LINKS = [
    { name: "Política de Privacidad", href: "/privacy" },
    { name: "Política de Cookies", href: "/privacy" },
    { name: "Aviso Legal", href: "/privacy" },
];

export const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/blakiatech",
        icon: Linkedin,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/blakiatech/",
        icon: Instagram,
    },
];