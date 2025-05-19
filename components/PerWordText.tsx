"use client";

import { useRef, useEffect, useImperativeHandle, forwardRef, useCallback } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type PerWordTextProps = {
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  triggerAnimation?: boolean; // Jika false, harus dipicu manual via ref
  stagger?: number;
};

export type PerWordTextHandle = {
  triggerAnim: () => void;
};

const PerWordText = forwardRef<PerWordTextHandle, PerWordTextProps>(({
  text,
  delay = 0,
  className = "",
  highlightWords = [],
  triggerAnimation = true,
  stagger = 0.1,
}, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const triggerAnim = useCallback(() => {
    const words = containerRef.current?.querySelectorAll(".word");
    if (words) {
      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ease: "power3.out",
          delay,
        }
      );
    }
  }, [stagger, delay]);

  useEffect(() => {
    // Auto trigger jika tidak diatur manual atau explicitly true
    if (triggerAnimation === undefined || triggerAnimation) {
      triggerAnim();
    }
  }, [triggerAnimation, triggerAnim]);

  // Expose triggerAnim ke parent lewat ref (untuk manual control)
  useImperativeHandle(ref, () => ({ triggerAnim }));

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-1", className)}>
      {text.split(" ").map((word, idx) => {
        const cleanWord = word.replace(/[.,]/g, ""); // Bersihkan tanda baca
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
});

PerWordText.displayName = "PerWordText"; // Fix error forwardRef

export { PerWordText };
