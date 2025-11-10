interface BaseSkeletonProps {
  className?: string;
  width?: string;
  height?: string;
  rounded?: string;
  children?: React.ReactNode;
}

export default function BaseSkeleton({
  className = "",
  width = "w-full",
  height = "h-4",
  rounded = "rounded-lg",
  children
}: BaseSkeletonProps) {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-800 animate-shimmer ${width} ${height} ${rounded} ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}
