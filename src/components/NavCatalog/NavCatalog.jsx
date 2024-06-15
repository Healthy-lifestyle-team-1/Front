import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTag } from '../../core/store/tagsSlice';
import cn from 'classnames';
import s from './styles.module.scss';
import { CatalogLinkButton as LinkButton } from './CatalogLinkButton';

const tagNames = [
  "Без глютена",
  "Без сахара",
  "Вегетарианское",
  "Без лактозы",
  "Завтрак",
  "Гарниры",
  "Супы",
  "Еще"
];

export const NavCatalog = () => {
  const activeTags = useSelector((state) => state.tags);
  const dispatch = useDispatch();

  const handleTagClick = (tagIndex) => {
    dispatch(toggleTag(tagIndex));
  };

  return (
    <div className={s.container}>
      <div className={s.catalog__navigation}>
        {tagNames.map((tagName, index) => (
          <LinkButton
            key={index}
            className={cn(s.catalog__navigationItem, {
              [s.active]: activeTags.includes(index)
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
