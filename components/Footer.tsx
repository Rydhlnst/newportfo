import { cn } from '@/lib/utils';
import React from 'react'
import { SocialLinkCard } from './SocialLinkCard';

type Props = {
    className?: string;
}

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/404ryan/",
    icon: "linkedin",
    preview: {
      avatar: "/avatar-linkedin.jpg", 
      title: "Muhammad Riyadhul Jinan Nasution",
      username: "Muhammad Riyadhul Jinan Nasution",
      description: "Open for collaborations and freelance projects!",
    },
  },
  {
    name: "GitHub",
    href: "https://github.com/Rydhlnst",
    icon: "github",
    preview: {
      avatar: "/avatar-github.jpg",
      title: "404ryan",
      username: "404ryan",
      description: "Exploring Web3, AI, and Fullstack Web Dev.",
    },
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/riyadhulnst",
    icon: "instagram",
  },
  {
    name: "Email",
    href: "mailto:rydhlnst@gmail.com",
    icon: "mail",
  }] as const;

const Footer = ({className = ""}: Props) => {
  return (
    <div className={cn("flex justify-between items-center w-full py-6 border-t", className)}>
        <div className='flex flex-col justify-start items-start'>
            <h1 className='text-lg font-medium'>404Ryan</h1>
            <p className='text-sm text-muted-foreground'>&quot;Crafting Innovative Web Experiences&quot;</p>
        </div>
        <SocialLinkCard links={socialLinks}/>
    </div>
  )
}

export default Footer
