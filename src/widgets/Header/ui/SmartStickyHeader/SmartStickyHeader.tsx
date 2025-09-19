'use client';

import { ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';
import { useSticky } from './lib/useSticky';

type StickyBarProps = {
  children: ReactNode;
  hideAfter?: number;
  className?: string;
  asChild?: boolean;
};

export const SmartStickyHeader = ({
  children,
  hideAfter = 150,
  className,
}: StickyBarProps) => {
  const visible = useSticky(hideAfter);

  const stickyClassNames = cn(
    'sticky top-0 z-50 transform transition-transform duration-300',
    visible ? 'translate-y-0' : '-translate-y-full',
    className,
  );

  return <header className={stickyClassNames}>{children}</header>;
};
