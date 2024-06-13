import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonWithTheme } from '../../Button';
import cn from 'classnames';
import s from './styles.module.scss';

import line from '../../../../assets/images/dotted-line-card-catalog.svg';
import plateImg from '../../../../assets/images/halfofplates/left/card-catalog-img.png';

import vegan from '../../../../assets/images/icons/light/вег.svg';
import veganDark from '../../../../assets/images/icons/dark/вег.svg';

import glutenFree from '../../../../assets/images/icons/light/глютенX.svg';
import glutenFreeDark from '../../../../assets/images/icons/dark/глютенX.svg';

export const CardCatalog = ({ title, extra, weight, calories, img }) => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={s.container}>
      <div className={s.cardfood__info}>
        <div className={s.cardfood__labels}>
          <img
            src={theme === 'dark' ? veganDark : vegan}
            alt="Растительные продукты"
          ></img>
          <img
            src={theme === 'dark' ? glutenFreeDark : glutenFree}
            alt="Без глютена"
          ></img>
        </div>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <ButtonWithTheme colorScheme={1} title={'100 ₽'} size={3} />
      </div>
      <div className={s.cardfood__line}>
        <img src={line} alt="линия"></img>
      </div>
      <div className={s.cardfood__Img}>
        <img
          className={s.cardfood__plateImg}
          src={img}
          alt="фото тарелки"
        ></img>
      </div>
    </div>
  );
};

const plates = [
  {
    title: 'Томленая говядина и салат',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '560 г',
    calories: '675 ккал',
    img: plateImg,
  },
];

export const CardFoodCatalog = () => {
  return (
    <div>
      {plates.map((item, index) => (
        <CardCatalog key={index} {...item} />
      ))}
    </div>
  );
};
