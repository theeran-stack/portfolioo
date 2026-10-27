'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { X, ZoomIn } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  imageUrl: string;
  caption: string;
  onClose: () => void;
}

export default function Lightbox({
  isOpen,
  imageUrl,
  caption,
  onClose
}: LightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="relative w-[90vw] max-w-4xl h-[70vh] rounded-xl overflow-hidden bg-black/50 border border-white/10 shadow-2xl">
          <Image
            src={imageUrl}
            alt={caption || 'Forge Prototype Evidence'}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {caption && (
          <p className="mt-4 text-sm text-center text-gray-300 font-mono bg-black/60 px-4 py-2 rounded-lg border border-white/10 max-w-2xl">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
