import React, { useState, useEffect } from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog';

export const MainDish = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const response = await fetch(
          'https://grikoandrey.pythonanywhere.com/product/?name=&category=3&calories=&proteins=&fats=&carbs=&price=&is_prepared=unknown&not_name=&not_calories=&not_proteins=&not_fats=&not_carbs=&not_price=&not_is_prepared=unknown',
        );
        const data = await response.json();
        const formattedData = data.map(item => ({
          title: item.name,
          extra: item.cooking_method,
          weight: `${item.weight} г`,
          calories: `${item.calories} ккал`,
          img: item.image,
        }));
        setPlates(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPlates();
  }, []);

  return (
    <div className={s.container}>
      <p className={s.maindish__title}>Основное блюдо</p>
      <div className={s.maindish__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.maindish__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
