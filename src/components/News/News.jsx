import React from 'react';

import img1 from '../../assets/images/plates/plates1.jpg';

import cn from 'classnames';
import s from './styles.module.scss';

export const CardNews = ({ title, img }) => {
  return (
    <div className={s.container}>
      <div className={s.cardNews__title}>{title}</div>
      <img className={s.cardNews__image} src={img} alt={'фото тарелки'} />
    </div>
  );
};

const news = [
  { title: 'Собери свою тарелку', img: img1 },
  { title: 'Рекомендации недели', img: img1 },
  { title: 'Здоровый образ жизни', img: img1 },
  { title: 'Новинки', img: img1 },
];

export const CardNewsList = () => {
  return (
    <div className={s.newsContainer}>
      {news.map((item, index) => (
        <CardNews key={index} {...item} />
      ))}
    </div>
  );
};
