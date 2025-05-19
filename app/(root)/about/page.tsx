import Achievements from '@/components/Achievements'
import OngoingProjectsCarousel from '@/components/OngoingProjectCarousel'
import { PerWordText } from '@/components/PerWordText'
import RealTimeClock from '@/components/RealTime'
import { SlideUpText } from '@/components/SlideUpText'
import TimelineSection from '@/components/TimeLine'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex relative w-full flex-col mt-8 space-y-12" id='Profile'>
          <div className="flex w-full justify-between items-center">
            <SlideUpText text="Profile" className="text-2xl" highlightWords={["Profile"]} />
            <RealTimeClock/>
          </div>
          <div className='flex flex-col space-y-3'>
            <PerWordText
                className="text-3xl font-thin text-justify"
                text="I'm Riyan, a Computer Engineering student at Telkom University with a passion for crafting seamless and innovative digital experiences."
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
                "impactful"
                ]} order={0}
            />
            <PerWordText order={1} chainDelay={2} className='text-3xl font-thin text-justify' highlightWords={["Web", "Development", "Nextjs", "TypeScript", "Tailwind", "CSS", "AI", "Web3", "impactful", "solutions"]} text='I specialize in Web Development using modern stacks like Next.js, TypeScript, and Tailwind CSS. Lately, I’ve been diving deep into the world of AI and Web3, exploring how these technologies can create impactful solutions.'/>
          </div>
          <div className='h-full w-full flex flex-col' id='history'>
            <SlideUpText text='History' className='text-2xl' highlightWords={["History"]}/>
            <TimelineSection/>
          </div>
          <div className='h-full w-full flex flex-col' id='achievements'>
                <Achievements/>
          </div>
    </main>
  )
}

export default AboutPage
