import { HTMLAttributes } from "react";

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: React.ReactNode;
  variant?: "default" | "gradient" | "dark";
  align?: "left" | "center" | "right";
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  description,
  actions,
  variant = "default",
  align = "center",
  className = "",
  children,
  ...props
}: HeroProps) {
  const baseStyles = "py-24 md:py-32";

  const variantStyles = {
    default: "bg-gradient-to-b from-gray-50 to-white",
    gradient: "bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white",
    dark: "bg-gray-900 text-white",
  };

  const alignmentStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const containerAlign = {
    left: "items-start",
    center: "items-center",
    right: "items-end",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const textColorClass = variant === "default" ? "text-gray-900" : "text-white";
  const subtextColorClass = variant === "default" ? "text-gray-700" : "text-blue-100";
  const descColorClass = variant === "default" ? "text-gray-500" : "text-white/90";

  return (
    <section className={classes} {...props}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${containerAlign[align]} ${alignmentStyles[align]}`}>
          <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${textColorClass} mb-6 tracking-tight`}>
            {title}
          </h1>
          {subtitle && (
            <h2 className={`text-2xl md:text-3xl font-medium ${subtextColorClass} mb-8`}>
              {subtitle}
            </h2>
          )}
          {description && (
            <p className={`text-lg md:text-xl ${descColorClass} mb-12 max-w-3xl leading-relaxed`}>
              {description}
            </p>
          )}
          {actions && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {actions}
            </div>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
