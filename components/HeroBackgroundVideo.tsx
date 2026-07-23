'use client';

import { useEffect, useRef } from 'react';

interface HeroBackgroundVideoProps {
  /** Path relative to /public, e.g. "/videos/reel-2.mp4" */
  src: string;
}

/**
 * Renders the hero's looping background video, but doesn't attach a <source>
 * (and so triggers no network request) until the browser is idle after first
 * paint. The poster image behind it (rendered separately with next/image
 * priority) is what LCP measures — this video no longer competes with it for
 * bandwidth during initial load.
 */
export function HeroBackgroundVideo({ src }: HeroBackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const startLoading = () => {
      // Guards against React Strict Mode's double effect invocation (and any
      // other re-run) appending a second <source> and aborting the first fetch.
      if (video.querySelector('source')) return;
      const source = document.createElement('source');
      source.src = src;
      source.type = src.endsWith('.mp4') ? 'video/mp4' : 'video/quicktime';
      video.appendChild(source);
      video.load();
      video.play().catch(() => {
        // Autoplay can be rejected (e.g. reduced-motion, low-power mode) —
        // the poster image stays visible underneath, which is a fine fallback.
      });
    };

    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(startLoading, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(startLoading, 1000);
    return () => window.clearTimeout(id);
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />
  );
}
