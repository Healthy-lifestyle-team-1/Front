import React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import s from './styles.module.scss';
import { Logo } from '../ui/Logo';
import AppStore from '../../assets/images/icons/app-store.svg';
import GooglePlay from '../../assets/images/icons/google-play.svg';
import Instagram from '../../assets/images/icons/instagram.svg';
import YouTube from '../../assets/images/icons/youtube.svg';
import Telegram from '../../assets/images/icons/telegram.svg';
import QR from '../../assets/images/qr.png';

export const Footer = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);

  return (
    <div className={s.footer__container}>
      <div className={s.footer__wrapper}>
          <div className={s.footer__logo}>
            <Logo />
          </div>
			 <div className={s.footer__navBlock}>
			 <div className={s.footer__navList__one}>
            <a className={s.footer__navList__item} href="">
              Главная
            </a>
            <a className={s.footer__navList__item} href="">
              Конструктор
            </a>
            <a className={s.footer__navList__item} href="">
              Каталог
            </a>
            <a className={s.footer__navList__item} href="">
              Книга
            </a>
				
				</div>
				<div className={s.footer__navList__two}>
				<a className={s.footer__navList__item} href="">
              Статьи
            </a>
            {isAuthorize ? (
              <>
                <a className={s.footer__navList__item} href="">
                  Профиль
                </a>
                <a className={s.footer__navList__item} href="">
                  Корзина
                </a>
              </>
            ) : (
              <a className={s.footer__navList__item} href="">
                Войти
              </a>
            )}
				</div>
				<div className={s.footer__navList__three}>
				<a className={s.footer__navList__item} href="">
              Связаться с нами
            </a>
				<a className={s.footer__navList__item} href="">
				+7 999 999 99 99
            </a>
				<a className={s.footer__navList__item} href="">
				zozhnik@gmail.com
            </a>
					 </div>

         

            <div className={s.footer__navList__four}>
              <div className={s.footer__socialTitle}>Мы в сетях</div>
              <div className={s.footer__socialIcons}>
                <a
                  href="https://www.instagram.com/zozhnik_ru?igsh=MWRoeXFhaDl0eGFlNA=="
                  target="_blank"
                >
                  <img src={Instagram} alt="иконка Instagram" />
                </a>

                <a href="https://www.youtube.com/@zozhnik_ru" target="_blank">
                  <img src={YouTube} alt="иконка Youtube" />
                </a>

                <a href="https://t.me/zozhnik" target="_blank">
                  <img src={Telegram} alt="иконка Telegram" />
                </a>
              </div>
            </div>

          

          <div className={s.footer__navList__five}>
				<span>Скачай с помощью</span>
            <img className={s.footer__qrImg} src={QR} alt="qr" />
          </div>
			 </div>
			 

      <div className={s.footer__rightsText}>
        Осуществляя вход на этот Сайт/в мобильное приложение ЗОЖНИК, вы
        подтверждаете, что ознакомлены с Пользовательским
        соглашением и Положением по обработке и защите персональных данных. С
        общими правилами участия в акциях и порядке получения подарков Вы
        можете ознакомиться здесь
      </div>
		</div>
	 </div>
  );
};
