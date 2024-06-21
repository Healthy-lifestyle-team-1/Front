import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import xDark from '../../../assets/images/icons/dark/X.svg';
import cn from 'classnames';
import s from './styles.module.scss';

const Category = ({ onClose }) => {
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    // Добавляем класс, который блокирует прокрутку
    document.body.classList.add('no-scroll');

    // Удаляем класс при размонтировании компонента
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  const categories = [
    { name: 'Популярное', path: 'Popular' },
    { name: 'Тарелки', path: 'CombinedDishes' },
    { name: 'Основные блюда', path: 'MainDish' },
    { name: 'Гарниры', path: 'SideDish' },
    { name: 'Супы', path: 'Soup' },
    { name: 'Десерты', path: 'Desserts' },
  ];

  const handleLinkClick = (event, path, name) => {
    event.preventDefault();
    console.log(`Category clicked: ${name}`);
    const section = document.getElementById(path);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className={s.modalOverlay}>
      <div className={cn(s.modal__content, s.modal__content_cat)}>
        <button className={s.closeButton} onClick={() => onClose && onClose()}>
          <img src={xDark} alt={'Закрыть'} style={{ width: '50px' }} />
        </button>
        <div className={s.category__info}>
          <div className={s.modal__name__cat}>Категории</div>
          <div className={s.category__list}>
            {categories.map((category, index) => (
              <span className={s.category__items} key={index}>
                <a
                  className={s.category__item}
                  href={`#${category.path}`}
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
