"use client";

import React, { useEffect, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { SlideUpText } from "./SlideUpText";
import AnimatedOnScroll from "./AnimatedOnScroll";

export const achievements = [
  {
    title: "Silver Medal – MiiEX 2023",
    description: "Awarded for a health-focused food delivery app at the Macao International Innovation Invention Expo.",
    date: "October 2023",
    icon: "🥈",
  },
  {
    title: "Best Business Model – Hong Kong Yan Chai STEAM Faire",
    description: "Recognized for presenting the most innovative business model solution.",
    date: "October 2023",
    icon: "💡",
  },
];


const Achievements = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const updateState = () => {
      setCurrent(api.selectedScrollSnap());
    };

    updateState();
    api.on("select", updateState);
  }, [api]);

  return (
    <AnimatedOnScroll className="w-full" threshold={0.1} stagger={0.3} repeat>
      <main className="flex relative w-full flex-col space-y-12 animate-item">
        <div className="flex w-full justify-between items-center animate-item">
          <SlideUpText text="Achievements" className="text-2xl animate-item" highlightWords={["Achievements"]} />
          <div
            className={cn(
              "flex flex-row gap-3 px-6 py-3 transition-all duration-300",
              current === 0 ? "justify-end" : current === achievements.length - 1 ? "justify-start" : "justify-between"
            )}
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const newIndex = Math.max(current - 1, 0);
                api?.scrollTo(newIndex);
                setCurrent(newIndex);
              }}
              className={cn(
                "transition-all duration-300",
                current === 0 ? "opacity-0 scale-90 pointer-events-none" : "opacity-100 scale-100"
              )}
            >
              <MoveLeftIcon />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                const newIndex = Math.min(current + 1, achievements.length - 1);
                api?.scrollTo(newIndex);
                setCurrent(newIndex);
              }}
              className={cn(
                "transition-all duration-300",
                current === achievements.length - 1 ? "opacity-0 scale-90 pointer-events-none hidden" : "opacity-100 scale-100"
              )}
            >
              <MoveRightIcon />
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi} className="w-full animate-item">
          <CarouselContent>
            {achievements.map((item, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "basis-full md:basis-1/2 lg:basis-1/3 px-4 transition-all duration-300 animate-item",
                  current !== index && 
                  "blur-sm hover:blur-none scale-95 opacity-60 hover:opacity-100"
                )}
              >
                <Card className="hover:shadow-lg transition-transform hover:scale-105 h-full">
                  <CardContent className="flex flex-col gap-4 p-6 text-center items-center justify-center">
                    <div className="text-4xl">{item.icon}</div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                    <Badge variant="secondary">{item.date}</Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

      </main>
    </AnimatedOnScroll>
  );
};

export default Achievements;
