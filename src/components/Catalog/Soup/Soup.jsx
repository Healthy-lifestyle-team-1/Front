import React from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';

import plateImg from '../../../assets/images/halfofplates/left/card-catalog-img.png';

const plates = [
  {
    title: 'Борщ',
    extra: 'сибирский на говяжьем бульоне',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Уха',
    extra: 'из трех видов рыб',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
  {
    title: 'Борщ',
    extra: 'сибирский на говяжьем бульоне',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Уха',
    extra: 'из трех видов рыб',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
];

export const Soup = () => {
  return (
    <div className={s.container}>
      <p className={s.soup__title}>Супы</p>
      <div className={s.soup__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.soup__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
