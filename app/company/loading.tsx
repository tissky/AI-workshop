export default function CompanyLoading() {
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
      <section className="relative py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-14 w-3/4 max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
          <div className="h-6 w-full max-w-3xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-3" />
          <div className="h-6 w-5/6 max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />
        </div>
      </section>

      <div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        role="status"
        aria-live="polite"
        aria-label="加载公司信息"
      >
        {/* Content Sections Skeleton */}
        {[1, 2, 3].map((section) => (
          <section key={section} className="mb-20">
            <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mb-8" />
            <div className="space-y-4">
              <div className="h-5 w-full bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-5 w-11/12 bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-5 w-full bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-5 w-10/12 bg-gray-200 rounded-lg animate-shimmer" />
            </div>
          </section>
        ))}

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
        
        <span className="sr-only">公司信息加载中</span>
      </div>
    </div>
  );
}
