import { CollapsingBarBehaviour } from './providers/CollapsingBarBehaviour';
import { HeaderContent } from './HeaderContent';

export const Header = () => {
  return (
    <header className={'sticky top-0 z-10 h-14'}>
      <CollapsingBarBehaviour>
        <HeaderContent />
      </CollapsingBarBehaviour>
    </header>
  );
};
