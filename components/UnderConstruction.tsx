"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Rocket } from "lucide-react";

export default function UnderConstruction() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center text-center py-24 px-4"
    >

      <Rocket className="w-8 h-8  mb-4 animate-bounce" />
      <h1 className="text-xl md:text-2xl font-semibold text-primary mb-2">
        Under development
      </h1>
      <p className="text-muted-foreground text-sm max-w-md">
        Exciting things are coming soon. Stay tuned!
      </p>
    </div>
  );
}
