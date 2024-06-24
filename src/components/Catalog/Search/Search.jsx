import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog';
import { BASE_URL } from '../../../core/url';

export const Search = ({ searchResults }) => {
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await fetch(`${BASE_URL}/tag/`);
        const data = await response.json();
        console.log('Fetched tags data:', data);
        if (Array.isArray(data)) {
          const formattedTags = data.map(tag => ({
            id: tag.id,
            ...tag,
          }));
          setTags(formattedTags);
        } else {
          console.error('Tags data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    const fetchCategories = async () => {
      try {
        const response = await fetch(`${BASE_URL}/category/`);
        const data = await response.json();
        console.log('Fetched categories data:', data);
        if (Array.isArray(data)) {
          const formattedCategories = data.map(category => ({
            id: category.id,
            ...category,
          }));
          setCategories(formattedCategories);
        } else {
          console.error('Categories data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchTags();
    fetchCategories();
  }, []);

  return (
    <div className={s.container}>
      {Object.keys(searchResults).every(
        key => searchResults[key].length === 0,
      ) ? (
        <p className={s.noResults}>Ничего не найдено!</p>
      ) : (
        <>
          {searchResults.combinedDishes.length > 0 && (
            <div id="CombinedDishes">
              <div className={s.search__title}>Готовые тарелки</div>
              <div className={s.category}>
                {searchResults.combinedDishes.map(item => (
                  <CardCatalog
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    extra={item.subtitle}
                    weight={`${item.weight} г`}
                    calories={`${item.calories} ккал`}
                    img={item.image}
                    price={item.price}
                    tags={item.tag}
                    categories={item.category}
                    allTags={tags}
                    allCategories={categories}
                  />
                ))}
              </div>
            </div>
          )}
          {searchResults.mainDish.length > 0 && (
            <div id="MainDish">
              <div className={s.search__title}>Основное блюдо</div>
              <div className={s.category}>
                {searchResults.mainDish.map(item => (
                  <CardCatalog
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    extra={item.subtitle}
                    weight={`${item.weight} г`}
                    calories={`${item.calories} ккал`}
                    img={item.image}
                    price={item.price}
                    tags={item.tag}
                    categories={item.category}
                    allTags={tags}
                    allCategories={categories}
                  />
                ))}
              </div>
            </div>
          )}
          {searchResults.sideDish.length > 0 && (
            <div id="SideDish">
              <div className={s.search__title}>Гарниры</div>
              <div className={s.category}>
                {searchResults.sideDish.map(item => (
                  <CardCatalog
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    extra={item.subtitle}
                    weight={`${item.weight} г`}
                    calories={`${item.calories} ккал`}
                    img={item.image}
                    price={item.price}
                    tags={item.tag}
                    categories={item.category}
                    allTags={tags}
                    allCategories={categories}
                  />
                ))}
              </div>
            </div>
          )}
          {searchResults.soup.length > 0 && (
            <div id="Soup">
              <div className={s.search__title}>Супы</div>
              <div className={s.category}>
                {searchResults.soup.map(item => (
                  <CardCatalog
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    extra={item.subtitle}
                    weight={`${item.weight} г`}
                    calories={`${item.calories} ккал`}
                    img={item.image}
                    price={item.price}
                    tags={item.tag}
                    categories={item.category}
                    allTags={tags}
                    allCategories={categories}
                  />
                ))}
              </div>
            </div>
          )}
          {searchResults.desserts.length > 0 && (
            <div id="Desserts">
              <div className={s.search__title}>Десерты</div>
              <div className={s.category}>
                {searchResults.desserts.map(item => (
                  <CardCatalog
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    extra={item.subtitle}
                    weight={`${item.weight} г`}
                    calories={`${item.calories} ккал`}
                    img={item.image}
                    price={item.price}
                    tags={item.tag}
                    categories={item.category}
                    allTags={tags}
                    allCategories={categories}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
