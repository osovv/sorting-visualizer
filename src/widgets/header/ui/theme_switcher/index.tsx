import { useTheme, useToggleTheme } from './model';

export const HeaderThemeSwitcher = () => {
  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  return (
    <div className='mt-1 mb-1 mr-2 ml-2'>
      🌞
      <input
        type='checkbox'
        checked={theme}
        className='toggle m-1'
        onChange={toggleTheme}
      />
      🌚
    </div>
  );
};
