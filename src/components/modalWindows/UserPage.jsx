import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import s from './styles.module.scss';
import Theme from '../../assets/styles/themes/index';
import { Button } from '../ui/Button';
import axios from 'axios';

import x from '../../assets/images/icons/light/X.svg';
import blueCart from '../../assets/images/icons/light/blue-cart.svg';
import blueLike from '../../assets/images/icons/light/blue-like.svg';
import blueSet from '../../assets/images/icons/light/blue-set.svg';
import blueSup from '../../assets/images/icons/light/blue-sup.svg';
import blueCartDark from '../../assets/images/icons/dark/blue-cart.svg';
import blueLikeDark from '../../assets/images/icons/dark/blue-like.svg';
import blueSetDark from '../../assets/images/icons/dark/blue-set.svg';
import blueSupDark from '../../assets/images/icons/dark/blue-sup.svg';

const UserPage = ({ onClose, userInfo }) => {
  const theme = useSelector(state => state.theme);

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/logout/',
      );
      if (response.status === 200) {
        localStorage.removeItem('access'); // Удаляем токен из локального хранилища
        onClose();
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
    window.location.reload();
  };

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <div className={s.modal__name}>Профиль</div>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.profile__info}>
          <div className={s.profile__infoBlock}>
            <div className={s.profile__name}>
              {userInfo && userInfo.user ? userInfo.user.username : ''}
            </div>
            <div className={s.profile__phone}>
              {userInfo && userInfo.user ? userInfo.user.email : ''}
            </div>
          </div>
          <div className={s.profile__theme}>
            <Theme />
          </div>
        </div>

        <div className={s.profile__menu}>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueCartDark : blueCart}
              alt={'Заказы'}
            />
            Заказы
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueLikeDark : blueLike}
              alt={'Избранное'}
            />
            Избранное
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSupDark : blueSup}
              alt={'Поддержка'}
            />
            Поддержка
          </Link>
          <Link to="/inprogress" className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSetDark : blueSet}
              alt={'Настройки'}
            />
            Настройки
          </Link>
        </div>
        <div className={s.logoutButton}>
          <Button
            title="Выйти"
            onClick={handleLogout}
            colorScheme={1}
            size={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
