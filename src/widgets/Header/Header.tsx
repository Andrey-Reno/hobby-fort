import { SmartStickyHeader } from './ui/SmartStickyHeader';
import { BurgerMenu } from './ui/BurgerSideMenu';
import { HeaderButton } from './ui/HeaderButton';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ShoppingBasket } from 'lucide-react';

interface HeaderProps {
  hideAfter?: number;
}

export const Header = ({ hideAfter = 200 }: HeaderProps) => {
  return (
    <SmartStickyHeader hideAfter={hideAfter}>
      <div className="bg-background flex h-14 items-center justify-between drop-shadow-xs">
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
      </div>
    </SmartStickyHeader>
  );
};
