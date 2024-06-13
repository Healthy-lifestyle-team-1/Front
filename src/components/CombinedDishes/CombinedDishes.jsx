import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const CombinedDishes = () => {
  return (
    <div className={s.container}>
      <p className={s.combineddishes__title}>Готовые тарелки</p>
      <div className={s.combineddishes__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.combineddishes__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
