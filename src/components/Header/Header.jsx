import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../ui/NavBar';
import cn from 'classnames';
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
    <div className={s.container}>
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

const UserPage = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={s.profileInfo}>
          <div className={s.profileName}>Имя</div>
          <div className={s.profilePhone}>+7 999 999 99 99</div>
        </div>
        <div className={s.profileMenu}>
          <div className={s.menuItem}>
            <span className={s.menuIcon}>🛒</span> Заказы
          </div>
          <div className={s.menuItem}>
            <span className={s.menuIcon}>❤️</span> Избранное
          </div>
          <div className={s.menuItem}>
            <span className={s.menuIcon}>⚙️</span> Настройки
          </div>
          <div className={s.menuItem}>
            <span className={s.menuIcon}>🌗</span> Выбор темы
          </div>
        </div>
        <button className={s.logoutButton}>Выйти</button>
      </div>
    </div>
  );
};

const CartPage = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modalContent}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={s.cartHeader}>
          <h2>Корзина</h2>
          <div className={s.cartTotal}>Сумма товаров: 3 000 р</div>
        </div>
        <div className={s.cartItems}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <div key={index} className={s.cartItem}>
                <img
                  src="image_url"
                  alt="product"
                  className={s.cartItemImage}
                />
                <div className={s.cartItemInfo}>
                  <div className={s.cartItemName}>
                    Куриная грудка с яйцами, рисом
                  </div>
                  <div className={s.cartItemPrice}>1000 р</div>
                  <div className={s.cartItemControls}>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                    <button className={s.removeItem}>×</button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <textarea placeholder="Комментарий" className={s.comment}></textarea>
        <button className={s.checkoutButton}>Оформить</button>
      </div>
    </div>
  );
};
