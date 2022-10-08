import { memo } from 'react';
import { HeaderBrandLink } from './ui/brand_link';
import { HeaderLogo } from './ui/logo';
import { HeaderThemeSwitcher } from './ui/theme_switcher';

const Component: React.FC = () => {
  return (
    <header className='navbar text-neutral-content shadow-lg '>
      <HeaderLogo />

      <HeaderThemeSwitcher />
      <HeaderBrandLink
        brand='github'
        link='https://github.com/osovv/sorting-visualizer/'
      />
    </header>
  );
};

export const Header = memo(Component);
