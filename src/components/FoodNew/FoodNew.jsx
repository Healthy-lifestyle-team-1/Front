import React from 'react';

import cn from 'classnames';
import s from './styles.module.scss';

export const FoodNew = () => {

  return (
    <div className={s.container}>
      <div className={s.foodMenu__title}>Что нового?</div>
      <div className={s.foodMenu__block}>
        {/* <Card /> */}
      </div>
    </div>
  )
}