export default function TechnologyLoading() {
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
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-14 w-3/4 max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-3" />
          <div className="h-6 w-5/6 max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto" />
        </div>
      </section>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        role="status"
        aria-live="polite"
        aria-label="加载技术信息"
      >
        {/* Technology Stack Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8 mx-auto" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="h-16 w-16 bg-gray-200 rounded-full animate-shimmer mx-auto mb-4" />
                <div className="h-5 w-24 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-2" />
                <div className="h-4 w-full bg-gray-200 rounded-lg animate-shimmer" />
              </div>
            ))}
          </div>
        </section>

        {/* Features Section Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8 mx-auto" />
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-shimmer mb-4" />
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
        
        <span className="sr-only">技术信息加载中</span>
      </div>
    </div>
  );
}
