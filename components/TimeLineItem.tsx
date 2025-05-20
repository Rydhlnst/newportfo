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
        "timeline-item grid grid-cols-9 w-full min-h-[70vh] md:min-h-screen items-center snap-start px-4 relative"
      )}
    >
      {/* Titik tengah */}
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-md z-10" />

      {align === "left" && (
        <>
          <div className="col-span-9 md:col-span-4 md:col-start-1 z-10">
            <div className="timeline-card text-left md:text-right ml-8 md:ml-0">
              <h3 className="timeline-year">{year}</h3>
              <h4 className="timeline-title">{title}</h4>
              <p className="timeline-description">{description}</p>
            </div>
          </div>
        </>
      )}

      {align === "right" && (
        <>
          <div className="col-span-9 md:col-span-4 md:col-start-6 z-10">
            <div className="timeline-card text-left ml-8 md:ml-0">
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

