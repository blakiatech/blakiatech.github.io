import { Linkedin } from "lucide-react";

const SOCIAL_LINKS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/hagalink-ai",
        icon: Linkedin,
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
