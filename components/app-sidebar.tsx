"use client"

import * as React from "react"
import {
  BookOpen,
  Bot,
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
import { SiEthereum, SiFigma, SiNodedotjs, SiOpenai, SiWeb3Dotjs } from "react-icons/si"
import { projectsData } from "@/lib/data"


const dynamicProjectsArray = Object.keys(projectsData).map(projectId => {
  const project = projectsData[projectId];
  return {
    name: project.title, // Menggunakan title dari data Anda sebagai nama di sidebar
    url: `/projects/${projectId}`, // Membuat URL dengan projectId
    icon: Globe, // Tetap menggunakan ikon Globe untuk saat ini
  };
});
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
          url: "/tech/#frontend",
        },
        {
          title: "Backend",
          url: "/tech/#backend",
        },
        {
          title: "Database",
          url: "/tech/#database",
        },
        {
          title: "Tools",
          url: "/tech/#tools",
        },
        {
          title: "Blockchain / Web3",
          url: "/tech/#web3",
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
          url: "/blog/How to create App using Next.js",
        },
        {
          title: "How to easily deploy your web",
          url: "/blog/How to easily deploy your web",
        },
        {
          title: "How to improve your website using AI",
          url: "/blog/How to improve your website using AI",
        },
      ],
    },
    {
      title: "Services",
      url: "/services#",
      icon: Package,
      items: [
    {
      title: "Web Development",
      url: "/services/#web-development",
      icon: SiWeb3Dotjs,
    },
    {
      title: "API Integration",
      url: "/services/#api-integration",
      icon: SiNodedotjs,
    },
    {
      title: "AI Integration",
      url: "/services/#ai-integration",
      icon: SiOpenai,
    },
    {
      title: "Web3 Development",
      url: "/services/#web3-development",
      icon: SiEthereum,
    },
    {
      title: "UI/UX Design",
      url: "/services/#ui-ux-design",
      icon: SiFigma,
    }],
      }
    ],
  projects: dynamicProjectsArray

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
