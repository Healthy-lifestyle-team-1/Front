// src/pages/CatalogPage/index.js
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Catalog/Heading/Heading';
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
import s from './styles.module.scss';

export const CatalogPage = () => {
  const [filteredTags, setFilteredTags] = useState([]);

  const onSearch = () => {
    console.log('Searching');
  };

  return (
    <div className={s.catalogpage__container}>
      <Header />
      <Heading />
      <div className={s.catalogpage__nav}>
        <Input
          hasButton={true}
          width={'big'}
          colorScheme={1}
          onSearch={onSearch}
          placeholder={'Поиск'}
        />
        <NavCatalog setFilteredTags={setFilteredTags} />
      </div>
      <div id="Popular">
        <Popular filteredTags={filteredTags} />
      </div>
      <div id="CombinedDishes">
        <CombinedDishes filteredTags={filteredTags} />
      </div>
      <div id="CardNewsList">
        <CardNewsList />
      </div>
      <div id="MainDish">
        <MainDish filteredTags={filteredTags} />
      </div>
      <div id="SideDish">
        <SideDish filteredTags={filteredTags} />
      </div>
      <div id="ChooseBest">
        <ChooseBest />
      </div>
      <div id="Soup">
        <Soup filteredTags={filteredTags} />
      </div>
      <div id="Desserts">
        <Desserts filteredTags={filteredTags} />
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
};
