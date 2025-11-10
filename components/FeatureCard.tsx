"use client";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  items: string[];
  gradient?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  items,
  gradient = false
}: FeatureCardProps) {
  return (
    <article className={`${gradient 
      ? 'bg-gradient-to-br from-white to-gray-50' 
      : 'bg-white'
    } p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100`}>
      <div className="text-4xl mb-4" aria-hidden="true">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <ul className="space-y-2" aria-label="功能列表">
        {items.map((item, index) => (
          <li key={index} className="text-gray-600 text-sm flex items-center">
            <span className="w-2 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mr-3" aria-hidden="true"></span>
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
