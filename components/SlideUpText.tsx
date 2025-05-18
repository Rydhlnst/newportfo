"use client"

import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type SlideUpTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateOnce?: boolean;
  triggerAnimation?: boolean;
  onAnimationEnd?: () => void;
  highlightWords?: string[]; 
};

export function SlideUpText({
  text,
  delay = 0,
  className = "",
  animateOnce = false,
  triggerAnimation = true,
  onAnimationEnd,
  highlightWords = [],
}: SlideUpTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (animateOnce && hasAnimated) return;
    if (!triggerAnimation) return;

    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay,
          ease: "power3.out",
          onComplete: () => {
            if (animateOnce) setHasAnimated(true);
            onAnimationEnd?.();
          },
        }
      );
    }
  }, [triggerAnimation, text, delay, animateOnce, hasAnimated, onAnimationEnd]);

  return (
    <div ref={textRef} className={cn("flex flex-wrap gap-1", className)}>
      {text.split(" ").map((word, idx) => {
        const cleanWord = word.replace(/[.,]/g, ""); // Remove punctuation
        const isHighlighted = highlightWords.includes(cleanWord);

        return (
          <span
            key={idx}
            className={cn(
              "word inline-block",
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
