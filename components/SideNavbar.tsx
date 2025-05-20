"use client";

import { SidebarInset} from "@/components/ui/sidebar";

import { AppSidebar } from "./app-sidebar";

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
