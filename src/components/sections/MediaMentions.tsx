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
        <section id="press" className="py-24 bg-canvas text-foreground relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-1/3 h-2/3 bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-secondary/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="flex flex-col items-center mb-16 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
                        BlakIA en la <span className="title-outline-purple">Prensa</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
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
                        <CarouselPrevious className="hidden md:flex -left-12 border-border bg-background/50 hover:bg-primary hover:text-primary-foreground" />
                        <CarouselNext className="hidden md:flex -right-12 border-border bg-background/50 hover:bg-primary hover:text-primary-foreground" />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}