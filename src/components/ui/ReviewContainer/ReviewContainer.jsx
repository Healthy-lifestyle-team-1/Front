import React, { useState, useEffect, useRef } from 'react';
import s from './style.module.scss';
import star from '../../../assets/images/icons/filled-star.svg';

export const ReviewContainer = () => {
  return (
    <div className={s.container}>
      <div className={s.rcontainer__rating}>
        <div className={s.rcontainer__ratingStar}>
          <div className={s.rcontainer__ratingStarIcon}>
            <img src={star} alt="звезда" />
          </div>
          <div className={s.rcontainer__ratingStarNumber}>4.9</div>
        </div>
        <div className={s.rcontainer__ratingReview}>
          <span className={s.rcontainer__ratingReviewHeading}>Оставить отзыв</span>
          <button className={s.rcontainer__ratingReviewButton}>+</button>
        </div>
      </div>
      <div className={s.rcontainer__comments}>
      </div>
    </div>
  );
};
