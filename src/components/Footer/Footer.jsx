import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import s from './styles.module.scss';
import LogoLight from '../../assets/images/logo-light.png';
import LogoDark from '../../assets/images/logo-dark.png';
import Instagram from '../../assets/images/icons/instagram.svg';
import YouTube from '../../assets/images/icons/youtube.svg';
import Telegram from '../../assets/images/icons/telegram.svg';
import QR from '../../assets/images/qr.png';
import UserPage from '../modalWindows/UserPage/UserPage';
import CartPage from '../modalWindows/CartPage';
import { Authorization } from '../Auth/Authorization';
import { Registration } from '../Auth/Registration';

export const Footer = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const theme = useSelector(state => state.theme);

  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const handleOpenModal = (setModalOpen) => {
    document.body.classList.add('modal-open');
    setModalOpen(true);
  };

  const handleCloseModal = (setModalOpen) => {
    document.body.classList.remove('modal-open');
    setModalOpen(false);
  };

  const handleOpenUserModal = () => {
    handleOpenModal(setIsUserModalOpen);
    setIsCartModalOpen(false);
    setIsAuthModalOpen(false);
  };

  const handleCloseUserModal = () => {
    handleCloseModal(setIsUserModalOpen);
  };

  const handleOpenCartModal = () => {
    handleOpenModal(setIsCartModalOpen);
    setIsUserModalOpen(false);
    setIsAuthModalOpen(false);
  };

  const handleCloseCartModal = () => {
    handleCloseModal(setIsCartModalOpen);
  };

  const handleOpenAuthModal = () => {
    handleOpenModal(setIsAuthModalOpen);
    setIsUserModalOpen(false);
    setIsCartModalOpen(false);
  };

  const handleCloseAuthModal = () => {
    handleCloseModal(setIsAuthModalOpen);
  };

  const handleOpenRegistration = () => {
    setIsRegistrationOpen(true);
    setIsAuthModalOpen(false);
  };

  const handleCloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  return (
    <div className={cn(s.footer__container, { [s.dark]: theme === 'dark', [s.light]: theme !== 'dark' })}>
      <div className={s.footer__wrapper}>
        <div className={s.footer__logo}>
          <NavLink to="/">
            <img src={theme === 'dark' ? LogoDark : LogoLight} alt="ЗОЖНИК" />
          </NavLink>
        </div>
        <div className={s.footer__navBlock}>
          <div className={s.footer__navList__one}>
            <NavLink to="/" className={s.footer__navList__item}>
              Главная
            </NavLink>
            <NavLink to="/constructor" className={s.footer__navList__item}>
              Конструктор
            </NavLink>
            <NavLink to="/catalog" className={s.footer__navList__item}>
              Каталог
            </NavLink>
            <NavLink to="/book" className={s.footer__navList__item}>
              Книга
            </NavLink>
          </div>
          <div className={s.footer__navList__two}>
            <NavLink to="/news" className={s.footer__navList__item}>
              Статьи
            </NavLink>
            {isAuthorize ? (
              <>
                <a onClick={handleOpenUserModal} className={s.footer__navList__item} href="#">
                  Профиль
                </a>
                <a onClick={handleOpenCartModal} className={s.footer__navList__item} href="#">
                  Корзина
                </a>
              </>
            ) : (
              <a onClick={handleOpenAuthModal} className={s.footer__navList__item} href="#">
                Войти
              </a>
            )}
          </div>
          <div className={s.footer__navList__three}>
            <span className={s.footer__navList__item}>
              Связаться с нами :
            </span>
            <a className={s.footer__navList__item} href="tel:+79999999999">
              +7 999 999 99 99
            </a>
            <a className={s.footer__navList__item} href="mailto:zozhnik@gmail.com">
              zozhnik@gmail.com
            </a>
          </div>
          <div className={s.footer__navList__four}>
            <div className={s.footer__socialTitle}>Мы в сетях</div>
            <div className={s.footer__socialIcons}>
              <a
                href="https://www.instagram.com/zozhnik_ru?igsh=MWRoeXFhaDl0eGFlNA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Instagram} alt="иконка Instagram" />
              </a>

              <a href="https://www.youtube.com/@zozhnik_ru" target="_blank" rel="noopener noreferrer">
                <img src={YouTube} alt="иконка Youtube" />
              </a>

              <a href="https://t.me/zozhnik" target="_blank" rel="noopener noreferrer">
                <img src={Telegram} alt="иконка Telegram" />
              </a>
            </div>
          </div>
          <div className={s.footer__navList__five}>
            <span className={s.footer__navList__item}>Скачай с помощью</span>
            <img className={s.footer__qrImg} src={QR} alt="qr" />
          </div>
        </div>
        <div className={s.footer__rightsText}>
          Осуществляя вход на этот Сайт/в мобильное приложение ЗОЖНИК, вы
          подтверждаете, что ознакомлены с Пользовательским
          соглашением и Положением по обработке и защите персональных данных. С
          общими правилами участия в акциях и порядке получения подарков Вы
          можете ознакомиться здесь
        </div>
      </div>
      {isUserModalOpen && <UserPage onClose={handleCloseUserModal} />}
      {isCartModalOpen && <CartPage onClose={handleCloseCartModal} />}
      {isAuthModalOpen && <Authorization onClose={handleCloseAuthModal} />}
      {isRegistrationOpen && <Registration onClose={handleCloseRegistration} />}
    </div>
  );
};
