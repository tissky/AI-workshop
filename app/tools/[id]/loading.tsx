export default function ToolDetailLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header Skeleton */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="w-full">
              <div className="h-9 w-48 bg-gray-200 rounded-lg animate-shimmer mb-2" />
              <div className="h-5 w-64 bg-gray-200 rounded-lg animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        role="status"
        aria-live="polite"
        aria-label="加载工具详情"
      >
        {/* Hero Section Skeleton */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-16 w-16 bg-gray-200 rounded-2xl animate-shimmer mx-auto mb-6" />
            <div className="h-12 w-3/4 max-w-lg bg-gray-200 rounded-lg animate-shimmer mx-auto mb-4" />
            <div className="h-6 w-full max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-3" />
            <div className="h-6 w-5/6 max-w-xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-8" />
            <div className="h-12 w-32 bg-gray-200 rounded-full animate-shimmer mx-auto" />
          </div>
        </section>

        {/* Features Grid Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8 mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-shimmer mb-4" />
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-shimmer mb-3" />
                <div className="h-4 w-full bg-gray-200 rounded-lg animate-shimmer mb-2" />
                <div className="h-4 w-5/6 bg-gray-200 rounded-lg animate-shimmer" />
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8 mx-auto" />
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg animate-shimmer mb-4" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-gray-200 rounded-lg animate-shimmer" />
                  <div className="h-4 w-5/6 bg-gray-200 rounded-lg animate-shimmer" />
                  <div className="h-4 w-11/12 bg-gray-200 rounded-lg animate-shimmer" />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related Tools Skeleton */}
        <section>
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8 mx-auto" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="h-10 w-10 bg-gray-200 rounded-lg animate-shimmer mb-3" />
                <div className="h-5 w-3/4 bg-gray-200 rounded-lg animate-shimmer mb-2" />
                <div className="h-4 w-full bg-gray-200 rounded-lg animate-shimmer" />
              </div>
            ))}
          </div>
        </section>
        
        <span className="sr-only">工具详情加载中</span>
      </div>
    </div>
  );
}
