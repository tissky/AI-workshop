"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  className?: string;
}

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
      <ol className="flex items-center gap-2 flex-wrap">
        {breadcrumbItems.map((item, index) => {
          const isLast = index === breadcrumbItems.length - 1;
          const isCurrent = pathname === item.href;
          
          return (
            <li key={item.href} className="flex items-center gap-2">
              {!isLast ? (
                <>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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
