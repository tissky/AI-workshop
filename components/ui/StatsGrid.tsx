import { HTMLAttributes } from "react";

export interface Stat {
  label: string;
  value: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface StatsGridProps extends HTMLAttributes<HTMLDivElement> {
  stats: Stat[];
  columns?: 2 | 3 | 4;
  variant?: "default" | "gradient" | "cards";
  align?: "left" | "center" | "right";
}

export default function StatsGrid({
  stats,
  columns = 4,
  variant = "gradient",
  align = "center",
  className = "",
  ...props
}: StatsGridProps) {
  const columnStyles = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  const alignmentStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const variantContainerStyles = {
    default: "bg-white shadow-lg rounded-2xl p-6 sm:p-8",
    gradient: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 text-white",
    cards: "",
  };

  const variantItemStyles = {
    default: "",
    gradient: "",
    cards: "bg-white rounded-xl p-5 sm:p-6 shadow-lg",
  };

  const statValueColor = {
    default: "text-gray-900",
    gradient: "text-white",
    cards: "text-gray-900",
  };

  const statLabelColor = {
    default: "text-gray-600",
    gradient: "text-blue-100",
    cards: "text-gray-600",
  };

  const statDescColor = {
    default: "text-gray-500",
    gradient: "text-blue-200",
    cards: "text-gray-500",
  };

  return (
    <div className={`${variantContainerStyles[variant]} ${className}`} {...props}>
      <div className={`grid ${columnStyles[columns]} gap-4 sm:gap-6 md:gap-8`}>
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`${variantItemStyles[variant]} ${alignmentStyles[align]}`}
          >
            {stat.icon && (
              <div className="mb-2 sm:mb-3 flex justify-center">
                {stat.icon}
              </div>
            )}
            <div className={`text-2xl sm:text-3xl md:text-4xl font-bold ${statValueColor[variant]} mb-1 sm:mb-2`}>
              {stat.value}
            </div>
            <div className={`text-xs sm:text-sm md:text-base font-medium ${statLabelColor[variant]}`}>
              {stat.label}
            </div>
            {stat.description && (
              <div className={`text-xs sm:text-xs md:text-sm ${statDescColor[variant]} mt-1`}>
                {stat.description}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
