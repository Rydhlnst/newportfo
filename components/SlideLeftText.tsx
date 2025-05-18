"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type SlideLeftTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function SlideLeftText({ text, delay = 0, className = "" }: SlideLeftTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -40 },
      { opacity: 1, x: 0, duration: 1, delay, ease: "power3.out" }
    );
  }, [delay]);

  return (
    <p ref={textRef} className={cn("opacity-0", className)}>
      {text}
    </p>
  );
}
