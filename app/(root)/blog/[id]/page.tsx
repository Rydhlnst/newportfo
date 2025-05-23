"use client";

import React from "react";
import { usePathname } from "next/navigation";
import UnderConstruction from "@/components/UnderConstruction";

const BlogPage = () => {
  const pathname = usePathname();
  // const blogSlug = pathname.split("/").pop();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <UnderConstruction/>
    </div>
  );
};

export default BlogPage;
