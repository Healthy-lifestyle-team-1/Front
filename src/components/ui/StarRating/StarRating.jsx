import React, { useState } from 'react';

import starFilled from '../../../assets/images/fullstar.png';
import starOutline from '../../../assets/images/emptystar.png';
import s from './styles.module.scss';

export const StarRating = ({ count = 5 }) => {
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
            />
          </div>
        );
      })}
    </div>
  );
};
