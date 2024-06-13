import React from 'react';
import s from './styles.module.scss';

// импорты изображений
import harvardPlate from '../../assets/images/NewsCatalog/harvard-plate.png';
import fork from '../../assets/images/NewsCatalog/fork.png';
import sports from '../../assets/images/NewsCatalog/sports.png';
import watermelon from '../../assets/images/NewsCatalog/watermelon.png';

export const CardNewsList = () => {
  return (
    <div className={s.container}>
      <div className={s.cardNews}>
      <div className={`${s.cardNews__item} ${s.harvard}`}>
          <div className={s.cardNews__itemTitle}>Попробуй гарварскую тарелку</div>
          <img
            className={s.cardNews__itemImage}
            src={harvardPlate}
            alt={'фото тарелки'}
          />
        </div>
        <div className={`${s.cardNews__item} ${s.recommendations}`}>
          <div className={s.cardNews__itemTitle}>Рекомендации недели</div>
          <img
            className={s.cardNews__itemImage}
            src={fork}
            alt={'вилка'}
          />
        </div>
        <div className={`${s.cardNews__item} ${s.sport}`}>
          <div className={s.cardNews__itemTitle}>Здоровый образ жизни</div>
          <img
            className={s.cardNews__itemImage}
            src={sports}
            alt={'спорт'}
          />
        </div>
        <div className={`${s.cardNews__item} ${s.new}`}>
          <div className={s.cardNews__itemTitle}>Новинки</div>
          <img
            className={s.cardNews__itemImage}
            src={watermelon}
            alt={'фрукт'}
          />
        </div>
      </div>
    </div>
  );
};
