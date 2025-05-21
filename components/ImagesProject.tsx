"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type GalleryProps = {
  images: string[];
  title: string;
};

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);

  const hasImages = images?.length > 0;
  const currentImage = hasImages ? images[currentIndex] : "";

  useEffect(() => {
    setHasError(false);
  }, [currentIndex]);

  return (
    <div className="space-y-1">
      {/* Main Image */}
      <div className="w-full max-w-5xl rounded-xl overflow-hidden border">
        {hasImages && !hasError ? (
          <AspectRatio ratio={16 / 9}>
            <Image
              src={currentImage}
              alt={`Project image ${currentIndex + 1}`}
              fill
              className="object-fill rounded-xl"
              onError={() => setHasError(true)}
            />
          </AspectRatio>
        ) : (
          <Skeleton className="w-full aspect-[16/9] h-[300px] rounded-xl" />
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-3 overflow-x-auto max-w-5xl mx-auto px-1 h-24 items-center">
        {images.map((img, i) => {
          const isActive = currentIndex === i;

          return (
            <button
              key={img + i}
              onClick={() => setCurrentIndex(i)}
              className={cn(
                "transition-all duration-300 flex-shrink-0 overflow-hidden rounded-md border",
                isActive ? "w-32 h-20 scale-100 ring-2 ring-primary" : "w-24 h-14 opacity-60 hover:opacity-100 scale-95"
              )}
            >
              <Image
                src={img}
                alt={`Thumbnail ${i + 1}`}
                width={isActive ? 128 : 96}
                height={isActive ? 80 : 56}
                className="object-cover w-full h-full"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
