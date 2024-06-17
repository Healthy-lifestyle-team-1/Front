import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonWithTheme } from '../../Button';
import cn from 'classnames';
import s from './styles.module.scss';

import line from '../../../../assets/images/dotted-line-card-catalog.svg';
import { icons } from '../../../../assets/images/icons/icons';

export const CardCatalog = ({
  title,
  extra,
  weight,
  calories,
  img,
  tags = [],
  categories = [],
  allTags = [],
  allCategories = [],
}) => {
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    console.log('tags:', tags);
    console.log('categories:', categories);
    console.log('allTags:', allTags);
    console.log('allCategories:', allCategories);
  }, [tags, categories, allTags, allCategories]);

  const getTagNameById = id => {
    const tag = allTags.find(tag => tag.id === id);
    return tag ? tag.name : 'Unknown';
  };

  return (
    <div className={s.container}>
      <div className={s.cardfood__info}>
        <div className={s.cardfood__labels}>
          {tags.map((tagId, index) => {
            const tagName = getTagNameById(tagId);
            const iconSrc = icons[theme][tagName];
            return (
              iconSrc && (
                <img
                  key={index}
                  src={iconSrc}
                  alt={tagName}
                  className={s.icon}
                />
              )
            );
          })}
        </div>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <ButtonWithTheme colorScheme={1} title={'100 ₽'} size={3} />
      </div>
      <div className={s.cardfood__line}>
        <img src={line} alt="линия"></img>
      </div>
      <div className={s.cardfood__Img}>
        <img
          className={s.cardfood__plateImg}
          src={img}
          alt="фото тарелки"
        ></img>
      </div>
    </div>
  );
};
