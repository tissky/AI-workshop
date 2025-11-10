"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "success" | "warning" | "error" | "hot";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Badge({ 
  children, 
  variant = "default",
  size = "md",
  className = "" 
}: BadgeProps) {
  const variantClasses = {
    default: "bg-secondary text-secondary-foreground",
    accent: "bg-accent-muted text-accent",
    success: "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
    warning: "bg-orange-50 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    error: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
    hot: "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-sm"
  };

  const sizeClasses = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5"
  };

  return (
    <span 
      className={`inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
