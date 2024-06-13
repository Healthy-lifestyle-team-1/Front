import React from 'react';
import s from './styles.module.scss';
import { ButtonWithTheme } from '../Button';

import removeIcon from '../../../assets/images/icons/remove.svg';

export const RowInCart = ({ id, dishImg, dishName, price, onRemove }) => {
  return (
    <div className={s.row__container}>
      <div className={s.row__img}>{dishImg}</div>

      <div className={s.row__info}>
        <div className={s.row__info__name}>{dishName}</div>

        <div className={s.row__info__price}>{price}</div>
      </div>

      <div className={s.row__actions}>
        <div className={s.row__actions__remove} onClick={() => onRemove(id)}>
          <img src={removeIcon} alt="Удалить" />
        </div>
        <div className={s.row__actions__count}>
          <ButtonWithTheme colorScheme={3} withCounter={true} size={3} />
        </div>
      </div>
    </div>
  );
};
