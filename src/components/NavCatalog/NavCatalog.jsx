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

export const NavCatalog = ({ setFilteredTags, setCategory }) => {
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  const handleTagClick = tagIndex => {
    dispatch(toggleTag(tagIndex));
    if (tagIndex === 4) {
      // Завтрак
      setCategory(prevCategory => (prevCategory === 7 ? null : 7));
    }
  };

  useEffect(() => {
    const activeFilterParams = activeTags
      .filter(tagIndex => tagIndex in tagToFilterParam)
      .map(tagIndex => parseInt(tagToFilterParam[tagIndex]));

    setFilteredTags(activeFilterParams);
  }, [activeTags, setFilteredTags]);

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
