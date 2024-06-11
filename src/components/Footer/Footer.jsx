import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <div className={s.footer__container}>
      <div className={s.footer__navBlock}>
        <div className={s.footer__logo}>
          <Logo />
        </div>
        <div className={s.footer__navList}>
          <a className={s.footer__navList__item} href="">
            О нас
          </a>
          <a className={s.footer__navList__item} href="">
            Почитать
          </a>
          <a className={s.footer__navList__item} href="">
            Каталог
          </a>
          <a className={s.footer__navList__item} href="">
            Собери свою тарелку
          </a>
          <a className={s.footer__navList__item} href="">
            Войти
          </a>
          <a className={s.footer__navList__item} href="">
            Корзина
          </a>
        </div>
      </div>
      <div className={s.footer__socialAndAppBlock}>
        <div className={s.footer__socialBlock}>
          <div className={s.footer__socialTitle}>Мы в сетях</div>
          <div className={s.footer__socialIcons}></div>
        </div>

        <div className={s.footer__appBlock}>
          <div className={s.footer__appTitle}>Мы в сетях</div>
          <div className={s.footer__appIcons}></div>
        </div>
      </div>
      <div className={s.footer__QR}></div>
    </div>
  );
};
