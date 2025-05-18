

import OngoingProjectsCarousel from "@/components/OngoingProjectCarousel";
import { PerWordText } from "@/components/PerWordText";
import RealTimeClock from "@/components/RealTime";
import { SlideUpText } from "@/components/SlideUpText";

export default function Home() {
  return (
    <main className="flex relative w-full flex-col mt-8 space-y-12">
      <div className="flex w-full justify-between items-center">
        <SlideUpText text="Hello there!!" className="text-2xl" highlightWords={["Hello"]}/>
        <RealTimeClock/>
      </div>
     <PerWordText
        className="text-6xl font-thin text-justify"
        text="Riyan is a passionate web developer focused on crafting seamless digital experiences through clean code and creative design. He is currently exploring the synergy between AI, Web3, and modern web technologies to deliver impactful solutions."
        highlightWords={[
          "Riyan", 
          "web", 
          "developer", 
          "digital", 
          "clean", 
          "creative", 
          "AI", 
          "Web3", 
          "technologies", 
          "impactful"
        ]}
      />
      <div className="space-y-3 flex flex-col">
        <SlideUpText text="Ongoing Project" className="text-2xl" highlightWords={["Project"]}/>
        <OngoingProjectsCarousel/>
      </div>
    </main>
  );
}
