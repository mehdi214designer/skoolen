'use client';

import { useRef, useEffect } from 'react';

export default function HeroVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      loop
      autoPlay
      playsInline
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.10,
        pointerEvents: 'none',
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
