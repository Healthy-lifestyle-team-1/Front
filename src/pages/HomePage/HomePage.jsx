import React from 'react';
// import { Main } from "../../components/Main/Main";
import { Header } from '../../components/Header/Header';
// import cardFood from "../../components/ui/Cards/CardFood/CardFood";
// import sliderStories from "../../components/ui/Sliders/SliderStories";
import { PlateConstructor } from '../../components/PlateConstructor/PlateConstructor';

import cn from 'classnames';
import s from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={s.container}>
      <Header />
      <PlateConstructor></PlateConstructor>
      {/* <Main /> */}
      {/* <div className={s.stories}>
        {sliderStories.map((story, index) => (
          <div key={index} className={s.story}>
            {story}
          </div>
        ))}
      </div> */}
      {/* <div className={s.cards}>
        {cardFood.map((card, index) => (
          <div key={index} className={s.card}>
            {card}
          </div>
        ))}
      </div> */}
    </div>
  );
};
