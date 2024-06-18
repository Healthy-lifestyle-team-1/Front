// src/components/ui/Cards/CardCatalog/index.js
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonWithTheme } from '../../Button/ButtonWithTheme';
import cn from 'classnames';
import s from './styles.module.scss';

export const CardCatalog = ({
  title,
  extra,
  weight,
  calories,
  img,
  price,
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
          {tags.length > 0 ? (
            tags.map((tagId, index) => {
              const tagName = getTagNameById(tagId);
              return (
                <span key={index} className={s.tag}>
                  {tagName}
                </span>
              );
            })
          ) : (
            <div className={s.invisibleBlock}></div>
          )}
        </div>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <ButtonWithTheme
          colorScheme={1}
          title={price}
          size={3}
          showRubleSign={true}
        />
      </div>
      <div className={s.cardfood__Img} style={{ display: 'flex' }}>
        <img
          className={s.cardfood__plateImg}
          src={img}
          alt="фото тарелки"
        ></img>
      </div>
    </div>
  );
};
