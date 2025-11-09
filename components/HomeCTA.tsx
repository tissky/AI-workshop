"use client";

import QRModal from "./QRModal";

interface HomeCTAProps {
  hiddenUrl: string;
}

export default function HomeCTA({ hiddenUrl }: HomeCTAProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button 
        onClick={() => window.open(atob(hiddenUrl), '_blank')}
        className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-100 transition-all transform hover:scale-105"
      >
        即刻体验
      </button>
      <QRModal />
    </div>
  );
}
