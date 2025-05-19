"use client"

import React from 'react'
import AnimatedOnScroll from './AnimatedOnScroll'
import { SlideUpText } from './SlideUpText'

const TechStackGrid = () => {
  return (
    <AnimatedOnScroll className="w-full"
      threshold={0.1}
      stagger={0.3}
      repeat
      onTrigger={() => {
        // perWordRef1.current?.triggerAnim();
        // perWordRef2.current?.triggerAnim();
      }}>
        <main className='flex flex-col w-full space-y-3'>
            <SlideUpText text="Profile" className="text-2xl animate-item" highlightWords={["Profile"]} />
        </main>
    </AnimatedOnScroll>
  )
}

export default TechStackGrid
