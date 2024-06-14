import React from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';

import plateImg from '../../../assets/images/halfofplates/left/card-catalog-img.png';

const plates = [
  {
    title: 'Медовик веган',
    extra: 'с клубникой',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Конфеты',
    extra: 'из сухофруктов и орехов',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
  // Добавьте другие элементы здесь, если необходимо
];

export const Desserts = () => {
  return (
    <div className={s.container}>
      <p className={s.desserts__title}>Десерты</p>
      <div className={s.desserts__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.desserts__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
