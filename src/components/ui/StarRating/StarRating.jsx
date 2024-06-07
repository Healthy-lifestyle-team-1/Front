import React from 'react';
import { useState } from 'react';
import s from './styles.module.scss';
import starImg from '../../../assets/images/icons/star.svg'


export const StarRating = () => {
    const stars = Array(5).fill(0)

    return (
      <div className={s.container}>
        <div className={s.stars}>
            {
                stars.map((item, index) => {
                    return (
                        <div key={index}>
                            <img src={starImg} alt="звезда" />
                        </div>
                    )
                })
            }
        </div>
      </div>
    );
  };
  