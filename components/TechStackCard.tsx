"use client";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type TechStackCardProps = {
  icon: React.ReactNode;
  title: string;
  category?: string;
  className?: string;
  delay?: number; // Opsional untuk tambahan delay jika diperlukan
};

export function TechStackCard({ icon, title, category, className, delay = 0 }: TechStackCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 40, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [delay]);

  return (
    <div ref={cardRef}>
      <Card className={cn("p-4 text-center shadow-md rounded-2xl transition-transform", className)}>
        <CardContent className="flex flex-col items-center gap-2">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-lg font-semibold">{title}</h3>
          {category && <p className="text-muted-foreground text-sm">{category}</p>}
        </CardContent>
      </Card>
    </div>
  );
}
