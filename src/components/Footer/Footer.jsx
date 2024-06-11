import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Logo } from '../ui/Logo';


export const Footer = () => {
  return (
    <div className={s.footer__container}>
		<div className={s.footer__container__b}><Logo /></div>
    </div>
  );
};
