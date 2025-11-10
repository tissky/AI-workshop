"use client";

import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";

interface CarouselItem {
  id: string;
  image: string | StaticImageData;
  title: string;
  description: string;
}

interface ImageCarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

export default function ImageCarousel({
  items,
  autoPlay = true,
  interval = 5000
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autoPlay || items.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length]);

  if (items.length === 0) return null;

  return (
    <div 
      ref={carouselRef}
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Main Image Display */}
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="object-contain bg-gradient-to-br from-gray-50 to-white"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              placeholder={typeof item.image !== "string" ? "blur" : undefined}
              priority={index === 0}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-white/90 text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      {items.length > 1 && (
        <div className="mt-6 flex space-x-4 overflow-x-auto pb-4 hide-scrollbar">
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-blue-500 ring-2 ring-blue-200"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
                sizes="(max-width: 768px) 96px, 128px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}