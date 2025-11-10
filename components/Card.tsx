"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
  as?: "div" | "article" | "section";
  role?: string;
}

export default function Card({ 
  children, 
  className = "", 
  hover = false,
  onClick,
  as: Component = "div",
  role
}: CardProps) {
  const hoverClasses = hover
    ? "hover:shadow-lg transition-all duration-300"
    : "";

  return (
    <Component
      className={`bg-background border border-border rounded-xl p-6 shadow-sm ${hoverClasses} ${className}`}
      onClick={onClick}
      role={role || (onClick ? "button" : undefined)}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      {children}
    </Component>
  );
}
