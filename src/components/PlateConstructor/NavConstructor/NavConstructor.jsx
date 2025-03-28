import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTag } from '../../../core/store/tagsSlice';
import { Button } from '../../ui/Button';
import s from './styles.module.scss';

const tagNames = [
  'Без глютена',
  'Без сахара',
  'Вегетарианское',
  'Без лактозы',
  'Еще',
];

const tagToFilterParam = {
  0: '1', // Без глютена
  1: '2', // Без сахара
  2: '4', // Вегетарианское
  3: '3', // Без лактозы
};

export const NavConstructor = ({ setFilteredTags }) => {
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  const handleTagClick = tagIndex => {
    console.log('кнопка нажата');
    // dispatch(toggleTag(tagIndex));
  };

  useEffect(() => {
    /*
    const activeFilterParams = Array.isArray(activeTags)
      ? activeTags
          .filter(tagIndex => tagIndex in tagToFilterParam)
          .map(tagIndex => parseInt(tagToFilterParam[tagIndex]))
      : [];

    setFilteredTags(activeFilterParams);
    */
  }, [activeTags, setFilteredTags]);

  return (
    <div className={s.container}>
      <div className={s.tagBtns}>
        {tagNames.map((tagName, index) => (
          <Button
            key={index}
            colorScheme={3}
            size={6}
            title={tagName}
            isActive={Array.isArray(activeTags) && activeTags.includes(index)}
            onClick={() => handleTagClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
