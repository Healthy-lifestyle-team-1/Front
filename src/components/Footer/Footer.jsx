import React from 'react';
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
  return (
    <div className={s.footer__container}>
		 <div className={s.footer__wrapper}>
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
		<div className={s.footer__socialAndAppAndQrWrapper}>
	
      <div className={s.footer__socialAndAppBlock}>
        <div className={s.footer__socialBlock}>
          <div className={s.footer__socialTitle}>Мы в сетях</div>
          <div className={s.footer__socialIcons}>
			 <img src={Instagram} alt="Instagram" />
			 <img src={YouTube} alt="YouTube" />
			 <img src={Telegram} alt="Telegram" />
			 </div>
        </div>

        <div className={s.footer__appBlock}>
          <div className={s.footer__appTitle}>Мы в сетях</div>
          <div className={s.footer__appIcons}>
			 <a
            className={s.downloadOption}
            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
            target="_blank"
          >
            <img src={AppStore} alt="иконка App Store" />
          </a>


				<a
            href="https://play.google.com"
            target="_blank"
          >
            <img src={GooglePlay} alt="иконка Google Play" />
          </a>
			 </div>
        </div>
      </div>
		
		
      <div className={s.footer__QR}><img src={QR} alt="qr" /></div>
		</div>
		</div>

		<div className={s.footer__rightsText}>Осуществляя вход на этот Сайт/в мобильное приложение ЗОЖНИК, вы подтверждаете, что ознакомлены с Пользовательским соглашением и Положением по обработке и защите персональных данных. С общими правилами участия в акциях и порядке получения подарков Вы можете ознакомиться здесь</div>
		
	 </div>
  );
};
