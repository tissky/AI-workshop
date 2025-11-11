"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavLinks } from "@/lib/navigation";

export default function HomeNav() {
  const pathname = usePathname();

  const handleNavClick = (link: typeof primaryNavLinks[number], e: React.MouseEvent<HTMLButtonElement>) => {
    if (link.isExternal && link.encodedUrl) {
      e.preventDefault();
      window.open(atob(link.encodedUrl), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <nav aria-label="主导航" className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      {primaryNavLinks.map((link) => {
        if (link.isExternal) {
          return (
            <button
              key={link.label}
              onClick={(e) => handleNavClick(link, e)}
              className="btn-primary px-6 py-2.5 text-sm font-medium w-full sm:w-auto"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </button>
          );
        }

        return (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-medium text-foreground hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm w-full sm:w-auto text-center"
            aria-label={link.ariaLabel}
            aria-current={pathname === link.href ? "page" : undefined}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
