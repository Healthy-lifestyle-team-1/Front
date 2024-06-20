import React from 'react';
import s from './styles.module.scss';

import vegetables from '../../assets/images/Advertisement/veggies.png';
import phone from '../../assets/images/Advertisement/phone.svg';
import pepper from '../../assets/images/Advertisement/pepper.png';
import AppStore from '../../assets/images/icons/app-store.svg';
import GooglePlay from '../../assets/images/icons/google-play.svg';
import video from '../../assets/images/Advertisement/mobile.gif';

export const Advertisement = () => {
  return (
    <div className={s.container}>
      <div className={s.ad__ideology}>
        <div className={s.ad__ideologyTitle}>
          <span className={s.ad__ideologyTitleChangeable}>ИДЕОЛОГИЯ</span>
          <span className={s.ad__ideologyTitlePink}>ЗДОРОВОГО ПИТАНИЯ</span>
          <span className={s.ad__ideologyTitleChangeable}>ПО НАУКЕ</span>
        </div>
        <img
          className={s.ad__ideologyVeggies}
          src={vegetables}
          alt="изображение овощей"
        />
      </div>
      <div className={s.ad__phoneImg}>
        <img
          src={phone}
          alt="изображение телефона"
          style={{
            position: 'absolute',
            zIndex: 10,
          }}
        />
        <img
          src={video}
          alt="мобильное приложение"
          style={{
            zIndex: -1,
            transform: 'scale(93%)',
          }}
        />
      </div>
      <div className={s.ad__info}>
        <img className={s.ad__infoImg} src={pepper} alt="изображение перца" />
        <div className={s.ad__infoBlock}>
          <p className={s.ad__infoBlockDescription}>
            Заказывай еду <br />
            через наше <br />
            мобильное приложение
          </p>
          <div className={s.ad__infoBlockDownload}>
            <a
              className={s.ad__infoDownloadOption}
              href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
              target="_blank"
            >
              <img src={AppStore} alt="иконка App Store" />
            </a>
            <a
              className={s.ad__infoDownloadOption}
              href="https://play.google.com"
              target="_blank"
            >
              <img src={GooglePlay} alt="иконка Google Play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
