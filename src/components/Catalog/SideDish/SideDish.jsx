import React from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';

import plateImg from '../../../assets/images/halfofplates/left/card-catalog-img.png';

const plates = [
  {
    title: 'Рис',
    extra: 'с овощами и восточными пряностями',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
  {
    title: 'Бейби картофель',
    extra: 'отварной с укропом',
    weight: '500 г',
    calories: '600 ккал',
    img: plateImg,
  },
  // Добавьте другие элементы здесь, если необходимо
];

export const SideDish = () => {
  return (
    <div className={s.container}>
      <p className={s.sidedish__title}>Гарниры</p>
      <div className={s.sidedish__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.sidedish__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
