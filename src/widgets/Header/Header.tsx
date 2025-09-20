import { BurgerMenu } from './ui/BurgerSideMenu';
import { HeaderButton } from './ui/HeaderButton';
import { Logo } from './ui/Logo';
import Link from 'next/link';
import { Search, ShoppingBasket } from 'lucide-react';
import { ScrollVisibilityClient } from '@/widgets/Header/ScrollVisibilityClient';
import { cn } from '@/shared/lib/cn';

export const Header = () => {
  const headerClasses = cn(
    'bg-background container flex h-14 items-center justify-between drop-shadow-xs',
    'sticky top-0 z-10',
    'translate-y-0 transition-transform duration-300',
  );

  return (
    <header ref={undefined} data-smart-sticky className={headerClasses}>
      <div id="left-buttons" className="flex h-full">
        <BurgerMenu />
        <Logo />
      </div>

      <div id="right-buttons" className="h-full">
        <HeaderButton variant="ghost" className="w-14 border-l-1">
          <Search className="text-foreground size-7" />
        </HeaderButton>
        <HeaderButton variant="ghost" className="w-14 border-l-1" asChild>
          <Link href="/cart">
            <ShoppingBasket className="text-foreground size-7" />
          </Link>
        </HeaderButton>
      </div>
      <ScrollVisibilityClient />
    </header>
  );
};
