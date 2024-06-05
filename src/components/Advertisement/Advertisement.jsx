import React from 'react';
import s from './styles.module.scss';
import pizza from '../../../public/pizza-with-bacon.png';
import AppStore from '../../assets/images/icons/app-store.svg';
import GooglePlay from '../../assets/images/icons/google-play.svg';

export const Advertisement = () => {
  return (
    <div className={s.container}>
      <div className={s.ad__img}>
        <img src={pizza} alt="телефон" />
      </div>
      <div className={s.ad__content}>
        <div className={s.ad__title}>
          <span className={s.ad__titleUp}>скачай мобильное</span>
          <span className={s.ad__titleDown}>приложение</span>
        </div>
        <p className={s.ad__text}>
          Заказывай еду через наше мобильное приложение в несколько кликов!
        </p>
        
        <div className={s.ad__download}>
          <span className={s.ad__downloadText}>Скачай с помощью</span>
          <div className={s.ad__downloadOptions}>
          <a
            className={s.downloadOption}
            href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
            target="_blank"
          >
            <img src={AppStore} alt="иконка App Store" />
          </a>
          <a
            className={s.downloadOption}
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
