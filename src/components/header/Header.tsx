import React from 'react';
import { HeaderBrandLink } from './components/HeaderBrandLink';
import { HeaderLogo } from './components/HeaderLogo';
import { HeaderThemeSwitcher } from './components/HeaderThemeSwitcher';

const Component: React.FC = () => {
  return (
    <header className='navbar text-neutral-content shadow-lg '>
      <HeaderLogo />

      <HeaderThemeSwitcher />
      <HeaderBrandLink
        brand={'github'}
        link={'https://github.com/osovv/sorting-visualizer/'}
      />
    </header>
  );
};

export const Header = React.memo(Component);
