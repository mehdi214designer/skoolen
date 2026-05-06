'use client';

import { useEffect } from 'react';

export default function ScrollInit() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    document.querySelectorAll('[data-scroll]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
