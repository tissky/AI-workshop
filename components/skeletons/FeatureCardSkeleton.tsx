import BaseSkeleton from "./BaseSkeleton";

interface FeatureCardSkeletonProps {
  gradient?: boolean;
  itemCount?: number;
}

export default function FeatureCardSkeleton({
  gradient = false,
  itemCount = 3
}: FeatureCardSkeletonProps) {
  return (
    <article 
      className={`${gradient 
        ? 'bg-gradient-to-br from-white to-gray-50' 
        : 'bg-white'
      } p-6 rounded-xl shadow-lg border border-gray-100`}
      aria-busy="true"
      role="status"
      aria-label="加载功能卡片"
    >
      <BaseSkeleton width="w-16" height="h-16" rounded="rounded-2xl" className="mb-4" />
      
      <BaseSkeleton width="w-2/3" height="h-6" className="mb-3" />
      
      <BaseSkeleton width="w-full" height="h-4" className="mb-1" />
      <BaseSkeleton width="w-5/6" height="h-4" className="mb-4" />
      
      <ul className="space-y-2" aria-label="功能列表">
        {Array.from({ length: itemCount }).map((_, index) => (
          <li key={index} className="flex items-center">
            <BaseSkeleton width="w-2" height="h-2" rounded="rounded-full" className="mr-3" />
            <BaseSkeleton width="w-4/5" height="h-4" />
          </li>
        ))}
      </ul>
      
      <span className="sr-only">功能信息加载中</span>
    </article>
  );
}
