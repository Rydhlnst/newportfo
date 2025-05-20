import Achievements from '@/components/Achievements'
import CVWidget from '@/components/CVwidget'
import Profile from '@/components/Profile'
import { SlideUpText } from '@/components/SlideUpText'
import TimelineSection from '@/components/TimeLine'
import { Separator } from '@/components/ui/separator'
import React from 'react'

const AboutPage = () => {
  return (
    <main className="flex relative w-full flex-col space-y-12" id='Profile'>
          <Profile/>
          <Separator/>
          <div className='h-full w-full flex flex-col' id='history'>
            <SlideUpText text='History' className='text-2xl mb-14' highlightWords={["History"]}/>
            <TimelineSection/>
          </div>
          <Separator/>
          <div className='h-full w-full flex flex-col' id='achievements'>
                <Achievements/>
          </div>
          <Separator/>
          <div id='cv'>
            <CVWidget/>
          </div>

    </main>
  )
}

export default AboutPage
