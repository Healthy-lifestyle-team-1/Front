import React, { useState } from 'react';

import starFilled from '../../../assets/images/icons/filled-star.svg';
import starOutline from '../../../assets/images/icons/empty-star.svg';

import s from './styles.module.scss';

export const StarRating = ({ count = 5, size = '50px' }) => {
  const stars = Array(count).fill(0);

  const [currentItem, setCurrentItem] = useState();
  const [hoverItem, setHoverItem] = useState();

  return (
    <div className={s.stars}>
      {stars.map((item, index) => {
        const isFilled = index <= currentItem;
        const isHovered = index <= hoverItem;

        return (
          <div
            key={index}
            onClick={() => setCurrentItem(index)}
            onMouseMove={() => setHoverItem(index)}
            onMouseOut={() => setHoverItem()}
            className={s.starContainer}
          >
            <img
              src={isFilled || isHovered ? starFilled : starOutline}
              alt="star"
              className={s.star}
              style={{ width: size, height: size }}
            />
          </div>
        );
      })}
    </div>
  );
};
