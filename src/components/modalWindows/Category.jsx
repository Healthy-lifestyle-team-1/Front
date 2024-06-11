import React from 'react';
import x from '../../assets/images/icons/light/X.svg';
import cn from 'classnames';
import s from './styles.module.scss';

const Category = ({ onClose }) => {
  const categories = [
    { name: 'Основные блюда', path: '/' },
    { name: 'Гарниры', path: '/' },
    { name: 'Супы', path: '/' },
    { name: 'Десерты', path: '/' },
    { name: 'Тарелки', path: '/' },
    { name: 'Популярное', path: '/' },
  ];

  const handleLinkClick = (event, path, name) => {
    event.preventDefault();
    console.log(`Category clicked: ${name}`);
    if (onClose) {
      onClose();
    }
    setTimeout(() => {
      window.location.href = path;
    }, 300);
  };

  return (
    <div className={s.modalOverlay}>
      <div className={cn(s.modal__content, s.modal__content_cat)}>
        <button className={s.closeButton} onClick={() => onClose && onClose()}>
          <img src={x} alt={'Закрыть'} />
        </button>
        <div className={s.category__info}>
          <div className={s.modal__name__cat}>Категории</div>
          <div className={s.category__list}>
            {categories.map((category, index) => (
              <span className={s.category__items} key={index}>
                <a
                  className={s.category__item}
                  href={category.path}
                  onClick={event =>
                    handleLinkClick(event, category.path, category.name)
                  }
                >
                  {category.name}
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
