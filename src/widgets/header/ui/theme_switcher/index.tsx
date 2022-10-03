import React from 'react';
import { useTheme } from './lib';

export const HeaderThemeSwitcher = () => {
  const [value, toggle] = useTheme();

  return (
    <div className='mt-1 mb-1 mr-2 ml-2'>
      🌞
      <input
        type='checkbox'
        checked={value}
        className={'toggle m-1'}
        onChange={toggle}
        data-toggle-theme='light,dark'
        data-act-class='pl-4'
      />
      🌚
    </div>
  );
};
