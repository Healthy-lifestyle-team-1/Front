import React from "react";

import { Main } from "../../components/Main/Main";
import cardFood from "../../components/ui/Cards/CardFood/CardFood";

import cn from 'classnames';
import s from './styles.module.scss';

export const HomePage = () => {

  return (
    <div className={s.container}>
      {/* <Header /> */}
      {/* <Main /> */}
      <div className={s.cards}>
        {cardFood.map((card, index) => (
          <div key={index} className={s.card}>
            {card}
          </div>  
        ))}
      </div>
    </div>
  )
}