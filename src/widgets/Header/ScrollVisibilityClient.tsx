'use client';

import { useEffect } from 'react';

export const ScrollVisibilityClient = () => {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-smart-sticky]');
    if (!header) return;

    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const currentY = window.scrollY;
      const isScrollingUp = currentY < lastY;

      header.classList.toggle('translate-y-0', isScrollingUp);
      header.classList.toggle('-translate-y-full', !isScrollingUp);

      lastY = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (ticking) return;

      requestAnimationFrame(update);
      ticking = true;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};
