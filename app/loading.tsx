import { FeatureCardSkeleton, HeroImageSkeleton } from "@/components/skeletons";

export default function HomeLoading() {
  return (
    <div className="bg-white">
      {/* Navigation Skeleton */}
      <nav className="fixed top-0 left-0 right-0 z-50 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-[980px] mx-auto h-full px-4">
          <div className="flex items-center justify-between h-full">
            <div className="h-6 w-32 bg-gray-200 rounded-lg animate-shimmer" />
            <div className="hidden md:flex items-center space-x-8">
              <div className="h-4 w-16 bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-4 w-20 bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-4 w-16 bg-gray-200 rounded-lg animate-shimmer" />
              <div className="h-8 w-24 bg-gray-200 rounded-full animate-shimmer" />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section Skeleton */}
      <section 
        className="pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white"
        role="status"
        aria-live="polite"
        aria-label="加载首页"
      >
        <div className="max-w-[980px] mx-auto px-4">
          <div className="text-center">
            <div className="h-20 w-96 max-w-full bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
            <div className="h-10 w-80 max-w-full bg-gray-200 rounded-lg animate-shimmer mx-auto mb-8" />
            <div className="h-6 w-full max-w-2xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-4" />
            <div className="h-6 w-3/4 max-w-xl bg-gray-200 rounded-lg animate-shimmer mx-auto mb-12" />
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="h-12 w-36 bg-gray-200 rounded-full animate-shimmer" />
              <div className="h-12 w-36 bg-gray-200 rounded-full animate-shimmer" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section Skeleton */}
      <section className="py-32 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          {[1, 2, 3, 4].map((index) => (
            <div key={index} className="mb-48">
              <div className="text-center mb-16">
                <div className="h-16 w-64 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
                <div className="h-8 w-80 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-8" />
                <div className="h-6 w-96 max-w-full bg-gray-200 rounded-lg animate-shimmer mx-auto" />
              </div>
              <HeroImageSkeleton aspectRatio="landscape" />
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid Skeleton */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <div className="h-12 w-48 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-6" />
            <div className="h-6 w-64 bg-gray-200 rounded-lg animate-shimmer mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((index) => (
              <FeatureCardSkeleton key={index} itemCount={0} />
            ))}
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl p-6 h-32"
              >
                <div className="h-10 w-10 bg-gray-200 rounded animate-shimmer mx-auto mb-3" />
                <div className="h-5 w-24 bg-gray-200 rounded-lg animate-shimmer mx-auto mb-2" />
                <div className="h-4 w-20 bg-gray-200 rounded-lg animate-shimmer mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <span className="sr-only">页面加载中</span>
    </div>
  );
}
