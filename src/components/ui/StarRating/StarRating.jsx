import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import starFilled from '../../../assets/images/icons/filled-star.svg';
import starOutline from '../../../assets/images/icons/empty-star.svg';
import s from './styles.module.scss';
import { setStarRating } from '../../../core/store/starsSlice';

export const StarRating = ({ count = 5, size = '50px', productId, userId }) => {
  const dispatch = useDispatch();
  const activeTags = useSelector(state => state.stars);

  const stars = Array(count).fill(0);
  const [hoverItem, setHoverItem] = useState();

  const handleClick = async index => {
    dispatch(setStarRating(index));
    try {
      const response = await axios.post(
        'https://grikoandrey.pythonanywhere.com/rating/',
        {
          product: productId,
          user: userId,
          value: index + 1,
        },
      );
      console.log('Рейтинг отправлен:', response.data);
    } catch (error) {
      if (error.response) {
        console.error('Ошибка при отправке рейтинга:', error.response.data);
      } else {
        console.error('Ошибка при отправке рейтинга:', error.message);
      }
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

StarRating.propTypes = {
  count: PropTypes.number,
  size: PropTypes.string,
  productId: PropTypes.number.isRequired,
  userId: PropTypes.number.isRequired,
};
