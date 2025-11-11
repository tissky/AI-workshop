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
    <article className="group relative bg-gradient-to-br from-background via-background to-[color:var(--color-bg-muted)] border border-border rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-elevated transition-all duration-300 motion-safe:hover:-translate-y-2 motion-safe:hover:scale-[1.02] motion-reduce:hover:shadow-elevated overflow-hidden">
      {/* Subtle accent glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" aria-hidden="true" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon container with enhanced hover effect */}
        <div 
          className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-[color:var(--color-bg-muted)] to-[color:var(--color-bg-elevated)] rounded-2xl mb-5 sm:mb-6 text-accent shadow-surface group-hover:shadow-card group-hover:scale-110 transition-all duration-300 ring-1 ring-border group-hover:ring-accent/30" 
          aria-hidden="true"
        >
          <div className="transform group-hover:rotate-3 transition-transform duration-300">
            {icon}
          </div>
        </div>
        
        {/* Title with enhanced typography */}
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-5 leading-relaxed">
          {description}
        </p>
        
        {/* Feature list with enhanced styling */}
        <ul className="space-y-2.5 list-none" aria-label="功能列表">
          {items.map((item, index) => (
            <li 
              key={index} 
              className="text-muted-foreground text-sm sm:text-base flex items-center group-hover:text-foreground transition-colors duration-300"
            >
              <span 
                className="w-1.5 h-1.5 bg-accent rounded-full mr-3 sm:mr-4 flex-shrink-0 group-hover:scale-150 group-hover:bg-accent transition-all duration-300" 
                aria-hidden="true"
              />
              <span className="relative">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Border highlight effect */}
      <div className="absolute inset-0 rounded-2xl border border-accent/0 group-hover:border-accent/20 transition-all duration-300 pointer-events-none" aria-hidden="true" />
    </article>
  );
}
