"use client";

import { useState } from "react";
import Button from "./ui/Button";
import QRModal from "./QRModal";

interface ToolsCTAProps {
  hiddenUrl: string;
}

export default function ToolsCTA({ hiddenUrl }: ToolsCTAProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="secondary"
          size="lg"
          onClick={() => window.open(hiddenUrl, '_blank', 'noopener,noreferrer')}
          aria-label="立即体验AI工具"
          className="bg-background text-foreground hover:bg-muted border border-border shadow-card"
        >
          立即体验
        </Button>
        <Button 
          variant="outline"
          size="lg"
          onClick={() => setShowQRModal(true)}
          aria-label="联系我们"
          className="border-2 border-border text-foreground hover:bg-muted"
        >
          联系我们
        </Button>
      </div>

      {showQRModal && (
        <QRModal onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
