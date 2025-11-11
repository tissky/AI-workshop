import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "interactive";
  padding?: "none" | "sm" | "md" | "lg";
  children: React.ReactNode;
}

export default function Card({
  variant = "default",
  padding = "md",
  className = "",
  children,
  ...props
}: CardProps) {
  const baseStyles = "bg-background rounded-xl transition-all";

  const variantStyles = {
    default: "shadow-card border border-border",
    bordered: "border border-border",
    elevated: "shadow-elevated hover:shadow-dialog",
    interactive:
      "shadow-card hover:shadow-elevated hover:-translate-y-1 cursor-pointer border border-border hover:border-muted-foreground group",
  };

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
