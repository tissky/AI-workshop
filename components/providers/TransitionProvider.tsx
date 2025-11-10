"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

interface TransitionProviderProps {
  children: React.ReactNode;
}

export default function TransitionProvider({ children }: TransitionProviderProps) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Detect route change
    if (pathname !== previousPathname.current) {
      // Start transition out
      setIsTransitioning(true);

      // After a brief delay, update children and transition in
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
        previousPathname.current = pathname;
        
        // Scroll to top on route change
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
      }, 150); // Half the transition duration for crossfade effect

      return () => clearTimeout(timer);
    } else {
      // Initial load - update display children immediately
      setDisplayChildren(children);
    }
  }, [pathname, children]);

  return (
    <div
      className={`page-transition-wrapper ${isTransitioning ? "transitioning" : ""}`}
      key={pathname}
    >
      {displayChildren}
    </div>
  );
}
