import React from 'react';

import cn from 'classnames';
import s from './styles.module.scss';

export const TopOrders = () => {

  return (
    <div className={s.container}>
      <div className={s.foodMenu__title}>Часто заказывают</div>
      <div className={s.foodMenu__block}>
        {/* <Card /> */}
      </div>
    </div>
  )
}