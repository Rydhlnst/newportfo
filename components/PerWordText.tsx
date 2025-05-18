"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type PerWordTextProps = {
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[]; // Tambahan untuk highlight
};

export function PerWordText({ 
  text, 
  delay = 0, 
  className = "", 
  highlightWords = [] 
}: PerWordTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");
    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay, text]); 
  
  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-1", className)}>
      {text.split(" ").map((word, idx) => {
        const cleanWord = word.replace(/[.,]/g, ""); // Remove punctuation
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <span
            key={idx}
            className={cn(
              "word opacity-0 inline-block",
              isHighlighted && "font-semibold text-primary"
            )}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
}
