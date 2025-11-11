import { HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "error" | "info" | "hot";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Badge({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}: BadgeProps) {
  const baseStyles = "inline-flex items-center font-medium rounded-full";

  const variantStyles = {
    default: "bg-muted text-muted-foreground",
    primary: "bg-accent-muted text-accent",
    success: "bg-[#e8f5e9] text-[#2e7d32] dark:bg-[#1b5e20] dark:text-[#81c784]",
    warning: "bg-[#fff3e0] text-[#e65100] dark:bg-[#e65100] dark:text-[#ffcc80]",
    error: "bg-[#ffebee] text-[#c62828] dark:bg-[#b71c1c] dark:text-[#ef9a9a]",
    info: "bg-accent-muted text-accent",
    hot: "bg-[#ff3b30] text-white dark:bg-[#ff453a] dark:text-white",
  };

  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <span className={classes} {...props}>
      {children}
    </span>
  );
}
