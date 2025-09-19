'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export const useSticky = (pixelsThreshold = 200) => {
  const [isVisible, setIsVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    window.requestAnimationFrame(() => {
      const currentY = window.scrollY;

      const isScrollingDown = currentY > lastY.current;
      const isPastHideThreshold = currentY > pixelsThreshold;

      if (isScrollingDown && isPastHideThreshold) {
        setIsVisible(false);
      } else if (!isScrollingDown) {
        setIsVisible(true);
      }

      lastY.current = currentY;
      ticking.current = false;
    });
  }, [pixelsThreshold]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  return isVisible;
};
