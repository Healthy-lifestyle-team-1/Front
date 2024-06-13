import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const Desserts = () => {
  return (
    <div className={s.container}>
      <p className={s.desserts__title}>Десерты</p>
      <div className={s.desserts__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.desserts__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
