"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
  Computer,
  Globe,
  Package,
  SquareTerminal,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { TeamSwitcher } from "./team-switcher"
import { NavUser } from "./nav-user"
import { NavMain } from "./nav-main"
import { NavProjects } from "./nav-projects"

// This is sample data.
const data = {
  user: {
    name: "Muhammad Riyadhul Jinan Nasution",
    email: "rydhlnst@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "404ryan",
      logo: Computer,
      plan: "Tech Enthusiast",
    },
  ],
  navMain: [
    {
      title: "About",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Profile",
          url: "/about/#profile",
        },
        {
          title: "History",
          url: "/about/#history",
        },
        {
          title: "Achivements",
          url: "/about/#achievements",
        },
        {
          title: "CV",
          url: "/about/#cv",
        },
      ],
    },
    {
      title: "Tech Stack",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Frontend",
          url: "#",
        },
        {
          title: "Backend",
          url: "#",
        },
        {
          title: "Database",
          url: "#",
        },
        {
          title: "AI Tools",
          url: "#",
        },
      ],
    },
    {
      title: "Blog",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "How to create App using Next.js",
          url: "#",
        },
        {
          title: "How to easily deploy your web",
          url: "#",
        },
        {
          title: "How to improve your website using AI",
          url: "#",
        },
        {
          title: "Dunno",
          url: "#",
        },
      ],
    },
    {
      title: "Services",
      url: "#",
      icon: Package,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    }
  ],
  projects: [
    {
      name: "Devflow",
      url: "#",
      icon: Globe,
    },
    {
      name: "Portfolio 2024",
      url: "#",
      icon: Globe,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
