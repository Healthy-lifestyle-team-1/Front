import React from 'react';
import x from '../../assets/images/icons/light/X.svg';
import cn from 'classnames';
import s from './styles.module.scss';

const Category = ({ onClose }) => {
  const categories = [
    'Основные блюда',
    'Гарниры',
    'Супы',
    'Десерты',
    'Тарелки',
    'Популярное',
  ];

  return (
    <div className={s.modalOverlay}>
      <div className={cn(s.modal__content, s.modal__content_cat)}>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.category__info}>
          <div className={s.modal__name__cat}>Категории</div>
          <div className={s.category__list}>
            {categories.map((category, index) => (
              <span className={s.category__items} key={index}>
                <a className={s.category__item} href="/">
                  {category}
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
