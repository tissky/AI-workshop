"use client";

import { Suspense, lazy } from "react";
import { StaticImageData } from "next/image";
import { CarouselSkeleton } from "./skeletons";

const ImageCarousel = lazy(() => import("./ImageCarousel"));

interface CarouselItem {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
}

interface ImageCarouselWrapperProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarouselWrapper(props: ImageCarouselWrapperProps) {
  return (
    <Suspense fallback={<CarouselSkeleton />}>
      <ImageCarousel {...props} />
    </Suspense>
  );
}
