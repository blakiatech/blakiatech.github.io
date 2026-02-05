import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import { mentions } from "@/data/mentions";
import Autoplay from "embla-carousel-autoplay";
import { ReviewCard } from "./media-mentions/ReviewCard";
import { ReviewDialog } from "./media-mentions/ReviewDialog";

export function MediaMentions() {
    return (
        <section id="press" className="py-32 relative overflow-hidden bg-background dark:bg-zinc-950 text-foreground dark:text-white transition-colors duration-300">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-primary/10 dark:bg-primary/20 blur-[100px] rounded-full -z-10 pointer-events-none opacity-50" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/10 blur-[120px] rounded-full -z-10 pointer-events-none opacity-30" />
            
            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground dark:text-white leading-tight">
                        BlakIA en la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-600 to-purple-400 dark:to-purple-300">Prensa</span>
                    </h2>
                    <p className="text-muted-foreground dark:text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
                        Nuestra tecnología y visión analizada por los referentes de la industria.
                    </p>
                </div>

                <div className="px-4 md:px-12">
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[
                            Autoplay({
                                delay: 4000,
                                stopOnMouseEnter: true,
                                stopOnInteraction: false,
                            }),
                        ]}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {mentions.map((item) => (
                                <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/3 h-auto">
                                    <div className="h-full py-1">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <ReviewCard item={item} />
                                            </DialogTrigger>
                                            <ReviewDialog item={item} />
                                        </Dialog>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12 border-border/50 dark:border-white/10 bg-background/50 dark:bg-zinc-900/50 hover:bg-primary hover:text-white text-foreground dark:text-white" />
                        <CarouselNext className="hidden md:flex -right-12 border-border/50 dark:border-white/10 bg-background/50 dark:bg-zinc-900/50 hover:bg-primary hover:text-white text-foreground dark:text-white" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}