import React from "react";
import { cn } from "@/lib/utils";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

interface Person {
    id: number;
    name: string;
    designation: string;
    image?: string;
    initials: string;
}

export const InteractiveAvatarStack = ({
    items,
    extraCount,
}: {
    items: Person[];
    extraCount?: number;
}) => {
    return (
        <TooltipProvider>
            <div className="flex flex-row items-center justify-center w-full -space-x-4">
                {items.map((item, idx) => (
                    <Tooltip key={item.name}>
                        <TooltipTrigger asChild>
                            <div
                                className="group relative hover:z-50 hover:scale-110 transition-transform duration-200 ease-in-out cursor-pointer"
                            >
                                {/* Avatar Circle */}
                                <div className="relative w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden shadow-lg group-hover:border-primary/50 transition-colors">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground">
                                            {item.initials}
                                        </span>
                                    )}

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </TooltipTrigger>
                        <TooltipContent>
                            <div className="text-xs">
                                <div className="font-bold">{item.name}</div>
                                <div className="text-muted-foreground text-[10px]">{item.designation}</div>
                            </div>
                        </TooltipContent>
                    </Tooltip>
                ))}

                {/* Counter Bubble */}
                {extraCount !== undefined && extraCount > 0 && (
                    <div className="relative z-10 w-12 h-12 rounded-full border-2 border-background bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg">
                        +{extraCount}
                    </div>
                )}
            </div>
        </TooltipProvider>
    );
};
