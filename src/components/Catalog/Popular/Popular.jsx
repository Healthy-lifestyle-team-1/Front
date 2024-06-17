import React, { useEffect, useState } from 'react';
import s from './styles.module.scss';
import { CardCatalog } from '../../ui/Cards/CardCatalog';
import { BASE_URL } from '../../../core/url';

export const Popular = () => {
  const [plates, setPlates] = useState([]);

  useEffect(() => {
    const fetchPlates = async () => {
      try {
        const response = await fetch(
          `${BASE_URL}/product/?name=&category=1&calories=&proteins=&fats=&carbs=&price=&is_prepared=unknown&not_name=&not_calories=&not_proteins=&not_fats=&not_carbs=&not_price=&not_is_prepared=unknown`,
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
      <p className={s.popular__title}>Популярное</p>
      <div className={s.popular__items}>
        {plates.map((item, index) => (
          <div key={index} className={s.card}>
            <CardCatalog {...item} />
          </div>
        ))}
      </div>
      <a className={s.popular__link} href="/">
        смотреть все →
      </a>
    </div>
  );
};
