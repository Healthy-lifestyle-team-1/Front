import React from 'react';
import { SliderStories } from '../ui/SliderStories';
import { FoodPage } from '../../pages/FoodPage/FoodPage';

import cn from 'classnames';
import s from './styles.module.scss';

export const Main = () => {

  return (
    <div className={s.container}>
      <SliderStories />
      <div className={s.blockInfo}>
        {/* <FoodPage /> */}
        {/* <BookPage /> */}
      </div>
    </div>
  )
}