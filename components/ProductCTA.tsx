"use client";

import Button from "./ui/Button";

interface ProductCTAProps {
  categoryTitle: string;
}

export default function ProductCTA({ categoryTitle }: ProductCTAProps) {
  const handleExperience = () => {
    // Placeholder for experience action
    console.log(`体验 ${categoryTitle}`);
  };

  const handleLearnMore = () => {
    // Placeholder for learn more action
    console.log(`了解更多 ${categoryTitle}`);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button 
        variant="primary"
        size="md"
        onClick={handleExperience}
        aria-label={`体验${categoryTitle}`}
      >
        即刻体验
      </Button>
      <Button 
        variant="outline"
        size="md"
        onClick={handleLearnMore}
        aria-label={`了解${categoryTitle}`}
      >
        了解更多
      </Button>
    </div>
  );
}
