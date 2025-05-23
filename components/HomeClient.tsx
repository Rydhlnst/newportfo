"use client";

import { PerWordText } from "@/components/PerWordText";
import RealTimeClock from "@/components/RealTime";
import { SlideUpText } from "@/components/SlideUpText";
import { onGoingProjectsData } from "@/lib/data";
import dynamic from "next/dynamic";
import { OngoingProjectSkeleton } from "./OngoingProjectSkeleton";

const OngoingProjectsCarousel = dynamic(() => import("@/components/OngoingProjectCarousel"), {
  ssr: true,
  loading: () => <OngoingProjectSkeleton/>,
});

export default function HomeClient() {
  return (
    <main className="flex relative w-full flex-col mt-8 space-y-12">
      <div className="flex w-full justify-between items-center">
        <SlideUpText text="Hello there!!" className="text-2xl" highlightWords={["Hello"]} />
        <RealTimeClock />
      </div>
      <PerWordText
        className="text-2xl md:text-3xl xl:text-6xl lg:text-4xl font-thin text-justify"
        text="Riyan is a passionate web developer focused on crafting seamless digital experiences through clean code and creative design. He is currently exploring the synergy between AI, Web3, and modern web technologies to deliver impactful solutions."
        highlightWords={[
          "Riyan", "web", "developer", "digital", "clean", "creative", "AI", "Web3", "technologies", "impactful"
        ]}
      />
      <div>
        <OngoingProjectsCarousel project={onGoingProjectsData} />
      </div>
    </main>
  );
}
