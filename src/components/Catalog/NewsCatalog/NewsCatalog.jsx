import React from 'react';
import s from './styles.module.scss';

// импорты изображений
import harvardPlate from '../../../assets/images/NewsCatalog/harvard-plate.png';
import fork from '../../../assets/images/NewsCatalog/book.png';
import sports from '../../../assets/images/NewsCatalog/sports.png';
import watermelon from '../../../assets/images/NewsCatalog/watermelon.png';

export const CardNewsList = () => {
  return (
    <div className={s.container}>
      <div className={s.cardNews}>
        <a href="/" className={`${s.cardNews__item} ${s.harvard}`}>
          <div className={s.cardNews__itemTitle}>
            Попробуй гарвардскую тарелку
          </div>
          <img
            className={s.cardNews__itemImage}
            src={harvardPlate}
            alt={'фото тарелки'}
          />
        </a>
        <a href="/" className={`${s.cardNews__item} ${s.recommendations}`}>
          <div className={s.cardNews__itemTitle}>Наши<br />рецепты</div>
          <img className={s.cardNews__itemImage} src={fork} alt={'вилка'} />
        </a>
        <a href="/" className={`${s.cardNews__item} ${s.sport}`}>
          <div className={s.cardNews__itemTitle}>Здоровый<br />образ жизни</div>
          <img className={s.cardNews__itemImage} src={sports} alt={'спорт'} />
        </a>
        <a href="/" className={`${s.cardNews__item} ${s.new}`}>
          <div className={s.cardNews__itemTitle}>Новинки</div>
          <img
            className={s.cardNews__itemImage}
            src={watermelon}
            alt={'фрукт'}
          />
        </a>
      </div>
    </div>
  );
};
