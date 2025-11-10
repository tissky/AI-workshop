"use client";

import { useState, useEffect } from "react";

export default function QuickNav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-2">
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="返回顶部"
        className="group relative bg-accent text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      >
        <svg
          className="w-6 h-6"
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
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          返回顶部
        </span>
      </button>

      {/* Quick Jump Menu Button */}
      <div className="relative group">
        <button
          aria-label="快速导航菜单"
          className="bg-white text-gray-900 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Quick Jump Menu */}
        <nav
          className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[180px]"
          aria-label="快速导航"
        >
          <ul role="list" className="py-2">
            <li>
              <button
                onClick={() => scrollToTop()}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                首页
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("products")}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                产品展示
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href = "/tools";
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                AI工具
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  window.location.href = "/models";
                }}
                className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-accent hover:text-white transition-colors duration-150"
              >
                模型库
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
