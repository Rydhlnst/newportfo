"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

type AnimatedOnScrollProps = {
  children: React.ReactNode;
  className?: string;
    onTrigger?: () => void;
  stagger?: number;
  threshold?: number;
  repeat?: boolean;
};

export default function AnimatedOnScroll({
  children,
  className = "",
  stagger = 0.2,
  threshold = 0.1,
  repeat = false,
  onTrigger,
}: AnimatedOnScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            onTrigger?.();
          const elements = containerRef.current?.querySelectorAll(".animate-item") || [];

          elements.forEach((el, index) => {
            const reactFiberKey = Object.keys(el).find((key) =>
              key.startsWith("__reactFiber$")
            );
            const fiberNode = reactFiberKey ? (el as any)[reactFiberKey] : null;

            const instance = fiberNode?.return?.stateNode;

            // Jika ada triggerAnim di instance, panggil method itu (PerWordText)
            if (instance?.triggerAnim) {
              setTimeout(() => instance.triggerAnim(), index * stagger * 1000);
            } else {
              // Fallback untuk elemen biasa
              gsap.fromTo(
                el,
                { opacity: 0, y: 50 },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  delay: index * stagger,
                  ease: "power3.out",
                }
              );
            }
          });

          if (!repeat) observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [stagger, threshold, repeat]);

  return (
    <div ref={containerRef} className={cn(className)}>
      {children}
    </div>
  );
}
