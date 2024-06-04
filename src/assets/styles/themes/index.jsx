import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { ThemeSwitcher } from '../../../components/ui/ThemeSwitcher';
import { set } from './slice';
import s from './index.module.scss';
import { TRUE } from 'sass';

const Theme = ({ className }) => {
  const theme = useSelector(state => state.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleChange = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    dispatch(set(next));
  };

  return (
    <div className={cn(className, s.root, theme === 'dark' ? s.dark : s.light)}>
      <ThemeSwitcher
        width="50px"
        onChange={handleChange}
        checked={theme === 'dark' ? true : false}
      />
    </div>
  );
};

export default Theme;
