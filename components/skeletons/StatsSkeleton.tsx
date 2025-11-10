import BaseSkeleton from "./BaseSkeleton";

interface StatsSkeletonProps {
  count?: number;
  layout?: "horizontal" | "grid";
}

export default function StatsSkeleton({
  count = 4,
  layout = "grid"
}: StatsSkeletonProps) {
  const layoutClasses = layout === "grid"
    ? "grid grid-cols-2 md:grid-cols-4 gap-8"
    : "flex flex-wrap gap-8 justify-center";

  return (
    <div 
      className={layoutClasses}
      aria-busy="true"
      role="status"
      aria-label="加载统计数据"
    >
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <BaseSkeleton width="w-20" height="h-10" className="mb-2 mx-auto" />
          <BaseSkeleton width="w-16" height="h-4" className="mx-auto" />
        </div>
      ))}
      
      <span className="sr-only">统计数据加载中</span>
    </div>
  );
}
