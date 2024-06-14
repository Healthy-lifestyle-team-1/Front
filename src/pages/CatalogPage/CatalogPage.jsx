import React from 'react';

import { Header } from '../../components/Header';
import { Input } from '../../components/ui/Input';
import { NavCatalog } from '../../components/NavCatalog';
import { Popular } from '../../components/Catalog/Popular';
import { CombinedDishes } from '../../components/Catalog/CombinedDishes';
import { MainDish } from '../../components/Catalog/MainDish';
import { SideDish } from '../../components/Catalog/SideDish';
import { ChooseBest } from '../../components/Catalog/ChooseBest';
import { Soup } from '../../components/Catalog/Soup';
import { CardNewsList } from '../../components/Catalog/NewsCatalog';
import { Desserts } from '../../components/Catalog/Desserts';
import { Advertisement } from '../../components/Advertisement';
import { Footer } from '../../components/Footer';

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
