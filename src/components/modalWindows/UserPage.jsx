import React from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import Theme from '../../assets/styles/themes/index';
import { Button } from '../ui/Button';

import x from '../../assets/images/icons/light/X.svg';
import blueCart from '../../assets/images/icons/light/blue-cart.svg';
import blueLike from '../../assets/images/icons/light/blue-like.svg';
import blueSet from '../../assets/images/icons/light/blue-set.svg';
import blueSup from '../../assets/images/icons/light/blue-sup.svg';
import blueCartDark from '../../assets/images/icons/dark/blue-cart.svg';
import blueLikeDark from '../../assets/images/icons/dark/blue-like.svg';
import blueSetDark from '../../assets/images/icons/dark/blue-set.svg';
import blueSupDark from '../../assets/images/icons/dark/blue-sup.svg';

const UserPage = ({ onClose }) => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={s.modalOverlay}>
      <div className={s.modal__content}>
        <div className={s.modal__name}>Профиль</div>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.profile__info}>
          <div className={s.profile__infoBlock}>
            <div className={s.profile__name}>Надежда</div>
            <div className={s.profile__phone}>+ 999 999 - 99 -99</div>
          </div>
          <div className={s.profile__theme}>
            <Theme />
          </div>
        </div>

        <div className={s.profile__menu}>
          <div className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueCartDark : blueCart}
              alt={'Заказы'}
            />
            Заказы
          </div>
          <div className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueLikeDark : blueLike}
              alt={'Избранное'}
            />
            Избранное
          </div>
          <div className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSupDark : blueSup}
              alt={'Поддержка'}
            />
            Поддержка
          </div>
          <div className={s.profile__menu__item}>
            <img
              src={theme === 'dark' ? blueSetDark : blueSet}
              alt={'Настройки'}
            />
            Настройки
          </div>
        </div>
        <div className={s.logoutButton}>
          <Button
            title="Выйти"
            onClick={() => console.log('Button clicked')}
            colorScheme={1}
            size={1}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
