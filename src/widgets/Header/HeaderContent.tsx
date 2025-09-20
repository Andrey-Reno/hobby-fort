import { Logo } from './ui/Logo';
import { cn } from '@/shared/lib/cn';
import { BurgerMenu } from './ui/BurgerSideMenu';
import { SearchButton } from './ui/SearchButton';
import { CartButton } from './ui/CartButton';

export const HeaderContent = () => {
  const headerClasses = cn(
    'bg-background container flex h-full items-center justify-between drop-shadow-sm',
  );

  return (
    <div className={headerClasses}>
      <div id="left-buttons" className="flex h-full">
        <BurgerMenu />
        <Logo />
      </div>
      <div id="right-buttons" className="h-full">
        <SearchButton />
        <CartButton />
      </div>
    </div>
  );
};
