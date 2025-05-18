
import { PageHeader } from '@/components/PageHeader';
import { Navbar } from '@/components/SideNavbar';
import { Separator } from '@/components/ui/separator';
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
      <main className='w-full'>
        <div className='w-full p-2 flex space-x-2 sticky top-0 z-10 bg-background border-b'>
            <SidebarTrigger className=''/>
            <PageHeader/>
        </div>
        <div className='px-8'>
            {children}
        </div>
      </main>
    </SidebarProvider>
  )
}

export default MainLayout
