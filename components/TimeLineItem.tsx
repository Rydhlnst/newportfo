"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  align?: "left" | "right";
};

gsap.registerPlugin(ScrollTrigger);

export function TimelineItem({
  year,
  title,
  description,
  align = "left",
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "timeline-item grid grid-cols-9 w-full min-h-screen items-center snap-start px-4"
      )}
    >
      {align === "left" && (
        <>
          <div className="col-span-4 flex justify-end">
            <div className="timeline-card text-right">
              <h3 className="timeline-year">{year}</h3>
              <h4 className="timeline-title">{title}</h4>
              <p className="timeline-description">{description}</p>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
          </div>
          <div className="col-span-4"></div>
        </>
      )}

      {align === "right" && (
        <>
          <div className="col-span-4"></div>
          <div className="col-span-1 flex justify-center">
            <div className="w-4 h-4 bg-primary rounded-full shadow-lg"></div>
          </div>
          <div className="col-span-4 flex justify-start">
            <div className="timeline-card text-left">
              <h3 className="timeline-year">{year}</h3>
              <h4 className="timeline-title">{title}</h4>
              <p className="timeline-description">{description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
