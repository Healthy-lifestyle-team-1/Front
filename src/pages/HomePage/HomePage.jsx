import React from 'react';
// import { Main } from "../../components/Main/Main";
import { Header } from '../../components/Header/Header';
import { PlateConstructor } from '../../components/PlateConstructor';
// import cardFood from "../../components/ui/Cards/CardFood/CardFood";
// import sliderStories from "../../components/ui/Sliders/SliderStories";
// import { PlateConstructor } from '../../components/PlateConstructor/PlateConstructor';

import cn from 'classnames';
import s from './styles.module.scss';
import { SliderPlates } from '../../components/ui/Sliders/SliderPlates';
import { Input } from '../../components/ui/Input/Input';
import DropDown from '../../components/ui/DropDown/DropDown';

const options = ['Что-то', 'Еще что-то', 'Супер что-то'];
import { ArcSlider } from '../../components/ui/Sliders/ArcSlider';

export const HomePage = () => {
  const handleSearch = query => {
    console.log('Searching for:', query);
  };

  return (
    <div className={s.container}>
      <Header />
      <PlateConstructor />
      <Input width="500px" colorScheme={1} />
      <ArcSlider />
      {/* <PlateConstructor></PlateConstructor> */}
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
