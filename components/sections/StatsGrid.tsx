"use client";

export interface Stat {
  label: string;
  value: string;
  description?: string;
}

export interface StatsGridProps {
  stats: Stat[];
  columns?: 2 | 3 | 4;
}

export default function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4"
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 md:gap-8`}>
      {stats.map((stat, index) => (
        <article
          key={index}
          className="bg-background rounded-xl p-6 border border-border shadow-card hover:shadow-lg transition-all duration-300"
          aria-describedby={`stat-${index}-label`}
        >
          <div className="text-4xl font-bold text-foreground mb-2">
            {stat.value}
          </div>
          <div
            id={`stat-${index}-label`}
            className="text-muted-foreground font-medium"
          >
            {stat.label}
          </div>
          {stat.description && (
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              {stat.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
