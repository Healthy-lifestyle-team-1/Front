import React from 'react';

import { FoodNew } from '../../components/FoodNew/FoodNew';
import { TopOrders } from '../../components/TopOrders/TopOrders'
import { BookSlider } from '../../components/ui/BookSlider/BookSlider';

import cn from 'classnames';
import s from './styles.module.scss';

export const FoodPage = () => {

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