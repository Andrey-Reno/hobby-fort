import { HeaderButton } from '../HeaderButton';
import { Search as SearchIcon } from 'lucide-react';

export const SearchButton = () => {
  return (
    <HeaderButton variant="ghost" className="w-14 border-l-1">
      <SearchIcon className="text-foreground size-7" />
    </HeaderButton>
  );
};
