import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import s from './styles.module.scss';

export const NavBar = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);

  return (
    <div className={s.container}>
      <div className={s.navBar__links}>
        <NavLink exact to="/" activeClassName={s.activeLink}>
          Главная
        </NavLink>
        <NavLink to="/book" activeClassName={s.activeLink}>
          Книга
        </NavLink>
        <NavLink to="/constructor" activeClassName={s.activeLink}>
          Конструктор
        </NavLink>
        <NavLink to="/catalog" activeClassName={s.activeLink}>
          Каталог
        </NavLink>
        <NavLink to="/news" activeClassName={s.activeLink}>
          Новости
        </NavLink>
        {isAuthorize ? (
          <>
            <NavLink to="/profile" activeClassName={s.activeLink}>
              Профиль
            </NavLink>
            <NavLink to="/cart" activeClassName={s.activeLink}>
              Корзина
            </NavLink>
          </>
        ) : (
          <NavLink to="/login" activeClassName={s.activeLink}>
            Войти
          </NavLink>
        )}
      </div>
    </div>
  );
};
