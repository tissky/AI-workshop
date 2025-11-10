import BaseSkeleton from "./BaseSkeleton";

export default function CarouselSkeleton() {
  return (
    <section 
      className="relative w-full h-full"
      aria-busy="true"
      aria-live="polite"
      aria-label="加载中"
      role="status"
    >
      <div className="relative h-96 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <BaseSkeleton width="w-full" height="h-full" rounded="rounded-none" />
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/20 to-transparent p-6 md:p-8">
          <BaseSkeleton width="w-2/3" height="h-8" className="mb-3" />
          <BaseSkeleton width="w-1/2" height="h-4" />
        </div>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <BaseSkeleton width="w-3" height="h-3" rounded="rounded-full" />
          <BaseSkeleton width="w-3" height="h-3" rounded="rounded-full" />
          <BaseSkeleton width="w-3" height="h-3" rounded="rounded-full" />
        </div>
      </div>
      
      <div className="mt-6 flex space-x-4 overflow-hidden pb-4">
        {[1, 2, 3, 4].map((i) => (
          <BaseSkeleton
            key={i}
            width="w-24 md:w-32"
            height="h-16 md:h-20"
            rounded="rounded-lg"
            className="flex-shrink-0"
          />
        ))}
      </div>
      
      <span className="sr-only">图片轮播加载中</span>
    </section>
  );
}
