import React from "react";
import { Link } from "react-router-dom";

// import logo from '../../'

import cn from 'classnames';
import s from './styles.module.scss';

export const NavBar = () => {

  return (
    <div className={s.container}>
        <div className={s.navBar__links}>
          <Link to={'/'}>О нас</Link>
          <Link to={'/'}>Книга</Link>
          <Link to={'/'}>Каталог</Link>
        </div>
    </div>
  )
}