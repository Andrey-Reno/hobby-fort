import { HeaderButton } from './HeaderButton';
import Link from 'next/link';
import BurgerIcon from '@/shared/ui/assets/icons/burger.svg';
import CartIcon from '@/shared/ui/assets/icons/cart.svg';
import LenseIcon from '@/shared/ui/assets/icons/lense.svg';
import Image from 'next/image';

export const Header = () => {
    return (
        <header className="bg-background flex h-14 items-center justify-between drop-shadow-xs">
            <div className="flex h-full">
                <HeaderButton className="w-14">
                    <BurgerIcon className="size-6 text-white" />
                </HeaderButton>

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
                <HeaderButton variant="ghost" className="w-14">
                    <LenseIcon className="size-6 text-black" />
                </HeaderButton>
                <HeaderButton variant="ghost" className="w-14" asChild>
                    <Link href="/cart">
                        <CartIcon className="size-6 text-black" />
                    </Link>
                </HeaderButton>
            </div>
        </header>
    );
};
