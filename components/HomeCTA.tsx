"use client";

import Button from "./ui/Button";
import QRModalWrapper from "./QRModalWrapper";

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
      <QRModalWrapper />
    </div>
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          variant="secondary"
          onClick={() => window.open(atob(hiddenUrl), '_blank', 'noopener,noreferrer')}
          aria-label="即刻体验AI创意工坊"
          className="bg-white text-accent hover:bg-gray-100"
        >
          即刻体验
        </Button>
        <Button 
          variant="outline"
          onClick={() => setShowQRModal(true)}
          aria-label="了解更多"
          className="border-2 border-white text-white hover:bg-white/10"
        >
          了解更多
        </Button>
      </div>

      {showQRModal && (
        <QRModalWrapper isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
