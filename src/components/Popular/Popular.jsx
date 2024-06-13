import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const Popular = () => {
  return (
    <div className={s.container}>
      <p className={s.popular__title}>Популярное</p>
      <div className={s.popular__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.popular__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
