"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type PerWordTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function PerWordText({ text, delay = 0, className = "" }: PerWordTextProps) {
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
  }, [delay]);

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-1", className)}>
      {text.split(" ").map((word, idx) => (
        <span key={idx} className="word opacity-0 inline-block">
          {word}
        </span>
      ))}
    </div>
  );
}
