import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import type { Mention } from "@/data/mentions"; // Assuming type definition exists or I will define it if not found.

// I'll assume mentions structure based on usage. 
// If type doesn't exist, I'll use any or define an interface temporarily.
// Usage suggests: id, image, title, category, source, logo, summary, date, url, content, author

import { forwardRef } from "react";
// ... imports

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
    item: any;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(({ item, className, ...props }, ref) => {
    return (
        <Card
            ref={ref}
            className={`group relative bg-surface border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 overflow-hidden h-full flex flex-col ${className}`}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Card Image if available */}
            {item.image && (
                <div className="w-full h-48 overflow-hidden relative border-b border-border">
                    <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <Badge variant="secondary" className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-widest bg-secondary backdrop-blur border-secondary text-secondary-foreground shadow-lg">{item.category}</Badge>
                </div>
            )}

            <CardHeader className={`space-y-4 pb-4 relative z-10 ${item.image ? 'pt-6' : ''}`}>
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-muted flex items-center justify-center font-bold text-sm text-foreground border border-border shadow-inner">
                            {item.logo}
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground">{item.source}</span>
                            <span className="text-[10px] text-muted-foreground font-medium">Cobertura Internacional</span>
                        </div>
                    </div>
                </div>
                <CardTitle className="text-xl md:text-2xl font-bold leading-snug text-foreground group-hover:text-primary transition-colors text-left font-serif">
                    {item.title}
                </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col justify-between relative z-10">
                <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed mb-6 font-light text-left">
                    {item.summary}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="size-3.5" />
                        {new Date(item.date).toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                    <span className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:gap-2 transition-all">
                        LEER ARTÍCULO <ArrowRight className="size-3.5" />
                    </span>
                </div>
            </CardContent>
        </Card>
    );
});

ReviewCard.displayName = "ReviewCard";
