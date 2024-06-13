import React, { useState } from 'react';
// import { Main } from "../../components/Main/Main";
import { Header } from '../../components/Header/Header';
import { PlateConstructor } from '../../components/PlateConstructor';
import { Advertisement } from '../../components/Advertisement';

import { Input } from '../../components/ui/Input/Input';
import DropDown from '../../components/ui/DropDown/DropDown';
import { PlateMethod } from '../../components/PlateMethod';
import { ArcSlider } from '../../components/ui/Sliders/ArcSlider';
import { Button } from '../../components/ui/Button/Button';
import { ButtonWithTheme } from '../../components/ui/Button';
import { Footer } from '../../components/Footer/Footer';
import { ContentSlider } from '../../components/ui/Sliders/ContentSlider';
import { DailyRation } from '../../components/DailyRation';

import cn from 'classnames';
import s from './styles.module.scss';
import { StarRating } from '../../components/ui/StarRating/StarRating';
import { SliderNews } from '../../components/ui/Sliders/SliderNews';

const options = ['Что-то', 'Еще что-то', 'Супер что-то'];

export const HomePage = () => {
  const handleSearch = query => {
    console.log('Searching for:', query);
  };

  return (
    <div className={s.container}>
      <Header />
      <ContentSlider />
      <SliderNews />
      <PlateConstructor />
      <PlateMethod />
		<DailyRation />
      <ArcSlider />
      <Advertisement />
      <Footer />
    </div>
  );
};
