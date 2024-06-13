import React from 'react';

import { Header } from '../../components/Header/Header';
import { Input } from '../../components/ui/Input/Input';
import { NavCatalog } from '../../components/NavCatalog/NavCatalog';
import { Popular } from '../../components/Popular/Popular';
import { CombinedDishes } from '../../components/CombinedDishes/CombinedDishes';
import { MainDish } from '../../components/MainDish/MainDish';
import { SideDish } from '../../components/SideDish/SideDish';
import { Soup } from '../../components/Soup/Soup';
import { CardNewsList } from '../../components/NewsCatalog/NewsCatalog';
import { Desserts } from '../../components/Desserts/Desserts';
import { Advertisement } from '../../components/Advertisement';
import { Footer } from '../../components/Footer/Footer';


import cn from 'classnames';
import s from './styles.module.scss';

export const CatalogPage = () => {
  return (
    <div className={s.container}>
      <Header />
      <Input width="500px" color="transparent" placeholder="Поиск" />
      <NavCatalog />
      <Popular />
      <CombinedDishes />
      <CardNewsList />
      <MainDish />
      <SideDish />
      <Soup />
      <Desserts />
      <Advertisement />
      <Footer />
    </div>
  );
};
