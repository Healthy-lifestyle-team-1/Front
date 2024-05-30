import React from "react";
import { Link } from "react-router-dom";

import { NavBar }from '../ui/NavBar';
import cn from 'classnames';
import s from './styles.module.scss';

export const Header = () => {

  return (
    <div className={s.container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>
          Зожник
          {/* <img className={s.navBar__logo__img} src={logo} alt={'логотип Зожник'}/> */}
        </div>
        <NavBar />
      </div>
      <div className={s.header__userInfo}>
        <Link to={'/'}>Личный кабинет</Link>
        <Link to={'/'}>Корзина</Link>
      </div>
    </div>
  )
}