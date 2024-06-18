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

import s from './styles.module.scss';

export const HomePage = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // Скроллим вниз
      setIsScrollingUp(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Скроллим вверх
      setIsScrollingUp(true);
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <div className={s.container}>
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
