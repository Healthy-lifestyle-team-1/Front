import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
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
import { Desserts } from '../../components/Catalog/Desserts';
import { CardNewsList } from '../../components/Catalog/NewsCatalog';
import { Advertisement } from '../../components/Advertisement';
import { Footer } from '../../components/Footer';
import s from './styles.module.scss';

export const CatalogPage = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const [category, setCategory] = useState(null);
  const theme = useSelector(state => state.theme);

  const onSearch = () => {
    console.log('Searching');
  };

  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      setIsScrollingUp(false);
    } else if (currentScrollTop < lastScrollTop) {
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
    <div className={`${s.catalogpage__container} ${theme === 'dark' ? s.dark : s.light}`}>
      <div className={s.catalogpage__main}>
        <Heading />
        <div className={s.catalogpage__nav}>
          <Input
            hasButton={true}
            width={'big'}
            colorScheme={1}
            onSearch={onSearch}
            placeholder={'Поиск'}
          />
          <NavCatalog
            setFilteredTags={setFilteredTags}
            setCategory={setCategory}
          />
        </div>
        <div id="Popular">
          <Popular filteredTags={filteredTags} category={category} />
        </div>
        {category !== 7 && (
          <>
            <div id="CombinedDishes">
              <CombinedDishes filteredTags={filteredTags} category={category} />
            </div>
            <div id="CardNewsList">
              <CardNewsList />
            </div>
            <div id="MainDish">
              <MainDish filteredTags={filteredTags} category={category} />
            </div>
            
            <div id="SideDish">
              <SideDish filteredTags={filteredTags} category={category} />
            </div>
            <div id="ChooseBest">
              <ChooseBest />
            </div>
            <div id="Soup">
              <Soup filteredTags={filteredTags} category={category} />
            </div>
            <div id="Desserts">
              <Desserts filteredTags={filteredTags} category={category} />
            </div>
          </>
        )}
        <div id="Advertisement">
          <Advertisement />
        </div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
