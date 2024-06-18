// src/components/NavCatalog/index.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTag } from '../../core/store/tagsSlice';
import cn from 'classnames';
import s from './styles.module.scss';
import { CatalogLinkButton as LinkButton } from './CatalogLinkButton';
import { BASE_URL } from '../../core/url'; // Импортируем BASE_URL

const tagNames = [
  'Без глютена',
  'Без сахара',
  'Вегетарианское',
  'Без лактозы',
  'Завтрак',
  'Гарниры',
  'Супы',
  'Еще',
];

const tagToFilterParam = {
  0: '1', // Без глютена
  1: '2', // Без сахара
  2: '4', // Вегетарианское
  3: '3', // Без лактозы
};

export const NavCatalog = () => {
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  const handleTagClick = async tagIndex => {
    dispatch(toggleTag(tagIndex));

    if (tagIndex in tagToFilterParam) {
      const filterParam = tagToFilterParam[tagIndex];
      try {
        const response = await fetch(
          `${BASE_URL}/product/?name=&calories=&proteins=&fats=&carbs=&price=&is_prepared=&not_name=&not_calories=&not_proteins=&not_fats=&not_carbs=&not_price=&not_is_prepared=&not_tag=${filterParam}`,
        );
        if (response.ok) {
          const data = await response.json();
          console.log(`Количество найденных объектов: ${data.length}`);
        } else {
          console.error('Ошибка при получении данных');
        }
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  };

  return (
    <div className={s.container}>
      <div className={s.catalog__navigation}>
        {tagNames.map((tagName, index) => (
          <LinkButton
            key={index}
            className={cn(s.catalog__navigationItem, {
              [s.active]: activeTags.includes(index),
            })}
            onClick={() => handleTagClick(index)}
          >
            {tagName}
          </LinkButton>
        ))}
      </div>
    </div>
  );
};
