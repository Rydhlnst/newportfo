"use client";

import { usePathname, useParams } from "next/navigation";
import { capitalize } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

const pathTitles: Record<string, { title: string; subtitle?: string }> = {
  "/": { title: "Welcome", subtitle: "Home Page" },
  "/about": { title: "About Me", subtitle: "Get to Know Me" },
  "/tech": { title: "Tech", subtitle: "My Tech Stack" },
  "/services": { title: "Services", subtitle: "Professional Journey" },
  "/blog": { title: "Blog", subtitle: "Journal" },
};

export function PageHeader() {
  const pathname = usePathname();
  const params = useParams();

  let title = "Page";
  let subtitle = "";

  const segments = pathname.split("/").filter(Boolean);

  if (segments[0] === "projects" && params.id) {
    title = "Project";
    subtitle = capitalize(params.id as string);
  } else if (segments[0] === "blog" && segments.length === 2) {
    title = "Blog";
    subtitle = decodeURIComponent(segments[1])
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
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
            <BreadcrumbLink href="#" className="font-semibold">
              {title}
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
