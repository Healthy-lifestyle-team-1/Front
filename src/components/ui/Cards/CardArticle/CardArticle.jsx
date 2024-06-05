import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export const CardArticle = ({ img, description, url }) => {
  return (
    <a href={url} className={s.cardArticle__link}>
      <div className={s.cardArticle__container}>
        <div className={s.cardArticle__img}>
          <img
            className={s.cardArticle__imgItem}
            src={img}
            alt={'фото тарелки'}
          />
        </div>
        <div className={s.cardArticle__text}>
          <div className={s.cardArticle__text__description}>{description}</div>
        </div>
      </div>
    </a>
  );
};
