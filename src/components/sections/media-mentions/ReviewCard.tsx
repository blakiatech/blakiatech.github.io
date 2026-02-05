import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import type { Mention } from "@/data/mentions";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: any;
}

export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
  ({ item, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "group relative bg-white dark:bg-zinc-900/50 border border-border/40 dark:border-white/10 backdrop-blur-sm hover:border-secondary/50 transition-all duration-500 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(94,23,235,0.15)] overflow-hidden h-full flex flex-col rounded-3xl text-left",
          className,
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Card Image if available */}
        {item.image && (
          <div className="w-full h-48 overflow-hidden relative border-b border-border/40 dark:border-white/5">
            <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
            />
            <Badge
              variant="secondary"
              className="absolute top-3 right-3 z-20 text-[10px] uppercase tracking-widest bg-secondary text-black font-bold border-none shadow-lg"
            >
              {item.category}
            </Badge>
          </div>
        )}

        <CardHeader
          className={`space-y-4 pb-4 relative z-10 ${item.image ? "pt-6" : ""}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-lg bg-muted dark:bg-zinc-950 flex items-center justify-center font-bold text-sm text-foreground dark:text-white border border-border/50 dark:border-white/10 shadow-inner group-hover:border-secondary/50 transition-colors">
                {item.logo}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-wider uppercase text-muted-foreground dark:text-zinc-400 group-hover:text-primary dark:group-hover:text-secondary transition-colors">
                  {item.source}
                </span>
                <span className="text-[10px] text-muted-foreground dark:text-zinc-500 font-medium">
                  Cobertura Internacional
                </span>
              </div>
            </div>
          </div>
          <CardTitle className="text-xl md:text-2xl font-bold leading-snug text-foreground dark:text-white group-hover:text-primary transition-colors text-left">
            {item.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col justify-between relative z-10">
          <p className="text-muted-foreground dark:text-zinc-400 line-clamp-3 text-sm leading-relaxed mb-6 font-light text-left group-hover:text-foreground dark:group-hover:text-zinc-300 transition-colors">
            {item.summary}
          </p>
          <div className="flex items-center justify-between pt-4 border-t border-border/40 dark:border-white/5 mt-auto group-hover:border-secondary/20 transition-colors">
            <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-zinc-500 group-hover:text-foreground dark:group-hover:text-zinc-400">
              <Calendar className="size-3.5" />
              {new Date(item.date).toLocaleDateString("es-ES", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </div>
            <span className="flex items-center gap-1.5 text-xs font-bold text-primary group-hover:text-secondary transition-colors">
              LEER ARTÍCULO{" "}
              <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </CardContent>
      </Card>
    );
  },
);

ReviewCard.displayName = "ReviewCard";
