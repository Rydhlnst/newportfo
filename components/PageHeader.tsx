"use client";

import { usePathname, useParams } from "next/navigation";
import { capitalize } from "@/lib/utils"; // Helper untuk kapitalisasi, opsional
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./ui/breadcrumb";

const pathTitles: Record<string, { title: string; subtitle?: string }> = {
  "/": { title: "Welcome", subtitle: "Home Page" },
  "/about": { title: "About Me", subtitle: "Get to Know Me" },
  "/skills": { title: "Skills", subtitle: "My Tech Stack" },
  "/cv": { title: "Curriculum Vitae", subtitle: "Professional Journey" },
};

export function PageHeader() {
  const pathname = usePathname();
  const params = useParams();

  // Handle dynamic route for /projects/[id]
  const isProjectDetail = pathname.startsWith("/projects/") && params.id;

  let title = "Page";
  let subtitle = "";

  if (isProjectDetail) {
    title = `Project: ${capitalize(params.id as string)}`;
    subtitle = "Project Details";
  } else {
    const staticPage = pathTitles[pathname];
    if (staticPage) {
      title = staticPage.title;
      subtitle = staticPage.subtitle || "";
    }
  }

  return (
    <div className="flex flex-row items-center justify-center space-x-2">
        <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                   <h1 className="font-semibold">{title}</h1>
                </BreadcrumbLink>
              </BreadcrumbItem>
              {subtitle && (
                <div className="flex items-center justify-center space-x-3">
                    <BreadcrumbSeparator className="hidden md:block" />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="font-semibold">{subtitle}</BreadcrumbPage>
                    </BreadcrumbItem>
                </div>

              )}
            </BreadcrumbList>
          </Breadcrumb>
     
      
    </div>
  );
}
