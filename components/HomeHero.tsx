"use client";

import { useState } from "react";
import Hero, { HeroCTA } from "./sections/Hero";
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

  const ctas: HeroCTA[] = [
    {
      label: "即刻体验",
      onClick: () => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer'),
      variant: "primary",
      ariaLabel: "即刻体验AI创意工坊"
    },
    {
      label: "了解更多",
      onClick: () => setShowQRModal(true),
      variant: "outline",
      ariaLabel: "了解更多关于AI创意工坊"
    }
  ];

  return (
    <>
      <Hero
        title={title}
        subtitle={subtitle}
        description={description}
        ctas={ctas}
        alignment="center"
        background="gradient"
      />

      {showQRModal && (
        <QRModal onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
