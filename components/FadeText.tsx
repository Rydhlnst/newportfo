"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type FadeTextProps = {
  text: string;
  delay?: number;
  className?: string;
};

export function FadeText({ text, delay = 0, className = "" }: FadeTextProps) {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1, delay, ease: "power3.out" }
    );
  }, [delay]);

  return (
    <p ref={textRef} className={cn("opacity-0", className)}>
      {text}
    </p>
  );
}
