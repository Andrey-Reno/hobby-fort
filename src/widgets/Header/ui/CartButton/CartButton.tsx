import { HeaderButton } from '../HeaderButton';
import { ShoppingBasket as CartIcon } from 'lucide-react';
import Link from 'next/link';

export const CartButton = () => {
  return (
    <HeaderButton variant="ghost" className="w-14 border-l-1" asChild>
      <Link href="/cart">
        <CartIcon className="text-foreground size-7" />
      </Link>
    </HeaderButton>
  );
};
