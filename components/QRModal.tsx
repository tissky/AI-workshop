"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { images } from "@/lib/media";
import Button from "./ui/Button";

interface QRModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function QRModal({ isOpen = false, onClose }: QRModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => {
    setInternalOpen(true);
    setIsAnimating(true);
  };

  const closeModal = useCallback(() => {
    setIsAnimating(false);
    setTimeout(() => {
      setInternalOpen(false);
      if (onClose) onClose();
      if (triggerRef.current) {
        triggerRef.current.focus();
      }
    }, 200); // Match animation duration
  }, [onClose]);

  const shouldShow = isOpen || internalOpen;

  useEffect(() => {
    if (shouldShow && closeButtonRef.current) {
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);
    }
  }, [shouldShow]);

  useEffect(() => {
    if (!shouldShow) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
        return;
      }

      if (e.key === "Tab") {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shouldShow, closeModal]);

  const handleBackdropClick = () => {
    closeModal();
  };

  const handleBackdropKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closeModal();
    }
  };

  return (
    <>
      {/* Trigger button (only shown when component manages its own state) */}
      {!isOpen && !onClose && (
        <Button
          ref={triggerRef}
          onClick={openModal}
          variant="outline"
          size="md"
          className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm"
        >
          联系我们
        </Button>
      )}

      {/* Modal overlay and dialog */}
      {shouldShow && (
        <div 
          className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-opacity duration-200 ease-apple ${
            isAnimating ? "opacity-100" : "opacity-0"
          }`}
          style={{
            animation: isAnimating 
              ? "modal-fade-in 200ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards" 
              : "none"
          }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={handleBackdropClick}
            onKeyDown={handleBackdropKeyDown}
            role="button"
            tabIndex={-1}
            aria-label="关闭对话框"
          />
          
          {/* Modal Dialog */}
          <div 
            ref={modalRef}
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="qr-modal-title"
            className={`relative bg-background rounded-3xl p-8 max-w-md w-full shadow-dialog transition-all duration-200 ease-apple ${
              isAnimating 
                ? "opacity-100 scale-100 translate-y-0" 
                : "opacity-0 scale-95 translate-y-4"
            }`}
            style={{
              animation: isAnimating 
                ? "modal-slide-in 200ms cubic-bezier(0.25, 0.1, 0.25, 1) forwards" 
                : "none"
            }}
          >
            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={closeModal}
              aria-label="关闭对话框"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors duration-200 ease-apple focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 rounded-lg hover:bg-muted active:bg-border"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Modal content */}
            <div className="text-center">
              <h3 
                id="qr-modal-title" 
                className="text-2xl font-bold text-foreground mb-6"
              >
                扫码联系我们
              </h3>
              
              {/* QR Code container */}
              <div className="bg-muted p-6 rounded-2xl border border-border">
                <Image
                  src={images.qr}
                  alt="联系我们二维码"
                  className="w-full max-w-[280px] mx-auto h-auto"
                  width={280}
                  height={280}
                  sizes="(max-width: 640px) 280px, 280px"
                  placeholder="blur"
                />
              </div>
              
              {/* Helper text */}
              <p className="text-muted-foreground mt-6 text-sm">
                扫描二维码，添加客服微信
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Animation keyframes - only applied when prefers-reduced-motion is not set */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          @keyframes modal-fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes modal-slide-in {
            from {
              opacity: 0;
              transform: scale(0.95) translateY(1rem);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes modal-fade-in {
            from, to {
              opacity: 1;
            }
          }

          @keyframes modal-slide-in {
            from, to {
              opacity: 1;
              transform: none;
            }
          }
        }
      `}</style>
    </>
  );
}
