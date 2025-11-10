import BaseSkeleton from "./BaseSkeleton";

interface ToolCardSkeletonProps {
  className?: string;
  showFeatures?: boolean;
}

export default function ToolCardSkeleton({
  className = "",
  showFeatures = true
}: ToolCardSkeletonProps) {
  return (
    <article 
      className={`bg-white p-6 rounded-xl shadow-md ${className}`}
      aria-busy="true"
      role="status"
      aria-label="加载工具卡片"
    >
      <BaseSkeleton width="w-12" height="h-12" className="mb-4" />
      
      <BaseSkeleton width="w-20" height="h-5" rounded="rounded-full" className="mb-3" />
      
      <BaseSkeleton width="w-3/4" height="h-5" className="mb-2" />
      
      <BaseSkeleton width="w-full" height="h-4" className="mb-1" />
      <BaseSkeleton width="w-5/6" height="h-4" className="mb-4" />
      
      {showFeatures && (
        <ul className="space-y-2 mb-4">
          {[1, 2, 3].map((i) => (
            <li key={i} className="flex items-center">
              <BaseSkeleton width="w-1.5" height="h-1.5" rounded="rounded-full" className="mr-2" />
              <BaseSkeleton width="w-4/5" height="h-3" />
            </li>
          ))}
        </ul>
      )}
      
      <BaseSkeleton width="w-24" height="h-4" />
      
      <span className="sr-only">工具信息加载中</span>
    </article>
  );
}
