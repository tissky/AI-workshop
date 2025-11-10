import BaseSkeleton from "./BaseSkeleton";

interface HeroImageSkeletonProps {
  aspectRatio?: "square" | "landscape" | "portrait";
  className?: string;
}

export default function HeroImageSkeleton({
  aspectRatio = "landscape",
  className = ""
}: HeroImageSkeletonProps) {
  const aspectClasses = {
    square: "aspect-square",
    landscape: "aspect-video",
    portrait: "aspect-[3/4]"
  };

  return (
    <div 
      className={`relative max-w-3xl mx-auto ${className}`}
      aria-busy="true"
      role="status"
      aria-label="加载图片"
    >
      <div className={`w-full ${aspectClasses[aspectRatio]} bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl overflow-hidden shadow-lg`}>
        <BaseSkeleton width="w-full" height="h-full" rounded="rounded-none" />
      </div>
      
      <span className="sr-only">图片加载中</span>
    </div>
  );
}
