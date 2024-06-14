import React from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';
import plateImg from '../../../assets/images/halfofplates/left/card-catalog-img.png';

const plates = [
  {
    title: 'Индейка с киноа',
    extra: 'и салатом из сырых овощей',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Лосось со шпинатом',
    extra: 'и салатом по-гречески',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
  {
    title: 'Индейка с киноа',
    extra: 'и салатом из сырых овощей',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Лосось со шпинатом',
    extra: 'и салатом по-гречески',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
];

export const CombinedDishes = () => {
  return (
    <div className={s.container}>
      <p className={s.combineddishes__title}>Готовые тарелки</p>
      <div className={s.combineddishes__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.combineddishes__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
