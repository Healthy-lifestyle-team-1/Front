import React from 'react';
import { useSelector } from 'react-redux';
import { NavBar } from '../ui/NavBar';
import { Link } from 'react-router-dom';
import LogoLight from '../../assets/images/logo-light.png';
import LogoDark from '../../assets/images/logo-dark.png';
import s from './styles.module.scss';

export const Header = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const theme = useSelector(state => state.theme);

  return (
    <div className={s.header__container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>
          <Link to="/">
            <img src={theme === 'dark' ? LogoLight : LogoDark} alt="ЗОЖНИК" />
          </Link>
        </div>
        <NavBar />
      </div>
    </div>
  );
};
