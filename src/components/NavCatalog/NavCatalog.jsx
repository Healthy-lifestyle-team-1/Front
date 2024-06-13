import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { CatalogLinkButton as LinkButton } from './CatalogLinkButton';

export const NavCatalog = () => {
  return (
    <div className={s.container}>
      <div className={s.catalog__navigation}>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Без глютена
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Без сахара
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Вегетарианское
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Без лактозы
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Завтрак
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Гарниры
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Супы
        </LinkButton>
        <LinkButton to="/" className={s.catalog__navigationItem}>
          Еще
        </LinkButton>
      </div>
    </div>
  );
};
