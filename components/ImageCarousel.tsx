"use client";

import { useState, useEffect, useRef, useCallback } from "react";
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
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Auto-play logic - respects reduced motion
  useEffect(() => {
    if (!autoPlay || items.length <= 1 || isPaused || isReducedMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length, isPaused, isReducedMotion]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
  }, [currentIndex, items.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex(currentIndex === items.length - 1 ? 0 : currentIndex + 1);
  }, [currentIndex, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!carouselRef.current?.contains(document.activeElement)) return;
      
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "Home") {
        e.preventDefault();
        setCurrentIndex(0);
      } else if (e.key === "End") {
        e.preventDefault();
        setCurrentIndex(items.length - 1);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length, goToPrevious, goToNext]);

  if (items.length === 0) return null;

  const transitionDuration = isReducedMotion ? "0ms" : "500ms";

  return (
    <section 
      ref={carouselRef}
      aria-label="图片轮播" 
      aria-roledescription="轮播"
      className="relative w-full h-full group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      {/* Main Image Display */}
      <div 
        className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-card bg-muted" 
        role="region" 
        aria-live="polite"
        aria-atomic="true"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            className="absolute inset-0"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              transition: `opacity ${transitionDuration} cubic-bezier(0.25, 0.1, 0.25, 1)`,
              zIndex: index === currentIndex ? 1 : 0
            }}
            role="group"
            aria-roledescription="幻灯片"
            aria-label={`${index + 1} / ${items.length}`}
            aria-hidden={index !== currentIndex}
          >
            <Image
              src={item.image}
              alt={item.title}
              className="object-contain"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              placeholder={typeof item.image !== "string" ? "blur" : undefined}
              priority={index === 0}
            />
            
            {/* Caption overlay with flat background */}
            <div className="absolute bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t border-border p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        {items.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-card transition-all duration-200 ease-apple opacity-0 group-hover:opacity-100 focus:opacity-100 text-foreground hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 z-20"
              aria-label="上一张图片"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-card transition-all duration-200 ease-apple opacity-0 group-hover:opacity-100 focus:opacity-100 text-foreground hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 z-20"
              aria-label="下一张图片"
              type="button"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots Indicator */}
        {items.length > 1 && (
          <div 
            className="absolute bottom-28 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full z-20" 
            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full z-20" 
            role="tablist" 
            aria-label="轮播导航点"
          >
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                role="tab"
                aria-selected={index === currentIndex}
                aria-controls={`carousel-item-${index}`}
                className={`w-2 h-2 rounded-full transition-all duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                  index === currentIndex
                    ? "bg-accent w-6"
                    : "bg-muted-foreground hover:bg-foreground"
                }`}
                aria-label={`跳转到第 ${index + 1} 张图片`}
                type="button"
              />
            ))}
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {items.length > 1 && (
        <div 
          className="mt-6 flex gap-4 overflow-x-auto pb-4 hide-scrollbar" 
          role="tablist" 
          aria-label="缩略图导航"
        >
          {items.map((item, index) => (
            <button
              key={item.id}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-controls={`carousel-item-${index}`}
              className={`relative flex-shrink-0 w-24 h-16 md:w-32 md:h-20 rounded-lg overflow-hidden border-2 transition-all duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 ${
                index === currentIndex
                  ? "border-accent ring-2 ring-accent/20 scale-105"
                  : "border-border hover:border-muted-foreground hover:scale-105"
              }`}
              aria-label={`查看 ${item.title}`}
              type="button"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 96px, 128px"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}

      {/* Screen reader announcement */}
      <div className="sr-only" role="status" aria-live="polite" aria-atomic="true">
        第 {currentIndex + 1} 张，共 {items.length} 张: {items[currentIndex].title}
      </div>
    </section>
  );
}
