import React, { useState, useEffect, useRef } from 'react';
import s from './style.module.scss';
import star from '../../../assets/images/icons/filled-star.svg';
import { Comments } from '../Comments';
import { NewReview } from '../NewReview/NewReview';

export const ReviewContainer = () => {
  const [isNewReviewOpen, setIsNewReviewOpen] = useState(false);

  const handleOpenReview = () => {
    setIsNewReviewOpen(true);
  };

  return (
    <div className={s.rcontainer}>
      <div className={s.rcontainer__rating}>
        <div className={s.rcontainer__ratingStar}>
          <div className={s.rcontainer__ratingStarIcon}>
            <img src={star} alt="звезда" />
          </div>
          <div className={s.rcontainer__ratingStarNumber}>4,9</div>
        </div>
        <div className={s.rcontainer__ratingReview}>
          <span className={s.rcontainer__ratingReviewHeading}>
            Оставить отзыв
          </span>
          <button
            className={s.rcontainer__ratingReviewButton}
            onClick={handleOpenReview}
          ></button>
        </div>
      </div>
      <div className={s.rcontainer__comments}>
        <Comments />
        <Comments />
        <Comments />
      </div>
      {isNewReviewOpen && <NewReview />}
    </div>
  );
};
