import React from 'react';
import { useState } from 'react';
import s from './styles.module.scss';
import { FaRegStar } from 'react-icons/fa6';

export const StarRating = ({ count = 5 }) => {
  const stars = Array(count).fill(0);

  const [currentItem, setCurrentItem] = useState();
  const [hoverItem, setHoverItem] = useState();

  return (
    <div className={s.stars}>
      {stars.map((item, index) => {
        const currentStyle = index <= currentItem ? { color: '#E2DD01' } : {};
        const hoverStyle = index <= hoverItem ? { color: '#E2DD01' } : {};

        return (
          <div
            key={index}
            onClick={() => setCurrentItem(index)}
            style={{ ...currentStyle, ...hoverStyle }}
            onMouseMove={() => setHoverItem(index)}
            onMouseOut={() => setHoverItem()}
          >
            <FaRegStar className={s.star}/>
          </div>
        );
      })}
    </div>
  );
};
