import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import { PlateConstructor } from '../../components/PlateConstructor';
import { Advertisement } from '../../components/Advertisement';

import { ContentSlider } from '../../components/ui/Sliders/ContentSlider';
import { PlateMethod } from '../../components/PlateMethod';
import { ArcSlider } from '../../components/ui/Sliders/ArcSlider';
import { Footer } from '../../components/Footer/Footer';
import { SliderNews } from '../../components/ui/Sliders/SliderNews';
import { DailyRation } from '../../components/DailyRation';
import { HeroSection } from '../../components/HeroSection';

import s from './styles.module.scss';

export const HomePage = () => {
  return (
    <div className={s.container}>
      <HeroSection />
      <ContentSlider />
      <SliderNews />
      <PlateConstructor />
      <PlateMethod />
      <ArcSlider />
      <DailyRation />
      <Advertisement />
      <Footer />
    </div>
  );
};
