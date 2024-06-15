import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { PlateMethodBookPage } from '../../components/PlateMethodBookPage';
import { BookSection } from '../../components/BookSection';

export const BookPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={s.container}>
      <Header />
      <PlateMethodBookPage />
      <BookSection />
      <Advertisement />
      <Footer />
    </div>
  );
};
