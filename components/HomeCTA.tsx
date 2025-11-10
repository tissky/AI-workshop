"use client";

import { useState } from "react";
import QRModal from "./QRModal";

interface HomeCTAProps {
  hiddenUrl: string;
}

export default function HomeCTA({ hiddenUrl }: HomeCTAProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          onClick={() => window.open(atob(hiddenUrl), '_blank')}
          className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
        >
          即刻体验
        </button>
        <button
          onClick={() => setShowQRModal(true)}
          className="border-2 border-white/40 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          了解更多
        </button>
      </div>
      <QRModal isOpen={showQRModal} onClose={() => setShowQRModal(false)} />
    </>
  );
}
