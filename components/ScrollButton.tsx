"use client";

import { useState, useEffect } from "react";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling down 300px
      if (scrolled > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if near bottom (within 800px of the bottom)
      if (scrolled + windowHeight >= documentHeight - 800) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Check on mount
    toggleVisibility();

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={isNearBottom ? scrollToBottom : scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-accent text-white rounded-full shadow-elevated hover:shadow-overlay transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group"
      aria-label={isNearBottom ? "滚动到底部" : "返回顶部"}
    >
      {/* Icon with rotation animation based on state */}
      <svg
        className={`w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 ${
          isNearBottom ? "rotate-180" : "rotate-0"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 right-0 px-3 py-1.5 bg-foreground text-background text-xs sm:text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-card">
        {isNearBottom ? "一键到底部" : "返回顶部"}
      </span>
    </button>
  );
}
