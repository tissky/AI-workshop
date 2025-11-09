"use client";

import { useState } from "react";
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
          className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl"
        >
          立即体验
        </button>
        <button 
          onClick={() => setShowQRModal(true)}
          className="border-2 border-white/40 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          联系我们
        </button>
      </div>

      {showQRModal && (
        <QRModal onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
