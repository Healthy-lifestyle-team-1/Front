import React from "react";
import { Link } from "react-router-dom";

import s from './styles.module.scss';

export const HeaderCatalog = () => {

  return (
    <div className={s.container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>
          Зожник
        </div>
      </div>
      <div className={s.header__userInfo}>
        <Link to={'/'}>главная</Link>
        <Link to={'/'}>книга</Link>
        <Link to={'/'}>тарелка</Link>
        <Link to={'/'}>каталог</Link>
        <Link to={'/'}>профиль</Link>
        <Link to={'/'}>корзина</Link>
      </div>
    </div>
  )
}