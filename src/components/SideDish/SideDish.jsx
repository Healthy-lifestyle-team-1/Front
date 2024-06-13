import React from 'react';
import s from './styles.module.scss';
import { CardFoodCatalog } from '../ui/Cards/CardCatalog/CardCatalog';

export const SideDish = () => {
  return (
    <div className={s.container}>
      <p className={s.sidedish__title}>Гарниры</p>
      <div className={s.sidedish__items}>
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
        <CardFoodCatalog />
      </div>
      <a className={s.sidedish__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
