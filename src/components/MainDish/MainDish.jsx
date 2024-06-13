import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const MainDish = () => {
  return (
    <div className={s.container}>
      <p className={s.maindish__title}>Основное блюдо</p>
      <div className={s.maindish__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.maindish__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
