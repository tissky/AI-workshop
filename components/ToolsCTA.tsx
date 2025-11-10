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
        <button 
          onClick={() => window.open(hiddenUrl, '_blank')}
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 ease-apple transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shadow-xl hover:shadow-2xl"
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
          className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-200 ease-apple backdrop-blur-sm transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
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
