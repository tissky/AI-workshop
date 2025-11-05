"use client";

import { useState } from "react";

interface QRModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function QRModal({ isOpen = false, onClose }: QRModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);

  const openModal = () => setInternalOpen(true);
  const closeModal = () => {
    setInternalOpen(false);
    if (onClose) onClose();
  };

  const shouldShow = isOpen || internalOpen;

  return (
    <>
      {/* 如果没有传入isOpen和onClose，则显示自己的按钮 */}
      {!isOpen && !onClose && (
        <button
          onClick={openModal}
          className="border-2 border-white/40 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all backdrop-blur-sm"
        >
          联系我们
        </button>
      )}

      {shouldShow && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-white rounded-3xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">扫码联系我们</h3>
              <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200">
                <img
                  src="/images/qr.png"
                  alt="联系我们二维码"
                  className="w-full max-w-[280px] mx-auto h-auto"
                />
              </div>
              <p className="text-gray-600 mt-6 text-sm">
                扫描二维码，添加客服微信
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}