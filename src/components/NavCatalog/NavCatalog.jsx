import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { CatalogLinkButton as LinkButton } from './CatalogLinkButton';

export const NavCatalog = () => {
  return (
    <div className={s.container}>
      <div className={s.catalog__navigation}>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Суп
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Гарнир
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Салаты
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Основное блюдо
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Десерты
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Новинки
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Избранное
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Смотрели ранее
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Популярное
        </LinkButton>
      </div>
    </div>
  );
};
