import { HeaderButton } from '../HeaderButton';
import { Menu as MenuIcon } from 'lucide-react';

export const BurgerButton = ({ ...props }) => {
  return (
    <HeaderButton {...props} className="w-14">
      <MenuIcon className="size-6 text-white" />
    </HeaderButton>
  );
};
