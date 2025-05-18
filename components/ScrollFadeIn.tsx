"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

type ScrollFadeInProps = {
  children: React.ReactNode;
  className?: string;
  start?: string;
  end?: string;
  once?: boolean;
  fadeOut?: boolean;
  scrub?: boolean;
  yOffset?: number;
};

export function ScrollFadeIn({
  children,
  className = "",
  start = "top 90%",
  end = "bottom 20%",
  once = false, // Default to false for restartable animations
  fadeOut = false,
  scrub = false,
  yOffset = 100,
}: ScrollFadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const toggleActions = once
      ? "play none none none"
      : fadeOut
      ? "restart reverse restart reverse" // Play when entering, reverse when leaving
      : "restart none none none"; // Restart animation each time in view

    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: yOffset },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          toggleActions,
        },
      }
    );

    return () => {
      anim.scrollTrigger?.kill();
      anim.kill();
    };
  }, [start, end, once, fadeOut, scrub, yOffset]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
