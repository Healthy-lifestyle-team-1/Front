import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.scss';

import plateImg from '../../../assets/images/plates/plate-quarter.png';

import vegan from '../../../assets/images/icons/light/вег.svg';
import veganDark from '../../../assets/images/icons/dark/вег.svg';

import glutenFree from '../../../assets/images/icons/light/глютенX.svg';
import glutenFreeDark from '../../../assets/images/icons/dark/глютенX.svg';

import lactoseFree from '../../../assets/images/icons/light/лактозаX.svg';
import lactoseFreeDark from '../../../assets/images/icons/light/лактозаX.svg';

export const NewReview = ({ image, title, description, weight, calories }) => {
  // const theme = useSelector(state => state.theme);

  return (
    <div className={s.container}>
      <div className={s.nreview__info}>
        <div className={s.nreview__infoImg}>
          <img src={image} alt="фото блюда" />
        </div>
        <div className={s.nreview__infoLabels}>
          {/* <img
            src={theme === 'dark' ? veganDark : vegan}
            alt="Растительные продукты"
          ></img>
          <img
            src={theme === 'dark' ? glutenFreeDark : glutenFree}
            alt="Без глютена"
          ></img>
          <img
            src={theme === 'dark' ? lactoseFreeDark : lactoseFree}
            alt="Без глютена"
          ></img> */}
        </div>
        <div className={s.nreview__infoTitle}>{title}</div>
        <div className={s.nreview__infoDescription}>{description}</div>
        <div className={s.nreview__infoContains}>
          <div className={s.nreview__infoContainsWeight}>{weight}</div>
          <div className={s.nreview__infoContainsCalories}>{calories}</div>
        </div>
      </div>
      <div className={s.nreview__rating}></div>
    </div>
  );
};

const plate = [
  {
    image: plateImg,
    title: 'Тушеная говядина с рисом',
    description: 'с добавлением куркумы, кунжута и восточных ароматных специй',
    weight: '260 г',
    calories: '440 ккал',
  },
];

const UserNewReview = () => {
  return (
    <div>
      {plates.map((plate, index) => (
        <NewReview
          key={index}
          image={plate.image}
          title={plate.title}
          description={plate.description}
          weight={plate.weight}
          calories={plate.calories}
        />
      ))}
    </div>
  );
};

export default UserNewReview;