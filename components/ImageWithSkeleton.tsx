"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { BaseSkeleton } from "./skeletons";

interface ImageWithSkeletonProps extends Omit<ImageProps, 'onLoad'> {
  aspectRatio?: "square" | "landscape" | "portrait" | "none";
}

export default function ImageWithSkeleton({
  aspectRatio = "none",
  className = "",
  alt,
  ...props
}: ImageWithSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-video",
    portrait: "aspect-[3/4]",
    none: ""
  };

  return (
    <div className={`relative ${aspectClasses[aspectRatio]}`}>
      {isLoading && (
        <div className="absolute inset-0 z-10">
          <BaseSkeleton 
            width="w-full" 
            height="h-full" 
            rounded="rounded-none"
            className="absolute inset-0"
          />
        </div>
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  );
}
