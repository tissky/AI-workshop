"use client";

import Button from "./ui/Button";

interface HomeCTAProps {
  hiddenUrl: string;
}

export default function HomeCTA({ hiddenUrl }: HomeCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button 
        variant="secondary"
        onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
        aria-label="即刻体验AI创意工坊"
        className="bg-white text-accent hover:bg-gray-100"
      >
        即刻体验
      </Button>
    </div>
  );
}
