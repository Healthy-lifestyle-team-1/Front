import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { PlateMethodBookPage } from '../../components/PlateMethodBookPage';
import { BookSection } from '../../components/BookSection';

import {OnBoarding} from '../../components/Auth/OnBoarding'

export const BookPage = () => {
  return (
    <div className={s.container}>
      <PlateMethodBookPage />
      <OnBoarding/>
      <BookSection />
      <Advertisement />
      <Footer />
    </div>
  );
};
