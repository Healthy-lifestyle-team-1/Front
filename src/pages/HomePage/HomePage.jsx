import React from "react";
// import { Main } from "../../components/Main/Main";
import { Header } from "../../components/Header/Header";
import CardFood from "../../components/ui/Cards/CardFood/CardFood";
import SliderStories from "../../components/ui/SliderStories/SliderStories";

import cn from 'classnames';
import s from './styles.module.scss';

export const HomePage = () => {

  return (
    <div className={s.container}>
      <Header />
      {/* <Main /> */}
		<div className={s.stories}>
        {SliderStories.map((story, index) => (
          <div key={index} className={s.story}>
            {story}
          </div>
        ))}
      </div>
      <div className={s.cards}>
        {CardFood.map((card, index) => (
          <div key={index} className={s.card}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};
