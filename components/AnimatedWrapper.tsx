"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "slide-left" | "slide-up";
  delay?: number;
  triggerAnimation?: boolean;
  onAnimationEnd?: () => void;
};

export function AnimatedWrapper({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  triggerAnimation = true,
  onAnimationEnd,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerAnimation || !ref.current) return;

    const el = ref.current;
    const animations = {
      "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
      "slide-left": { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      "slide-up": { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
    };

    const { from, to } = animations[animation];

    gsap.fromTo(el, from, {
      ...to,
      duration: 0.6,
      delay,
      ease: "power3.out",
      onComplete: () => {
        onAnimationEnd?.();
      },
    });
  }, [triggerAnimation, animation, delay, onAnimationEnd]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
