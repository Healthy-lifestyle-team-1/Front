import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavBar } from '../ui/NavBar';
import UserPage from '../modalWindows/UserPage';
import CartPage from '../modalWindows/CartPage';
import { Logo } from '../ui/Logo';
import Authorization from '../Auth/Authorization/Authorization';
import s from './styles.module.scss';

export const Header = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
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
            setIsAuthenticated(true);
            setUserInfo(response.data); // Сохраняем информацию о пользователе
          }
        } catch (error) {
          console.error('User is not authenticated', error);
          setIsAuthenticated(false);
        }
      }
    };

    checkAuthentication();
  }, []);

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
    <div className={s.header__container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>
          <Logo />
        </div>
        <NavBar />
      </div>
      <div className={s.header__userInfo}>
        {isAuthenticated ? (
          <span onClick={handleOpenUserModal} className={s.link}>
            Личный кабинет
          </span>
        ) : (
          <span onClick={handleOpenAuthModal} className={s.link}>
            Войти
          </span>
        )}
        <span onClick={handleOpenCartModal} className={s.link}>
          Корзина
        </span>
      </div>
      {isUserModalOpen && (
        <UserPage onClose={handleCloseUserModal} userInfo={userInfo} />
      )}
      {isCartModalOpen && <CartPage onClose={handleCloseCartModal} />}
      {isAuthModalOpen && (
        <Authorization
          onClose={handleCloseAuthModal}
          setIsAuthenticated={setIsAuthenticated}
        />
      )}
    </div>
  );
};
