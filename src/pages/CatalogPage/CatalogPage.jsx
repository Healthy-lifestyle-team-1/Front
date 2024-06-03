import React from 'react';

import { HeaderCatalog } from '../../components/HeaderCatalog/HeaderCatalog';
import { Breakfast } from '../../components/Breakfast/Breakfast';
import { Lunch } from '../../components/Lunch/Lunch';
import { CardNewsList } from '../../components/News/News';  // именованный экспорт
import { Dinner } from '../../components/Dinner/Dinner';
import { Desserts } from '../../components/Desserts/Desserts';
import { Advertisement } from '../../components/Advertisement';
import { Footer } from '../../components/Footer/Footer';

import cn from 'classnames';
import s from './styles.module.scss';

export const CatalogPage = () => {
  return (
    <div className={s.container}>
      <HeaderCatalog />
      <Breakfast />
      <Lunch />
      <CardNewsList />
      <Dinner />
      <Advertisement />
      <Desserts />
      <Footer />
    </div>
  );
};
