"use client";

import { historyData } from "@/lib/data";
import { TimelineItem } from "./TimeLineItem";
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Progress } from "./ui/progress";

gsap.registerPlugin(ScrollTrigger);

export default function TimelineSection() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  // Simulate loading state for progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 150); // Adjust speed as needed

    return () => clearInterval(interval);
  }, []);

   useEffect(() => {
        if (isLoading) return;

        const line = document.getElementById("progress-line");
        const sections = gsap.utils.toArray<HTMLElement>(".timeline-item");

        if (!line || sections.length === 0) return;

        const updateProgress = (currentIndex: number) => {
            const percentage = (currentIndex / sections.length) * 100;
            line.style.height = `${percentage}%`;
        };

        sections.forEach((section, index) => {
            ScrollTrigger.create({
            trigger: section,
            start: "top center+=100", // ✅ Start progress when the item is fully visible
            end: "bottom center",
            onEnter: () => updateProgress(index + 1),
            onEnterBack: () => updateProgress(index + 1),
            onLeaveBack: () => updateProgress(index),
            markers: false, // Set true for debugging positions
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
        }, [isLoading]);

  return (
    <section className="timeline-section relative min-h-screen snap-y snap-mandatory hide-scrollbar">
      {isLoading ? (
        <div className="flex flex-col items-center w-full justify-center min-h-[50vh] gap-4">
          <h2 className="text-lg font-medium">Loading Timeline...</h2>
          <div className="w-full h-full flex flex-row space-x-3 items-center justify-center">
            <Progress  value={progress} className="w-1/2 h-2" />
            <span>{progress}%</span>
          </div>
        </div>
      ) : (
        <>
          {/* Central Line */}
          <div className="absolute top-0 h-full w-[2px] bg-muted left-4 md:left-1/2 md:-translate-x-1/2" >
            <div
              id="progress-line"
              className="absolute left-0 top-0 w-full bg-primary transition-all duration-300"
              style={{ height: "0%" }}
            ></div>
          </div>

          {historyData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              description={item.description}
              align={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </>
      )}
    </section>
  );
}
