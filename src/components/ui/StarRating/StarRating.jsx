import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTag } from '../../../core/store/tagsSlice';
import axios from 'axios';
import starFilled from '../../../assets/images/icons/filled-star.svg';
import starOutline from '../../../assets/images/icons/empty-star.svg';

import s from './styles.module.scss';

export const StarRating = ({ count = 5, size = '50px' }) => {
  const dispatch = useDispatch();
  const activeTags = useSelector(state => state.tags);

  const stars = Array(count).fill(0);
  const [hoverItem, setHoverItem] = useState();

  const handleClick = async index => {
    dispatch(toggleTag(index));
    try {
      const response = await axios.post('ссылка', {
        rating: index + 1
      });
      console.log('Рейтинг отправлен:', response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={s.stars}>
      {stars.map((item, index) => {
        const isFilled = activeTags.includes(index);
        const isHovered = index <= hoverItem;

        return (
          <div
            key={index}
            onClick={() => handleClick(index)}
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
