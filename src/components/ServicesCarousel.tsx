'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80&auto=format&fit=crop",
    alt: "Website Design & Development",
    label: "Website Design",
  },
  {
    src: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80&auto=format&fit=crop",
    alt: "App Development",
    label: "App Development",
  },
  {
    src: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&q=80&auto=format&fit=crop",
    alt: "Workflow Automation",
    label: "Workflow Automation",
  },
  {
    src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
    alt: "Website Audit & Optimization",
    label: "Website Audit",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
    alt: "Website Management",
    label: "Website Management",
  },
];

const VISIBLE = 3;
const GAP = 20;
const MAX_IDX = IMAGES.length - VISIBLE; // 2

export default function ServicesCarousel() {
  const [current, setCurrent] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const overflowRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>(null);

  const computeTranslate = useCallback((idx: number) => {
    if (!overflowRef.current) return;
    const w = overflowRef.current.clientWidth;
    const cardW = (w - GAP * (VISIBLE - 1)) / VISIBLE;
    setTranslateX(-(idx * (cardW + GAP)));
  }, []);

  const go = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, MAX_IDX));
    setCurrent(clamped);
    computeTranslate(clamped);
  }, [computeTranslate]);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c >= MAX_IDX ? 0 : c + 1;
        computeTranslate(next);
        return next;
      });
    }, 4000);
  }, [computeTranslate]);

  useEffect(() => {
    computeTranslate(0);
    startTimer();
    const handleResize = () => computeTranslate(current);
    window.addEventListener('resize', handleResize);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePrev = () => { go(current - 1); startTimer(); };
  const handleNext = () => { go(current + 1); startTimer(); };

  const cardWidth = overflowRef.current
    ? (overflowRef.current.clientWidth - GAP * (VISIBLE - 1)) / VISIBLE
    : undefined;

  return (
    <div className="cta-carousel-wrap">
      <div className="carousel-overflow" ref={overflowRef}>
        <div
          className="carousel-track"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {IMAGES.map((img) => (
            <div
              key={img.src}
              className="carousel-card"
              style={cardWidth ? { width: cardWidth } : { width: `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})` }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 80vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="carousel-card-label">{img.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-controls">
        <button
          className="carousel-btn"
          aria-label="Previous slide"
          onClick={handlePrev}
          disabled={current === 0}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <div className="carousel-dots" role="tablist" aria-label="Carousel position">
          {Array.from({ length: MAX_IDX + 1 }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === current}
              aria-label={`Slide ${i + 1}`}
              className={`carousel-dot${i === current ? ' is-active' : ''}`}
              onClick={() => { go(i); startTimer(); }}
            />
          ))}
        </div>

        <button
          className="carousel-btn"
          aria-label="Next slide"
          onClick={handleNext}
          disabled={current === MAX_IDX}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
