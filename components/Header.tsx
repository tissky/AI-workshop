"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { primaryNavLinks, ctaConfig, brandConfig } from "@/lib/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const firstFocusableRef = useRef<HTMLAnchorElement>(null);
  const lastFocusableRef = useRef<HTMLButtonElement>(null);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Handle escape key and focus trapping
  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        return;
      }

      // Focus trapping
      if (e.key === "Tab") {
        const focusableElements = menuRef.current?.querySelectorAll(
          'a[href], button:not([disabled])'
        );
        
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          // Shift + Tab
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    
    // Prevent body scroll when menu is open
    document.body.style.overflow = "hidden";
    
    // Focus first element when menu opens
    setTimeout(() => {
      firstFocusableRef.current?.focus();
    }, 100);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCTAClick = () => {
    window.open(atob(ctaConfig.url), '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href={brandConfig.homeUrl} 
              className="text-xl font-semibold text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
              aria-label={`返回${brandConfig.name}首页`}
            >
              {brandConfig.name}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav aria-label="主导航" className="hidden lg:flex items-center gap-8">
            {primaryNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                aria-label={link.ariaLabel}
                aria-current={pathname === link.href ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleCTAClick}
              className="btn-primary px-4 py-2 text-sm font-medium"
              aria-label={ctaConfig.ariaLabel}
            >
              {ctaConfig.label}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-md"
            aria-label={isMenuOpen ? "关闭菜单" : "打开菜单"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40"
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Menu Sheet */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="fixed inset-x-0 top-16 bottom-0 z-50 bg-background border-t border-border shadow-dialog overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="移动端导航菜单"
          >
            <nav className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6" aria-label="主导航">
              <div className="flex flex-col gap-1">
                {primaryNavLinks.map((link, index) => (
                  <Link
                    key={link.href}
                    ref={index === 0 ? firstFocusableRef : undefined}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-foreground hover:text-accent hover:bg-muted rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                    aria-label={link.ariaLabel}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* CTA Button */}
                <button
                  onClick={handleCTAClick}
                  className="mt-4 btn-primary px-4 py-3 text-base font-medium w-full"
                  aria-label={ctaConfig.ariaLabel}
                >
                  {ctaConfig.label}
                </button>

                {/* Close Button */}
                <button
                  ref={lastFocusableRef}
                  onClick={() => setIsMenuOpen(false)}
                  className="mt-6 px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  aria-label="关闭菜单"
                >
                  关闭菜单
                </button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
