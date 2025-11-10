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
    <article className="bg-background border border-border rounded-xl p-6 shadow-card hover:shadow-lg transition-all duration-300 motion-safe:hover:-translate-y-0.5">
      <div className="w-12 h-12 mb-4 text-accent" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2" role="list" aria-label="功能列表">
        {items.map((item, index) => (
          <li key={index} className="text-muted-foreground text-sm flex items-center" role="listitem">
            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" aria-hidden="true"></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
