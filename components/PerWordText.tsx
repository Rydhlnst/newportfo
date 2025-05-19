"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type PerWordTextProps = {
  text: string;
  delay?: number;
  className?: string;
  highlightWords?: string[];
  order?: number; // ✅ Tambahan untuk menentukan urutan animasi
  chainDelay?: number
};

export function PerWordText({
  text,
  delay = 0,
  className = "",
  highlightWords = [],
  chainDelay = 0.5,
  order = 0, // ✅ Default urutan ke-0 jika tidak diberikan
}: PerWordTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const words = containerRef.current?.querySelectorAll(".word");
    if (words) {
      const totalDurationPerWord = 0.6; // Durasi animasi tiap kata
      const staggerDelay = 0.1;
      // const totalWords = words.length;
      // const totalAnimationTime = totalDurationPerWord * totalWords;

      gsap.fromTo(
        words,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: totalDurationPerWord,
          stagger: staggerDelay,
          delay: delay + order * chainDelay, // ✅ Delay dinamis berdasarkan urutan
          ease: "power3.out",
        }
      );
    }
  }, [delay, text, order, chainDelay]);

  return (
    <div ref={containerRef} className={cn("flex flex-wrap gap-1", className)}>
      {text.split(" ").map((word, idx) => {
        const cleanWord = word.replace(/[.,]/g, "");
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
