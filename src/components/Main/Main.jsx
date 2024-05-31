import React from 'react';
import { SliderStories } from '../ui/Sliders/SliderStories';
import { FoodField } from '../FoodField';

import cn from 'classnames';
import s from './styles.module.scss';


export const Main = () => {

  return (
    <div className={s.container}>
      <SliderStories />
      <div className={s.blockInfo}>
        <FoodField />
        {/* <BookPage /> */}
      </div>
    </div>
  )
}