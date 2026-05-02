'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import type { PortfolioItem } from '@/lib/portfolio';

interface LightboxProps {
  item: PortfolioItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
  /** e.g. "12 / 45" */
  counter?: string;
}

export function Lightbox({
  item,
  onClose,
  onPrev,
  onNext,
  hasPrev = false,
  hasNext = false,
  counter,
}: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev && onPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext && onNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
    };
  }, [handleKey]);

  return (
    /* Backdrop — click to close */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.95)' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 z-10 p-2 text-white/60 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Counter */}
      {counter && (
        <div className="absolute top-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-mono tracking-widest">
          {counter}
        </div>
      )}

      {/* Prev */}
      {hasPrev && (
        <button
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
          aria-label="Previous photo"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Image — stop propagation so click on image doesn't close */}
      <div
        className="relative w-[90vw] h-[85vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          priority
          sizes="90vw"
          className="object-contain"
        />
      </div>

      {/* Next */}
      {hasNext && (
        <button
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 p-3 text-white/50 hover:text-white transition-colors"
          onClick={(e) => { e.stopPropagation(); onNext?.(); }}
          aria-label="Next photo"
        >
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Caption bar */}
      {(item.caption || item.category) && (
        <div
          className="absolute bottom-0 left-0 right-0 px-6 py-5 text-center pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
          onClick={(e) => e.stopPropagation()}
        >
          {item.caption && (
            <p className="text-white font-semibold text-sm md:text-base">{item.caption}</p>
          )}
          <p className="text-white/50 text-xs uppercase tracking-widest mt-1">{item.category}</p>
        </div>
      )}
    </div>
  );
}
