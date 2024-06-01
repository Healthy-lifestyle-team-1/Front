import React from "react";
// import { Main } from "../../components/Main/Main";
import { Header } from "../../components/Header/Header";
// import cardFood from "../../components/ui/Cards/CardFood/CardFood";
// import sliderStories from "../../components/ui/Sliders/SliderStories";

import cn from 'classnames';
import s from './styles.module.scss';
import { SliderHalfOfPlates } from "../../components/ui/Sliders/SliderHalfOfPlates/SliderHalfOfPlates";

export const HomePage = () => {

  return (
    <div className={s.container}>
      <Header />
      {/* <SliderHalfOfPlates /> */}
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
