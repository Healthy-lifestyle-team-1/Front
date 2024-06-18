// src/components/NavCatalog/index.js
import React, { useEffect } from 'react';
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

  const handleTagClick = tagIndex => {
    dispatch(toggleTag(tagIndex));
  };

  useEffect(() => {
    const fetchFilteredProducts = async () => {
      const activeFilterParams = activeTags
        .filter(tagIndex => tagIndex in tagToFilterParam)
        .map(tagIndex => tagToFilterParam[tagIndex])
        .join('&not_tag=');

      if (activeFilterParams) {
        try {
          const response = await fetch(
            `${BASE_URL}/product/?not_tag=${activeFilterParams}`,
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

    fetchFilteredProducts();
  }, [activeTags]);

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
