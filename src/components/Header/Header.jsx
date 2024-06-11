import React, { useState } from 'react';
import { NavBar } from '../ui/NavBar';
import UserPage from '../modalWindows/UserPage';
import CartPage from '../modalWindows/CartPage';


import s from './styles.module.scss';

export const Header = () => {
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

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

  return (
    <div className={s.header__container}>
      <div className={s.header__navigation}>
        <div className={s.header__logo}>Зожник</div>
        <NavBar />
      </div>
      <div className={s.header__userInfo}>
        <span onClick={handleOpenUserModal} className={s.link}>
          Личный кабинет
        </span>
        <span onClick={handleOpenCartModal} className={s.link}>
          Корзина
        </span>
      </div>
      {isUserModalOpen && <UserPage onClose={handleCloseUserModal} />}
      {isCartModalOpen && <CartPage onClose={handleCloseCartModal} />}
    </div>
  );
};
