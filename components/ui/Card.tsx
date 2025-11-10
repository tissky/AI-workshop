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
  const baseStyles = "bg-white rounded-xl transition-all";

  const variantStyles = {
    default: "shadow-md",
    bordered: "border border-gray-200",
    elevated: "shadow-lg hover:shadow-xl",
    interactive:
      "shadow-md hover:shadow-lg hover:-translate-y-1 cursor-pointer border border-transparent hover:border-gray-200",
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
