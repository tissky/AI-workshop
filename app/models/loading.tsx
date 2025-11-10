export default function ModelsLoading() {
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
            
            {/* Stats Grid Skeleton */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[1, 2, 3, 4].map((index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="h-10 w-20 bg-gray-200 rounded-lg animate-shimmer mb-2 mx-auto" />
                  <div className="h-4 w-16 bg-gray-200 rounded-lg animate-shimmer mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs Skeleton */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-3 mb-8 justify-center">
          {[1, 2, 3, 4, 5].map((index) => (
            <div 
              key={index} 
              className="h-10 w-24 bg-gray-200 rounded-full animate-shimmer"
            />
          ))}
        </div>

        {/* Models Grid Skeleton */}
        <div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-20"
          role="status"
          aria-live="polite"
          aria-label="加载模型库"
        >
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-shimmer mb-2" />
                  <div className="h-4 w-20 bg-gray-200 rounded-full animate-shimmer" />
                </div>
                <div className="h-8 w-8 bg-gray-200 rounded-full animate-shimmer" />
              </div>
              
              <div className="h-4 w-full bg-gray-200 rounded-lg animate-shimmer mb-6" />
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="h-3 w-12 bg-gray-200 rounded animate-shimmer mb-2" />
                  <div className="h-6 w-16 bg-gray-200 rounded-lg animate-shimmer" />
                </div>
                <div>
                  <div className="h-3 w-12 bg-gray-200 rounded animate-shimmer mb-2" />
                  <div className="h-6 w-16 bg-gray-200 rounded-lg animate-shimmer" />
                </div>
              </div>
              
              <div className="h-10 w-full bg-gray-200 rounded-full animate-shimmer" />
            </div>
          ))}
          
          <span className="sr-only">模型库加载中</span>
        </div>
      </div>
    </div>
  );
}
