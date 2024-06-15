import React from 'react';
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

  return (
    <div className={s.container}>
      <Header />
      <div className={s.constructor__inner}>
        <PlateConstructor />
        <Advertisement />
      </div>
      <Footer />
    </div>
  );
};
