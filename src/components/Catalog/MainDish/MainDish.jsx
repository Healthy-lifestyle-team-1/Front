// src/components/Catalog/MainDish/index.js
import React, { useState, useEffect } from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog/CardCatalog';
import { BASE_URL } from '../../../core/url';

export const MainDish = ({ filteredTags, category }) => {
  const [plates, setPlates] = useState([]);
  const [tags, setTags] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchPlates = async () => {
      let url = `${BASE_URL}/product/?category=3`;
      if (category) {
        url = `${BASE_URL}/product/?category=${category}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Fetched plates data:', data);

        if (Array.isArray(data)) {
          const formattedData = data.map(item => ({
            title: item.title,
            extra: item.subtitle,
            weight: `${item.weight} г`,
            calories: `${item.calories} ккал`,
            img: item.image,
            price: item.price,
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
  }, [category]);

  const filteredPlates =
    filteredTags.length > 0
      ? plates.filter(
          plate => !plate.tags.some(tag => filteredTags.includes(tag)),
        )
      : plates;

  return (
    <div className={s.container}>
      <p className={s.maindish__title}>Основное блюдо</p>
      <div className={s.maindish__items}>
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
      <a className={s.maindish__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
