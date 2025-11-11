"use client";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
}

export default function FeatureCard({
  icon,
  title,
  description,
  items
}: FeatureCardProps) {
  return (
    <article className="bg-background border border-border rounded-xl p-5 sm:p-6 shadow-card hover:shadow-lg transition-all duration-300 motion-safe:hover:-translate-y-0.5">
      <div className="text-3xl sm:text-4xl mb-3 sm:mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">{title}</h3>
      <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2 list-none" aria-label="功能列表">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground text-xs sm:text-sm flex items-center">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true"></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
