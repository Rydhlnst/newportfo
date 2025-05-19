"use client";

import React, { useRef } from "react";
import { SlideUpText } from "./SlideUpText";
import RealTimeClock from "./RealTime";
import { PerWordText, PerWordTextHandle } from "./PerWordText";
import AnimatedOnScroll from "./AnimatedOnScroll";

const Profile = () => {
  const perWordRef1 = useRef<PerWordTextHandle>(null);
  const perWordRef2 = useRef<PerWordTextHandle>(null);

  return (
    <AnimatedOnScroll
      className="w-full"
      threshold={0.1}
      stagger={0.3}
      repeat
      onTrigger={() => {
        perWordRef1.current?.triggerAnim();
        perWordRef2.current?.triggerAnim();
      }}
    >
      <div className="flex flex-col w-full h-full space-y-3">
        <div className="flex w-full justify-between items-center">
          <SlideUpText text="Profile" className="text-2xl animate-item" highlightWords={["Profile"]} />
          <RealTimeClock />
        </div>

        <div className="flex flex-col space-y-3">

          <PerWordText
            ref={perWordRef2}
            triggerAnimation={false}
            className="text-3xl font-thin text-justify animate-item"
            text="I'm Riyan, a Computer Engineering student at Telkom University with a passion for crafting seamless and innovative digital experiences. I specialize in Web Development using modern stacks like Next.js, TypeScript, and Tailwind CSS. Lately, I’ve been diving deep into the world of AI and Web3, exploring how these technologies can create impactful solutions."
            highlightWords={[
                "Riyan",
              "web",
              "innovative",
              "digital",
              "clean",
              "creative",
              "AI",
              "Web3",
              "technologies",
              "impactful",
              "Web",
              "Development",
              "Nextjs",
              "TypeScript",
              "Tailwind",
              "CSS",
              "AI",
              "Web3",
              "impactful",
              "solutions",
            ]}
          />
        </div>
      </div>
    </AnimatedOnScroll>
  );
};

export default Profile;
