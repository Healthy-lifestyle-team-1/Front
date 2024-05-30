import React from "react";

import img1 from '../../../../assets/images/plates1.jpg';

import cn from 'classnames';
import s from './styles.module.scss';

export const CardFood = ({img, title, description, price}) => {

  return (
    <div className={s.container}>
      <div className={s.cardFood__img}>
        <img className={s.cardFood__img__img} src={img1} alt={'фото тарелки'}/>
      </div>
      <div className={s.cardFood__text}>
        <div className={s.cardFood__text__title}>{(title)}</div>
        <div className={s.cardFood__text__description}>{(description)}</div>
      </div>
      <div className={s.cardFood__order}>
        <div className={s.cardFood__order__price}></div>
        <button>Выбрать</button>
      </div>
    </div>
  )
}

const titles = [
  {img: img1, title: 'Томлёная говядина', description: 'в томатном соусе  с молодым картофелем в укропе ', price: '100₽'},
  {img: img1, title: 'Томлёная говядина', description: 'в томатном соусе  с молодым картофелем в укропе ', price: '100₽'},
  {img: img1, title: 'Томлёная говядина', description: 'в томатном соусе  с молодым картофелем в укропе ', price: '100₽'}
];

const cardFood = titles.map((item, index) => (
  <CardFood key={index} {...item} />
));

export default cardFood;