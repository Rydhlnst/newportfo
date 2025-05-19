"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import React from "react";
import { Button } from "./ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { AnimatedWrapper } from "./AnimatedWrapper";
import { SlideUpText } from "./SlideUpText";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "AI Note Summarizer",
    description: "Summarize notes efficiently using AI-powered models.",
    image: "/images/project1.png",
    link: "https://example.com/project1",
  },
  {
    title: "Mamang",
    description: "Belum tau.",
    image: "/images/project2.png",
    link: "https://example.com/project2",
  },
  {
    title: "Personal Portfolio",
    description: "A modern portfolio built with Next.js and GSAP animations.",
    image: "/images/project3.png",
    link: "https://example.com/project3",
  },
];

export default function OngoingProjectsCarousel() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
 
  React.useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])
  return (
    <div>
        <div className="flex w-full justify-between items-center flex-row mb-3">
          <SlideUpText text="Ongoing Project" className="text-2xl" highlightWords={["Project"]}/>
          <div className="flex flex-row space-x-3">
              <Button variant={"outline"} size={"icon"} onClick={() => api?.scrollTo(current - 1)}><MoveLeftIcon/></Button>
              <Button variant={"outline"} size={"icon"} onClick={() => api?.scrollTo(current + 1)}><MoveRightIcon/></Button>
          </div>
        </div>
        <Carousel className="w-full flex items-start mx-auto" setApi={setApi} opts={{loop: true}}>
        <CarouselContent>
            {projects.map((project, index) => (
            <CarouselItem key={index} className="basis-full">
                <AnimatedWrapper animation="slide-up" triggerAnimation={current === index}>
                    <Card className="hover:shadow-lg transition-all h-full">
                    <CardContent className="flex flex-col items-center text-center p-4 gap-4">
                        <AspectRatio ratio={21/9} className="lg:w-full rounded-lg overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                        </AspectRatio>
                        <div className="flex w-full flex-col items-start px-6 border-t pt-6">
                            <h3 className="text-lg font-semibold">{project.title}</h3>
                            <div className="flex w-full items-center justify-between">
                                <p className="text-sm text-muted-foreground">{project.description}</p>
                                <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:underline text-sm"
                                >
                                View Project →
                                </a>
                            </div>
                        </div>
                    </CardContent>
                    </Card>
                </AnimatedWrapper>
            </CarouselItem>
            ))}
        </CarouselContent>
            <div className="hidden lg:flex flex-col gap-3 w-3/12 px-6 py-3">
                    <div className="flex flex-col">
                        <h1 className="text-xl">{projects[current]?.title}</h1>
                        <p className="text-muted-foreground">{projects[current]?.description}</p>
                    </div>
                <div className="flex flex-row space-x-3">
                    <Button variant={"outline"} size={"icon"} onClick={() => api?.scrollTo(current - 1)}><MoveLeftIcon/></Button>
                    <Button variant={"outline"} size={"icon"} onClick={() => api?.scrollTo(current + 1)}><MoveRightIcon/></Button>
                </div>
            </div>
        </Carousel>
    </div>
  );
}
