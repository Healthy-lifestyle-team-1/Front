import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Input } from '../../components/ui/Input';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { CardNewsMain } from '../../components/ui/Cards/CardNewsMain';

export const NewsPage = () => {
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
      <CardNewsMain className={s.block} />
      <Advertisement />
      <Footer />
    </div>
  );
};
