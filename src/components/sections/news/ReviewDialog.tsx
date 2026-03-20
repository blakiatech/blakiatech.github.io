import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, Clock, Newspaper, ExternalLink } from "lucide-react";

interface ReviewDialogProps {
    item: any; // Using any for now, ideally strictly typed
}

export function ReviewDialog({ item }: ReviewDialogProps) {
    return (
        <DialogContent className="sm:max-w-[800px] bg-background border-border shadow-2xl text-foreground gap-0 p-0 overflow-hidden max-h-[90vh] flex flex-col">
            <div className="overflow-y-auto custom-scrollbar">
                {/* Dialog Content Header */}
                <DialogHeader className="p-0 relative bg-surface border-b border-border">
                    {item.image && (
                        <div className="w-full h-64 md:h-80 relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent z-10" />
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className={`p-8 pb-6 relative z-10 ${item.image ? '-mt-24' : ''}`}>
                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <div className={`flex items-center gap-2 ${item.image ? 'bg-background/60 backdrop-blur-sm p-1 rounded-full pr-3 border border-border' : ''}`}>
                                    <Badge variant="outline" className={`border-primary/20 uppercase tracking-widest text-[10px] ${item.image ? 'bg-background/80 text-primary border-primary/50' : 'bg-primary/10 text-primary'}`}>
                                        {item.category}
                                    </Badge>
                                    <span className={`text-xs uppercase tracking-wider font-semibold pl-2 ${item.image ? 'text-foreground border-l border-border' : 'text-muted-foreground border-l border-border'}`}>
                                        {item.source}
                                    </span>
                                </div>
                            </div>
                            <span className={`text-xs font-mono ${item.image ? 'text-foreground bg-background/50 px-2 py-1 rounde-md backdrop-blur border border-border' : 'text-muted-foreground'}`}>
                                {new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: '2-digit', day: '2-digit' })}
                            </span>
                        </div>

                        <DialogTitle className="text-3xl md:text-4xl font-serif font-bold text-foreground leading-tight text-left mb-4 drop-shadow-sm">
                            {item.title}
                        </DialogTitle>

                        <p className="text-lg text-muted-foreground font-light leading-relaxed text-left border-l-2 border-primary pl-4 bg-background/50 p-2 rounded-r-lg">
                            {item.summary}
                        </p>

                        <div className="flex items-center gap-4 mt-6 pt-6 border-t border-border">
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                    <User className="size-4" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="text-xs font-bold text-foreground uppercase tracking-wide">Por {item.author || "Redacción"}</span>
                                    <span className="text-[10px] text-muted-foreground">Redacción {item.source}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground ml-auto bg-muted px-2 py-1 rounded">
                                <Clock className="size-3" />
                                <span>3 min de lectura</span>
                            </div>
                        </div>
                    </div>
                </DialogHeader>

                <div className="p-8 space-y-6 text-left bg-canvas">
                    <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed font-serif">
                        {item.content && item.content.map((paragraph: string, index: number) => (
                            <p key={index} className={index === 0 ? "first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-8px]" : ""}>
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    <div className="my-8 p-6 bg-surface/50 rounded-xl border border-border flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                            <Newspaper className="size-4 text-primary" />
                            Fuente Original
                        </h4>
                        <p className="text-sm text-muted-foreground">
                            Este artículo fue publicado originalmente en <strong>{item.source}</strong>. Puedes leer la versión completa, incluyendo contenido multimedia adicional, en su sitio web.
                        </p>
                        <Button asChild className="w-full sm:w-auto self-start group bg-primary text-primary-foreground hover:bg-primary/90 mt-2">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                Leer en {item.source}
                                <ExternalLink className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </DialogContent>
    );
}
