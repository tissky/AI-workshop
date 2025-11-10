import { StatsSkeleton, ToolCardSkeleton } from "@/components/skeletons";

export default function ToolsLoading() {
  const categories = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <div className="h-9 w-32 bg-gray-200 rounded-lg animate-shimmer mb-2" />
              <div className="h-5 w-64 bg-gray-200 rounded-lg animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section Skeleton */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-16 w-3/4 max-w-3xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
            <div className="h-6 w-2/3 max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />
            
            <StatsSkeleton count={4} layout="grid" />
          </div>
        </div>
      </section>

      {/* Tools Grid Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-20" role="status" aria-live="polite" aria-label="加载工具库">
          {categories.map((categoryIndex) => (
            <section key={categoryIndex} className="relative">
              {/* Category Header Skeleton */}
              <div className="bg-gray-100 rounded-3xl p-8 mb-8">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-2xl animate-shimmer" />
                  <div className="flex-1">
                    <div className="h-8 w-48 bg-gray-200 rounded-lg animate-shimmer mb-3" />
                    <div className="h-5 w-96 bg-gray-200 rounded-lg animate-shimmer" />
                  </div>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((toolIndex) => (
                  <ToolCardSkeleton key={toolIndex} showFeatures={false} />
                ))}
              </div>
            </section>
          ))}
          
          <span className="sr-only">工具库加载中</span>
        </div>
      </div>
    </div>
  );
}
