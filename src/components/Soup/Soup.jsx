import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const Soup = () => {
  return (
    <div className={s.container}>
      <p className={s.soup__title}>Супы</p>
      <div className={s.soup__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.soup__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
