import React, { useState, useEffect, useRef } from 'react';
import s from './style.module.scss';
import {StarRating} from '../StarRating'
import avatar from '../../../assets/images/icons/avatar.svg'

export const Comments = () => {
  return (
    <div className={s.container}>
      <div className={s.comments__avatar}>
        <img src={avatar} alt="" />
      </div>
      <div className={s.comments__reviewer}>
        <div className={s.comments__reviewerName}>Вася Пупкин</div>
        <div className={s.comments__reviewerStars}><StarRating size='11px'/></div>
        <div className={s.comments__reviewerText}>Вкусно!</div>
      </div>
      <div className={s.comments__date}>Сегодня, 12:30</div>
    </div>
  );
};
