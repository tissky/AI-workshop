import { CarouselSkeleton } from "@/components/skeletons";

export default function ProductsLoading() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Product Categories Skeleton */}
        <section className="mb-20" role="status" aria-live="polite" aria-label="加载产品">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-4" />
          <div className="h-6 w-96 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />

          <div className="space-y-20">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="relative">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="h-8 w-48 bg-gray-200 rounded-lg animate-shimmer mb-4" />
                    <div className="h-5 w-full bg-gray-200 rounded-lg animate-shimmer mb-2" />
                    <div className="h-5 w-3/4 bg-gray-200 rounded-lg animate-shimmer mb-6" />
                    <div className="flex gap-4">
                      <div className="h-12 w-32 bg-gray-200 rounded-full animate-shimmer" />
                      <div className="h-12 w-32 bg-gray-200 rounded-full animate-shimmer" />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <CarouselSkeleton />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <span className="sr-only">产品信息加载中</span>
        </section>

        {/* Additional Features Grid Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-4" />
          <div className="h-6 w-64 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="h-64 bg-gray-200 rounded-2xl animate-shimmer" />
            ))}
          </div>
        </section>

        {/* Social Media Platforms Skeleton */}
        <section className="mb-20">
          <div className="h-10 w-48 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-4" />
          <div className="h-6 w-64 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="h-48 bg-gray-200 rounded-xl animate-shimmer" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
