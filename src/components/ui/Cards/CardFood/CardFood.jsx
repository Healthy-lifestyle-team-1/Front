import React from 'react';
import { useState } from 'react';
import plateImg from '../../../../assets/images/plates/card-food-img.png';
import line from '../../../../assets/images/dotted-line-card-food.svg';
import cn from 'classnames';
import s from './styles.module.scss';
import emptyLike from '../../../../assets/images/icons/light/emptyLike.svg'

export const CardFood = ({
  title,
  extra,
  weight,
  calories,
  description,
  img,
}) => {
  return (
    <div className={s.container}>
      <div className={s.cardfood__info}>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <div className={s.cardfood__details}>
          <div className={s.cardfood__detailsText}>
            <div className={s.cardfood__detailsTitle}>Описание</div>
            <div className={s.cardfood__detailsDescription}>{description}</div>
          </div>
          <div className={s.cardfood__detailsLine}>
            <img src={line} alt="линия"></img>
            </div>
          <div className={s.cardfood__detailsButton}>
          </div>
        </div>
      </div>
      <div className={s.cardfood__likeAndImg}>
        <img src={emptyLike} alt="" />
        <img src={img} alt="фото тарелки"></img>
      </div>
      <div className={s.cardfood__buttons}>

      </div>
    </div>
  );
};

const plates = [
  {
    title: 'Томленая говядина',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '550 г',
    calories: '675 ккал',
    description:
      'Салат из свежих овощей, с добавлением микро-зелени, приправлен ореховым соусом отличный гарнир на ужин',
    img: plateImg,
  },
  {
    title: 'Томленая говядина',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '550 г',
    calories: '675 ккал',
    description:
      'Салат из свежих овощей, с добавлением микро-зелени, приправлен ореховым соусом отличный гарнир на ужин',
    img: plateImg,
  },
];

const cardFood = plates.map((item, index) => (
  <CardFood key={index} {...item} />
));

export default cardFood;
