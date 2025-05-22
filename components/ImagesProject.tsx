"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ImageOff } from "lucide-react";

type GalleryProps = {
  images: string[];
  title: string;
};

export default function Gallery({ images }: GalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasError, setHasError] = useState(false);
  const [thumbnailError, setThumbnailError] = useState<boolean[]>([]);

  const hasImages = images?.length > 0;
  const currentImage = hasImages ? images[currentIndex] : "";

  useEffect(() => {
    setHasError(false);
  }, [currentIndex]);

  useEffect(() => {
    // initialize thumbnail error state
    setThumbnailError(images.map(() => false));
  }, [images]);

  const handleThumbnailError = (index: number) => {
    setThumbnailError((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

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
          <div className="relative aspect-[16/9] w-full h-[300px] rounded-xl overflow-hidden border">
            <Skeleton className="w-full h-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImageOff className="w-8 h-8"/>
              <span className="text-sm">Oops! Image not found</span>
            </div>
          </div>
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
              {!thumbnailError[i] ? (
                <Image
                  src={img}
                  alt={`Thumbnail ${i + 1}`}
                  width={isActive ? 128 : 96}
                  height={isActive ? 80 : 56}
                  onError={() => handleThumbnailError(i)}
                  className="object-cover w-full h-full"
                />
              ) : (
                <Skeleton className="w-full h-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
