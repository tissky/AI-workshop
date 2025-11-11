"use client";

import { useState, useEffect } from "react";

export default function PageScrollButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

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

      // Check if at bottom (within 100px of the bottom)
      if (scrolled + windowHeight >= documentHeight - 100) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
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

  const handleClick = () => {
    if (isAtBottom) {
      scrollToTop();
    } else {
      scrollToBottom();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-background text-muted-foreground border-2 border-border rounded-full shadow-card hover:shadow-elevated hover:text-foreground hover:border-muted-foreground transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group"
      aria-label={isAtBottom ? "返回顶部" : "到达底部"}
    >
      {/* Icon with rotation animation based on state */}
      <svg
        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
          isAtBottom ? "rotate-0" : "rotate-180"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
      
      {/* Tooltip */}
      <span className="absolute bottom-full mb-2 right-0 px-3 py-1.5 bg-foreground text-background text-xs sm:text-sm font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-card">
        {isAtBottom ? "返回顶部" : "到达底部"}
      </span>
    </button>
  );
}
