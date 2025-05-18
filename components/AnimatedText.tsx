"use client";

import { useEffect, useRef } from "react";
import { animateSplitText } from "@/gsap/splitTextAnimation";
import { ScrollFadeIn } from "./ScrollFadeIn";

const AnimatedText = () => {
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const cleanup = animateSplitText(textRef.current);

      // Cleanup when component unmounts
      return cleanup;
    }
  }, []);

  return (
    <div>
        <h1 ref={textRef} className="text-4xl font-bold text-start">
        </h1>
        
        {/* <p ref={textRef} className="text-2xl text-gray-900 dark:text-white leading-relaxed font-light">
            Riyan is a web developer passionate about building intelligent and scalable digital solutions. 
            With a focus on creating seamless user experiences, he leverages modern technologies like 
            <span className="font-semibold"> Next.js, TypeScript, and AI integrations</span> 
            to bring ideas to life. Currently exploring the intersection of 
            <span className="font-semibold"> AI and Web3</span> to deliver innovative solutions.
        </p> */}
          {/* <SlideUpText 
                text="Riyan is a web developer passionate about building intelligent and scalable digital solutions. Currently exploring the intersection of AI and Web3." 
                className="text-lg text-gray-900 dark:text-white leading-relaxed font-light" 
                delay={0.3} 
            /> */}
        <ScrollFadeIn yOffset={150} scrub>
        <h2 className="text-4xl font-bold text-center">Welcome Back!</h2>
        </ScrollFadeIn>
            <div className="h-[100vh]"/>
        <ScrollFadeIn yOffset={100} scrub>
            <p className="text-center text-muted-foreground mt-6">
                Scroll me out and back in to see the animation restart.
            </p>
        </ScrollFadeIn>
            <div className="h-[100vh]"/>

    </div>
    
  );
};

export default AnimatedText;
