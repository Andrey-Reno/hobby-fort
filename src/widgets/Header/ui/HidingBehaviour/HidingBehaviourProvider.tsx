'use client';

import { useSmartSticky } from './useSmartSticky';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
}

export const HidingBehaviourProvider = ({ children }: Props) => {
  const isVisible = useSmartSticky(200);

  const stickyClasses = `${isVisible ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300`;

  return <div className={stickyClasses}>{children}</div>;
};
