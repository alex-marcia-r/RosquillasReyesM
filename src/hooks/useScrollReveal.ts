// src/hooks/useScrollReveal.ts
import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = el.querySelectorAll('.reveal');
    elements.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
    };
  }, []);

  return containerRef;
}
