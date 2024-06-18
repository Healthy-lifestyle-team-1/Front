import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

import { Header } from '../../components/Header';
import { PlateConstructor } from '../../components/PlateConstructor';
import { Footer } from '../../components/Footer';
import { Advertisement } from '../../components/Advertisement';

export const ConstructorPage = () => {
  const onSearch = () => {
    console.log('Searching');
  };

  const [isScrollingUp, setIsScrollingUp] = useState(false);
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
      <div className={isScrollingUp ? s.showHeader : s.hideHeader}>
        <Header />
      </div>
      <div className={s.constructor__inner}>
        <PlateConstructor />
        <Advertisement />
      </div>
      <Footer />
    </div>
  );
};
