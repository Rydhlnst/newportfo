"use client";

import { SidebarInset} from "@/components/ui/sidebar";

import { User, Layers, FileText } from "lucide-react";
import { AppSidebar } from "./app-sidebar";

const items = [
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: Layers },
  { title: "CV", url: "/cv", icon: FileText },
];

const portfolio = [
  { title: "Devflow", url: "/projects/devflow", icon: Layers },
  { title: "Portfolio 2024", url: "/projects/portfolio2024", icon: Layers },
];

export function Navbar() {

  return (
    <div>
       <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        </header>
      </SidebarInset>
    </div>
  );
}
