"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import { SlideUpText } from "./SlideUpText";
import { PerWordText } from "./PerWordText";
import AnimatedOnScroll from "./AnimatedOnScroll";

interface PerWordTextHandle {
  triggerAnim: () => void;
}

export default function CVWidget() {
  const perWordRef = useRef<PerWordTextHandle>(null);

    useEffect(() => {
        perWordRef.current?.triggerAnim();
    }, []);

  return (
    <AnimatedOnScroll
      className="w-full"
      threshold={0.1}
      stagger={0.3}
      repeat
      onTrigger={() => perWordRef.current?.triggerAnim()} 
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center w-full justify-center">
        <div className="col-span-2 space-y-4">
          <SlideUpText 
            text="Curriculum Vitae" 
            className="text-2xl animate-item" 
            highlightWords={["Vitae"]} 
          />
          <PerWordText
            ref={perWordRef} 
            className="text-2xl md:text-3xl xl:text-6xl lg:text-4xl font-thin text-justify animate-item"
            text="Interested in collaborating or exploring new opportunities? Download my CV below for more detailed information."
            highlightWords={["Interested", "collaborating", "opportunities?", "detailed"]}
            triggerAnimation={false}
          />
        </div>
        <div className="w-full h-full justify-end items-end flex flex-col space-y-3 animate-item">
          <Button
            variant="outline"
            size="lg"
            className="flex items-center gap-2 mt-4 w-1/2"
            onClick={() => window.open("/files/my-cv.pdf", "_blank")}
          >
            <DownloadIcon className="w-4 h-4" />
            Download CV
          </Button>
        </div>
      </div>
    </AnimatedOnScroll>
  );
}
