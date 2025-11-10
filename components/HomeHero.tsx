"use client";

import { useState } from "react";
import QRModal from "./QRModal";

interface HomeHeroProps {
  hiddenUrl: string;
}

export default function HomeHero({ hiddenUrl }: HomeHeroProps) {
  const [showQRModal, setShowQRModal] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => window.open(atob(hiddenUrl), '_blank')}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-all transform hover:scale-105"
        >
          即刻体验
        </button>
        <button 
          onClick={() => setShowQRModal(true)}
          className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full text-lg font-medium hover:border-gray-400 transition-all"
        >
          了解更多
        </button>
      </div>

      {showQRModal && (
        <QRModal onClose={() => setShowQRModal(false)} />
      )}
    </>
  );
}
