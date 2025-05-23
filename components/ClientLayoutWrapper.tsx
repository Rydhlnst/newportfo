"use client";

import dynamic from "next/dynamic";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Navbar } from "@/components/SideNavbar";
import { PageHeader } from "@/components/PageHeader";
import Footer from "@/components/Footer";
import React from "react";

const FloatingChat = dynamic(() => import("@/components/FloatingChat"), {
  ssr: false,
  loading: () => (
    <div className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-muted shadow-xl animate-pulse" />
  ),
});

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Navbar />
      <FloatingChat />
      <main className="w-full font-dmsans">
        <div className="w-full p-2 flex space-x-2 sticky top-0 z-10 bg-background border-b">
          <SidebarTrigger className="" />
          <PageHeader />
        </div>
        <div className="h-full flex flex-col">
          <div className="flex-grow px-8">{children}</div>
          <Footer className="mt-auto px-8" />
        </div>
      </main>
    </SidebarProvider>
  );
}
