import React, { useContext } from 'react';
import ThemeContext from '../../../core/theme/ThemeContext';

const Toggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
};

export default Toggle;