import { HeaderButton } from '@/widgets/Header/ui/HeaderButton';
import { Menu as MenuIcon } from 'lucide-react';

export const BurgerHeaderButton = ({ ...props }) => {
  return (
    <HeaderButton {...props} className="w-14">
      <MenuIcon className="size-6 text-white" />
    </HeaderButton>
  );
};
