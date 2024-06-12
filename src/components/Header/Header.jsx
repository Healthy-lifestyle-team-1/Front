import React from 'react';
import { NavBar } from '../ui/NavBar';
import { Logo } from '../ui/Logo';
import s from './styles.module.scss';

export const Header = () => {
  return (
    <div className={s.header__container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>
          <Logo />
        </div>
        <NavBar />
      </div>
    </div>
  );
};
