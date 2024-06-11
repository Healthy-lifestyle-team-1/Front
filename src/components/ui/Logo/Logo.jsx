import React from 'react';
import s from './styles.module.scss';
import LogoImage from '../../../assets/images/Логотип.png';

export const Logo = () => {
  return (
    <div className={s.Logo__container}>
      <img src={LogoImage} alt="Logo" className={s.logoImage} />
    </div>
  );
};