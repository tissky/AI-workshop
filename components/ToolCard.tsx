"use client";

import Link from "next/link";

interface ToolCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
  category?: string;
  gradientColor: string;
  features?: string[];
  className?: string;
  showLink?: boolean;
}

export default function ToolCard({
  id,
  name,
  description,
  icon,
  category,
  gradientColor,
  features,
  className = "",
  showLink = true
}: ToolCardProps) {
  const featureListId = `tool-features-${id}`;
  
  const cardContent = (
    <article className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all group ${className}`}>
      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientColor} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`} aria-hidden="true">
        {icon}
      </div>
      {category && (
        <span className="text-xs text-blue-600 font-medium bg-blue-50 px-2 py-1 rounded-full">
          {category}
        </span>
      )}
      <h3 className="font-semibold text-gray-900 mb-2 mt-2">{name}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {features && features.length > 0 && (
        <ul id={featureListId} className="space-y-1 mb-4" aria-label="工具特性">
          {features.slice(0, 3).map((feature, index) => (
            <li key={index} className="text-xs text-gray-500 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2" aria-hidden="true"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      {showLink && (
        <div className="flex items-center text-blue-600 text-sm font-medium">
          <span>立即使用</span>
          <span className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
        </div>
      )}
    </article>
  );

  if (showLink) {
    return (
      <Link 
        href={`/tools/${id}`} 
        className="block"
        aria-label={`查看 ${name} 详情${features && features.length > 0 ? '，' + features.length + '个特性' : ''}`}
      >
        {cardContent}
      </Link>
    );
  }

  return cardContent;
}
