'use client';

import { useSmartSticky } from './useSmartSticky';
import { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface Props {
  children?: ReactNode;
}

export const CollapsingBarBehaviour = ({ children }: Props) => {
  const isVisible = useSmartSticky(200);

  const stickyClasses = cn(
    isVisible ? 'translate-y-0' : '-translate-y-full',
    'h-full transition-transform duration-300',
  );

  return <div className={stickyClasses}>{children}</div>;
};
