import React from 'react';
import s from './styles.module.scss';

const UserPage = ({ onClose }) => {
  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <button className={s.closeButton} onClick={onClose}>
          ×
        </button>
        <div className={s.profile__info}>
          <div className={s.profile__name}>Надежда</div>
          <div className={s.profile__phone}>+999 999 - 99 -99</div>
        </div>
        <div className={s.profile__menu}>
          <div className={s.profile__menu__item}>
            <span className={s.profile__menu__icon}>🛒</span> Заказы
          </div>
          <div className={s.profile__menu__item}>
            <span className={s.profile__menu__icon}>❤️</span> Избранное
          </div>
          <div className={s.profile__menu__item}>
            <span className={s.profile__menu__icon}>⚙️</span> Настройки
          </div>
          <div className={s.profile__menu__item}>
            <span className={s.profile__menu__icon}>🌗</span> Выбор темы
            <span className={s.themeToggle}>🌞</span>
          </div>
        </div>
        <button className={s.logoutButton}>Выйти</button>
      </div>
    </div>
  );
};

export default UserPage;
