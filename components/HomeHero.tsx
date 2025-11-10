"use client";

import { useState } from "react";
import Hero from "./ui/Hero";
import Button from "./ui/Button";
import QRModal from "./QRModal";

interface HomeHeroProps {
  hiddenUrl: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function HomeHero({ 
  hiddenUrl,
  title = "AI创意工坊",
  subtitle = "释放无限创意可能",
  description = "集成30+专业AI工具，涵盖图片处理、视频编辑、文案创作等多个领域"
}: HomeHeroProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        variant="gradient"
        align="center"
        actions={
          <>
            <Button
              size="lg"
              onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
              aria-label="即刻体验AI创意工坊"
            >
              即刻体验
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowQRModal(true)}
              aria-label="了解更多关于AI创意工坊"
            >
              了解更多
            </Button>
          </>
        }
      />

      {showQRModal && (
        <QRModal onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
