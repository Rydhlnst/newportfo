"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type PerLetterTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function PerLetterText({ text, delay = 0, className = "" }: PerLetterTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll(".letter");
    if (letters) {
      gsap.fromTo(
        letters,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.05,
          delay,
          ease: "power3.out",
        }
      );
    }
  }, [delay]);

  return (
    <div ref={containerRef} className={cn("inline-block", className)}>
      {text.split("").map((letter, idx) => (
        <span key={idx} className="letter opacity-0 inline-block">
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </div>
  );
}
