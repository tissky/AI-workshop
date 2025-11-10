"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumb Component
 * 
 * Accessible breadcrumb navigation with semantic HTML and ARIA attributes.
 * Supports auto-generation or manual item specification.
 * 
 * @example
 * // Auto-generate from pathname
 * <Breadcrumb />
 * 
 * // Manual specification
 * <Breadcrumb items={[
 *   { label: "首页", href: "/" },
 *   { label: "工具", href: "/tools" },
 *   { label: "详情", href: "/tools/detail" }
 * ]} />
 */
export default function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumb items if not provided
  const breadcrumbItems: BreadcrumbItem[] = items || [
    { label: "首页", href: "/" },
    { label: "工具库", href: "/tools" }
  ];

  return (
    <nav 
      aria-label="面包屑导航" 
      className={`text-sm ${className}`}
    >
      <ol 
        className="flex items-center gap-2 flex-wrap"
        role="list"
      >
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isCurrent = pathname === item.href;
          
          return (
            <li 
              key={item.href} 
              className="flex items-center gap-2"
              role="listitem"
            >
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 focus-visible:rounded-sm"
                    aria-current={isCurrent ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                  <span 
                    className="text-muted-foreground select-none" 
                    aria-hidden="true"
                  >
                    /
                  </span>
                </>
              ) : (
                <span 
                  className="text-foreground font-medium" 
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
