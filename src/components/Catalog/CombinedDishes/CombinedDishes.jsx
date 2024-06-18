// src/components/Catalog/CombinedDishes/index.js
import React, { useState, useEffect } from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';
import { BASE_URL } from '../../../core/url';

export const CombinedDishes = ({ filteredTags }) => {
  const [plates, setPlates] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}product/?name=&category=2&calories=&proteins=&fats=&carbs=&price=&is_prepared=&not_name=&not_calories=&not_proteins=&not_fats=&not_carbs=&not_price=&not_is_prepared=`,
        );
        const data = await response.json();
        console.log('Fetched plates data:', data);

        if (Array.isArray(data)) {
          const formattedData = data.map(item => ({
            title: item.title,
            extra: item.subtitle,
            weight: `${item.weight} г`,
            calories: `${item.calories} ккал`,
            img: item.image,
            categories: item.category || [],
            tags: item.tag || [],
          }));
          console.log('Formatted plates data:', formattedData);
          setPlates(formattedData);
        } else {
          console.error('Unexpected data format:', data);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

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

    fetchPlates();
    fetchTags();
    fetchCategories();
  }, []);

  const filteredPlates =
    filteredTags.length > 0
      ? plates.filter(
          plate => !plate.tags.some(tag => filteredTags.includes(tag)),
        )
      : plates;

  return (
    <div className={s.container}>
      <p className={s.combineddishes__title}>Готовые тарелки</p>
      <div className={s.combineddishes__items}>
        {filteredPlates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog
              {...item}
              tags={item.tags}
              categories={item.categories}
              allTags={tags}
              allCategories={categories}
            />
          </div>
        ))}
      </div>
      <a className={s.combineddishes__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
