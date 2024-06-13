import React from 'react';

import { Header } from '../../components/Header/Header';
import { Input } from '../../components/ui/Input/Input';
import { NavCatalog } from '../../components/NavCatalog/NavCatalog';
import { Popular } from '../../components/Popular/Popular';
import { CombinedDishes } from '../../components/CombinedDishes/CombinedDishes';
import { MainDish } from '../../components/MainDish/MainDish';
import { SideDish } from '../../components/SideDish/SideDish';
import { ChooseBest } from '../../components/ChooseBest/ChooseBest';
import { Soup } from '../../components/Soup/Soup';
import { CardNewsList } from '../../components/NewsCatalog/NewsCatalog';
import { Desserts } from '../../components/Desserts/Desserts';
import { Advertisement } from '../../components/Advertisement';
import { Footer } from '../../components/Footer/Footer';

import cn from 'classnames';
import s from './styles.module.scss';

export const CatalogPage = () => {
  const onSearch = () => {
    console.log('Searching');
  };
  return (
    <div className={s.container}>
      <Header />
      <Input width={'big'} colorScheme={1} onSearch={onSearch} />
      <NavCatalog />
      <Popular />
      <CombinedDishes />
      <CardNewsList />
      <MainDish />
      <SideDish />
      <ChooseBest />
      <Soup />
      <Desserts />
      <Advertisement />
      <Footer />
    </div>
  );
};
