import { Github, Linkedin, Instagram } from "lucide-react";

const SOCIAL_LINKS = [
    {
        name: "GitHub",
        href: "https://github.com/blakiatech",
        icon: Github,
    },
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

interface SocialLinksProps {
    className?: string;
}

export function SocialLinks({ className }: SocialLinksProps) {
    return (
        <div className={`flex gap-4 ${className}`}>
            {SOCIAL_LINKS.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors hover:bg-primary/10 p-2 rounded-full"
                >
                    <span className="sr-only">{link.name}</span>
                    <link.icon className="h-5 w-5" />
                </a>
            ))}
        </div>
    );
}
