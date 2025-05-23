"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type AnimationType = "fade-in" | "slide-left" | "slide-up";

type AnimatedWrapperProps = {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
  triggerAnimation?: boolean;
  onAnimationEnd?: () => void;
  stagger?: boolean;
};

export function AnimatedWrapper({
  children,
  className = "",
  animation = "fade-in",
  delay = 0,
  triggerAnimation = true,
  onAnimationEnd,
  stagger = false,
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!triggerAnimation || !ref.current) return;

    const el = ref.current;

    const animations: Record<AnimationType, { from: Partial<gsap.TweenVars>; to: Partial<gsap.TweenVars> }> = {
      "fade-in": { from: { opacity: 0 }, to: { opacity: 1 } },
      "slide-left": { from: { opacity: 0, x: -50 }, to: { opacity: 1, x: 0 } },
      "slide-up": { from: { opacity: 0, y: 50 }, to: { opacity: 1, y: 0 } },
    };

    const { from, to } = animations[animation];

    if (stagger) {
      requestAnimationFrame(() => {
        const items = el.querySelectorAll(".animate-item");
        if (!items.length) {
          console.warn("No .animate-item found inside AnimatedWrapper");
          return;
        }

        gsap.fromTo(
          items,
          from,
          {
            ...to,
            duration: 0.6,
            delay,
            stagger: 0.15,
            ease: "power3.out",
            onComplete: onAnimationEnd,
          }
        );
      });
    } else {
      gsap.fromTo(
        el,
        from,
        {
          ...to,
          duration: 0.6,
          delay,
          ease: "power3.out",
          onComplete: onAnimationEnd,
        }
      );
    }
  }, [triggerAnimation, animation, delay, onAnimationEnd, stagger]);

  return (
    <div ref={ref} className={cn("opacity-0", className)}>
      {children}
    </div>
  );
}
