import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
import { Search } from '../../components/Catalog/Search';
import s from './styles.module.scss';

const BASE_URL = 'https://grikoandrey.pythonanywhere.com';

export const CatalogPage = () => {
  const [filteredTags, setFilteredTags] = useState([]);
  const [category, setCategory] = useState(null);
  const [searchResults, setSearchResults] = useState({});
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchExecuted, setSearchExecuted] = useState(false);
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/tag/`);
        setTags(response.data);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/category/`);
        setCategories(response.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchTags();
    fetchCategories();
  }, []);

  const onSearch = async () => {
    setSearchExecuted(true);
    try {
      console.log('Searching for:', searchTerm);
      const response = await axios.get(
        `${BASE_URL}/product/?id=&title=${searchTerm}&image=&calories__lt=&calories__gt=&proteins__lt=&proteins__gt=&fats__lt=&fats__gt=&carbs__lt=&carbs__gt=&price=&price__lt=&price__gt=&is_prepared=&not_title=&not_is_prepared=`,
      );

      console.log('Response from API:', response.data);
      const results = Array.isArray(response.data) ? response.data : [];
      console.log('Search results:', results);

      const foundResults = {
        combinedDishes: results.filter(item => item.category.includes(2)),
        mainDish: results.filter(item => item.category.includes(3)),
        sideDish: results.filter(item => item.category.includes(4)),
        soup: results.filter(item => item.category.includes(5)),
        desserts: results.filter(item => item.category.includes(6)),
      };

      console.log('Filtered results:', foundResults);
      setSearchResults(foundResults);
    } catch (error) {
      console.error('Error fetching products:', error);
      setSearchResults({});
    }
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

  useEffect(() => {
    if (searchTerm === '') {
      setSearchExecuted(false);
      setSearchResults({});
    }
  }, [searchTerm]);

  return (
    <div
      className={`${s.catalogpage__container} ${theme === 'dark' ? s.dark : s.light}`}
    >
      <div className={s.catalogpage__main}>
        <Heading />
        <div className={s.catalogpage__nav}>
          <Input
            hasButton={true}
            width={'big'}
            colorScheme={1}
            onSearch={onSearch}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={'Поиск'}
          />
          <NavCatalog
            setFilteredTags={setFilteredTags}
            setCategory={setCategory}
          />
        </div>
        {searchExecuted ? (
          <Search
            searchResults={searchResults}
            tags={tags}
            categories={categories}
            filteredTags={filteredTags}
          />
        ) : (
          <>
            {category === 7 ? (
              <div id="Popular">
                <Popular filteredTags={filteredTags} category={7} />
              </div>
            ) : (
              <>
                <div id="Popular">
                  <Popular filteredTags={filteredTags} category={category} />
                </div>
                <div id="CombinedDishes">
                  <CombinedDishes
                    filteredTags={filteredTags}
                    category={category}
                  />
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
          </>
        )}
        <div id="Advertisement" style={{ paddingTop: '32px' }}>
          <Advertisement />
        </div>
        <div id="Footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
