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
        className="bg-white text-indigo-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-200 ease-apple transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shadow-lg hover:shadow-xl"
      >
        即刻体验
      </button>
      <QRModal />
    </div>
  );
}
