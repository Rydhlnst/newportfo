"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type SlideUpTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function SlideUpText({ text, delay = 0, className = "" }: SlideUpTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, delay, ease: "power3.out" }
    );
  }, [delay]);

  return (
    <p ref={textRef} className={cn("opacity-0", className)}>
      {text}
    </p>
  );
}
