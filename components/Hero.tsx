"use client";

import { fadeIn } from "@/gsap/animation";
import { useEffect, useRef } from "react";


const HeroSection = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      fadeIn(headingRef.current);
    }
  }, []);

  return <h1 ref={headingRef}>Welcome to My Portfolio</h1>;
};

export default HeroSection;
