import React from 'react';

import { FoodNew } from '../FoodNew/FoodNew';
import { TopOrders } from '../TopOrders/TopOrders'
import { BookSlider } from '../ui/BookSlider/BookSlider';

import cn from 'classnames';
import s from './styles.module.scss';

export const FoodField = () => {

  return (
    <div className={s.container}>
      {/* <FoodNav /> */}
      <div className={s.foodOrders}>
        <FoodNew />
        <TopOrders />
      </div>
    </div>
  )
}