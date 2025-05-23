
import { FloatingChat } from '@/components/FloatingChat';
import Footer from '@/components/Footer';
import { PageHeader } from '@/components/PageHeader';
import { Navbar } from '@/components/SideNavbar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react'

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SidebarProvider>
      <Navbar />
      <FloatingChat/>
      <main className='w-full font-dmsans'>
        <div className='w-full p-2 flex space-x-2 sticky top-0 z-10 bg-background border-b'>
            <SidebarTrigger className=''/>
            <PageHeader/>
        </div>
        <div className='h-full flex flex-col'>
            <div className='flex-grow px-8'>
                {children}
            </div>
            <Footer className='mt-auto px-8'/>
        </div>
      </main>
    </SidebarProvider>
  )
}

export default MainLayout
