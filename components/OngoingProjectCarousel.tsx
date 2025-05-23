"use client";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import React, { useState, useEffect, useMemo, useCallback } from "react"; // Ditambahkan useCallback
import { Button } from "./ui/button";
import { ImageOff, MoveLeftIcon, MoveRightIcon } from "lucide-react";
import { AnimatedWrapper } from "./AnimatedWrapper";
import { SlideUpText } from "./SlideUpText";
import { OnGoingProjectDatas, techIconMap } from "@/lib/data";
import { Badge } from "./ui/badge";
import { Skeleton } from "./ui/skeleton";

interface OngoingProjectsCarouselProps {
  project: Record<string, OnGoingProjectDatas>;
}

function OngoingProjectsCarousel({ project }: OngoingProjectsCarouselProps) {
  // Solusi No. 6: Ubah hasImageError menjadi state per item
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
    return () => {
      // Pastikan fungsi yang di-off sama dengan yang di-on
      // Jika setCurrent langsung digunakan, maka tidak perlu fungsi anonim baru
      // Namun, karena setCurrent berasal dari useState, referensinya stabil
      // jadi ini seharusnya aman.
      api?.off("select", () => setCurrent(api.selectedScrollSnap()));
    };
  }, [api]);

  const projectKeys = useMemo(() => Object.keys(project), [project]);
  const projectValues = useMemo(() => Object.values(project), [project]);

  const currentProject = useMemo(
    () => projectValues[current],
    [projectValues, current]
  );
  const currentKey = useMemo(
    () => projectKeys[current],
    [projectKeys, current]
  );

  const handlePrev = useCallback(() => {
    api?.scrollPrev(); // Menggunakan scrollPrev() dari API carousel untuk looping yang lebih baik
  }, [api]);

  const handleNext = useCallback(() => {
    api?.scrollNext(); // Menggunakan scrollNext() dari API carousel untuk looping yang lebih baik
  }, [api]);

  return (
    <div>
      <div className="flex w-full justify-between items-center flex-row mb-3">
        <SlideUpText
          text="Ongoing Project"
          className="text-2xl"
          highlightWords={["Project"]}
        />
        <div className="flex flex-row space-x-3">
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            aria-label="Previous Project"
            disabled={!api?.canScrollPrev()} // Nonaktifkan jika tidak bisa scroll
          >
            <MoveLeftIcon />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            aria-label="Next Project"
            disabled={!api?.canScrollNext()} // Nonaktifkan jika tidak bisa scroll
          >
            <MoveRightIcon />
          </Button>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row gap-6">
        <div className="xl:w-2/3 w-full">
          <Carousel
            className="w-full flex items-start mx-auto"
            setApi={setApi}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {projectKeys.map((key, index) => {
                const value = project[key];
                return (
                  <CarouselItem key={key} className="basis-full w-fit">
                    <AnimatedWrapper
                      animation="slide-up"
                      triggerAnimation={current === index}
                    >
                      <Card className="hover:shadow-lg transition-all h-full">
                        <CardContent className="flex flex-col items-center text-center p-4 gap-4">
                          <AspectRatio
                            ratio={21 / 9}
                            className="lg:w-full rounded-lg overflow-hidden bg-muted"
                          >
                            {!imageErrors[key] &&
                            value.images &&
                            value.images.length > 0 ? (
                              <Image
                                src={value.images[0]}
                                alt={value.title}
                                fill
                                loading="lazy"
                                onError={() =>
                                  setImageErrors((prevErrors) => ({
                                    ...prevErrors,
                                    [key]: true,
                                  }))
                                }
                                className="object-contain"
                              />
                            ) : (
                              <div className="w-full h-full relative">
                                <Skeleton className="w-full h-full" />
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground gap-2">
                                  <ImageOff className="w-8 h-8" />
                                  <span className="text-sm">
                                    Oops! Gambar tidak ditemukan
                                  </span>
                                </div>
                              </div>
                            )}
                          </AspectRatio>

                          <div className="flex w-full flex-col items-start px-6 border-t pt-6">
                            <h3 className="text-lg font-semibold">
                              {value.title}
                            </h3>
                            <div className="flex w-full items-center justify-between">
                              <p className="text-sm text-muted-foreground text-start">
                                {value.description}
                              </p>
                              {value.live && (
                                <a
                                  href={value.live}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline text-sm"
                                >
                                  View Project →
                                </a>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedWrapper>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="hidden xl:flex flex-col gap-3 md:w-1/3 px-6 py-3">
          <div className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-3">
              <SlideUpText
                text={currentProject?.title}
                className="text-xl"
                delay={0}
              />
              <SlideUpText
                className="text-muted-foreground"
                text={currentProject?.description}
                delay={0.05}
              />
            </div>
            <div
              className="flex flex-col"
              key={`tech-stack-block-${currentKey}`}
            >
              <SlideUpText
                text="Tech Stack"
                className="text-xl mb-2"
                highlightWords={["Tech"]}
                delay={0.1}
              />
              <AnimatedWrapper
                className="flex flex-wrap gap-2"
                animation="slide-up"
                delay={0.15}
                key={current} // key={current} akan me-remount saat slide berubah, memicu animasi
              >
                {currentProject?.tech.map((tech) => {
                  const Icon = techIconMap[tech];
                  return (
                    <Badge
                      key={`${tech}-${currentKey}`}
                      variant="outline"
                      className="flex items-center gap-1 px-5 py-2"
                    >
                      {Icon && <Icon className="w-4 h-4 mr-1" />}
                      {tech}
                    </Badge>
                  );
                })}
              </AnimatedWrapper>
            </div>
            <div
              className="lg:block hidden space-y-3"
              key={`key-features-${currentKey}`}
            >
              <SlideUpText
                text="Key Features"
                highlightWords={["Key"]}
                className="text-xl font-semibold mb-2"
                delay={0.2}
              />
              <ul className="list-disc list-inside space-y-1">
                {currentProject?.features.map((feature, i) => (
                  <li key={`${currentKey}-${i}`} className="flex">
                    <AnimatedWrapper
                      animation="slide-up"
                      delay={0.25 + i * 0.05}
                    >
                      {i + 1}. {feature}
                    </AnimatedWrapper>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OngoingProjectsCarousel;