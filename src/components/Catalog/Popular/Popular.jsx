import React from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog';

import plateImg from '../../../assets/images/halfofplates/left/card-catalog-img.png';

const plates = [
  {
    title: 'Томленая говядина и салат',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Курица с рисом',
    extra: 'в сливочном соусе',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
  {
    title: 'Томленая говядина и салат',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Курица с рисом',
    extra: 'в сливочном соусе',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
];

export const Popular = () => {
  return (
    <div className={s.container}>
      <p className={s.popular__title}>Популярное</p>
      <div className={s.popular__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.popular__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
