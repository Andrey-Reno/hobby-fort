'use client';

import { HeaderButton } from './HeaderButton/HeaderButton';
import Link from 'next/link';
import { Search, ShoppingBasket } from 'lucide-react';
import Image from 'next/image';
import { BurgerMenu } from '@/widgets/Header/ui/BurgerSideMenu';
import { useCallback, useEffect, useRef, useState } from 'react';
import { cn } from '@/shared/lib/cn';

type Props = {
  revealOffset?: number;
  hideAfter?: number;
};

export const Header = ({ revealOffset = 50, hideAfter = 100 }: Props) => {
  const [visible, setVisible] = useState(true);
  const lastY = useRef(0);
  const ticking = useRef(false);

  const onScroll = useCallback(() => {
    if (ticking.current) return;
    ticking.current = true;

    window.requestAnimationFrame(() => {
      const currentY = window.scrollY;

      const isAtTop = currentY <= revealOffset;
      const isScrollingDown = currentY > lastY.current;
      const isPastHideThreshold = currentY > hideAfter;

      if (isAtTop) {
        setVisible(true);
      } else if (isScrollingDown && isPastHideThreshold) {
        setVisible(false);
      } else if (!isScrollingDown) {
        setVisible(true);
      }

      lastY.current = currentY;
      ticking.current = false;
    });
  }, [hideAfter, revealOffset]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll]);

  const headerClassnames = cn(
    'bg-background sticky top-0 flex h-14 items-center justify-between drop-shadow-xs',
    'transform transition-transform duration-300',
  );

  return (
    <header
      style={{
        transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
      className={headerClassnames}
    >
      <div className="flex h-full">
        <BurgerMenu />
        <HeaderButton variant={'ghost'} asChild>
          <Link href={'/'}>
            <Image
              src="/assets/logo-horizontal.svg"
              alt="Логотип магазина Hobby Fort"
              width={96}
              height={30}
            />
          </Link>
        </HeaderButton>
      </div>

      <div className="h-full">
        <HeaderButton variant="ghost" className="w-14 border-l-1">
          <Search className="size-7 text-black" />
        </HeaderButton>
        <HeaderButton variant="ghost" className="w-14 border-l-1" asChild>
          <Link href="/cart">
            <ShoppingBasket className="size-7 text-black" />
          </Link>
        </HeaderButton>
      </div>
    </header>
  );
};
