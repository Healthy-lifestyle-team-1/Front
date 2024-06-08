import React, { useState } from 'react';
import s from './styles.module.scss';
import { FaRegStar, FaStar } from 'react-icons/fa';

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
            {isFilled || isHovered ? (
              <FaStar className={`${s.star} ${s.starFilled}`} />
            ) : (
              <FaRegStar className={`${s.star} ${s.starOutline}`} />
            )}
          </div>
        );
      })}
    </div>
  );
};
