import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import UserPage from '../../modalWindows/UserPage';
import CartPage from '../../modalWindows/CartPage';
import { Authorization } from '../../Auth/Authorization';
import s from './styles.module.scss';

export const NavBar = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const dispatch = useDispatch();
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('access');
      if (token) {
        try {
          const response = await axios.get(
            'https://grikoandrey.pythonanywhere.com/user/',
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            },
          );
          if (response.status === 200) {
            dispatch({ type: 'LOGIN_SUCCESS' });
            setUserInfo(response.data); // Сохраняем информацию о пользователе
          }
        } catch (error) {
          console.error('User is not authenticated', error);
          dispatch({ type: 'LOGOUT_SUCCESS' });
        }
      }
    };

    checkAuthentication();
  }, [dispatch]);

  const handleOpenUserModal = () => {
    setIsUserModalOpen(true);
    setIsCartModalOpen(false);
  };

  const handleCloseUserModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenCartModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  return (
    <div className={s.container}>
      <div className={s.navBar__links}>
        <NavLink
          exact
          to="/"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Главная
        </NavLink>
        <NavLink
          to="/book"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Книга
        </NavLink>
        <NavLink
          to="/constructor"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Конструктор
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Каталог
        </NavLink>
        <NavLink
          to="/news"
          className={({ isActive }) => (isActive ? s.activeLink : s.link)}
        >
          Новости
        </NavLink>
        {isAuthorize ? (
          <>
            <span onClick={handleOpenUserModal} className={s.link}>
              Профиль
            </span>
            <span onClick={handleOpenCartModal} className={s.link}>
              Корзина
            </span>
          </>
        ) : (
          <span onClick={handleOpenAuthModal} className={s.link}>
            Войти
          </span>
        )}
      </div>
      {isUserModalOpen && (
        <UserPage onClose={handleCloseUserModal} userInfo={userInfo} />
      )}
      {isCartModalOpen && <CartPage onClose={handleCloseCartModal} />}
      {isAuthModalOpen && (
        <Authorization
          onClose={handleCloseAuthModal}
          setIsAuthenticated={value =>
            dispatch(
              value ? { type: 'LOGIN_SUCCESS' } : { type: 'LOGOUT_SUCCESS' },
            )
          }
        />
      )}
    </div>
  );
};

export default NavBar;
