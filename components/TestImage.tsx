"use client";

import Image from "next/image";
import { useState } from "react";
import { ImageOff } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function TestImageFallback() {
  const [error, setError] = useState(false);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative w-full pt-[42.85%] bg-muted rounded-lg overflow-hidden">
        {!error ? (
          <Image
            src="/broken-image.jpg" // intentionally broken image
            alt="Test"
            fill
            onError={() => setError(true)}
            className="object-cover absolute inset-0"
          />
        ) : (
          <>
            <Skeleton className="absolute inset-0 w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImageOff className="w-8 h-8" />
              <span className="text-sm">Oops! Image not found</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
