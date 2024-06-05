import React from 'react';
import theHarvardPlate from '../../assets/images/articles/theHarvardPlate.png';
import cn from 'classnames';
import s from './styles.module.scss';
import { CardArticle } from '../ui/Cards/CardArticle';

export const HelpfulArticles = () => {
  return (
    <div className={s.container}>
      <div className={s.helpfulArticle__blockTitle}>
        <span className={s.helpfulArticle__leftTitle}>Полезные </span>
        <span className={s.helpfulArticle__rightTitle}>Статьи</span>
      </div>
      <div className={s.helpfulArticle__content}>
        {titles.map((item, index) => (
          <CardArticle
            key={index}
            img={item.img}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};

const titles = [
  {
    img: theHarvardPlate,
    description: '“Гарвардская” Тарелка здорового питания',
    url: '/',
  },
  {
    img: theHarvardPlate,
    description: 'Правда или миф: есть ли несочетаемые продукты?',
    url: '/',
  },
  {
    img: theHarvardPlate,
    description: 'Мифы об инсулине: реабилитация важного гормона',
    url: '/',
  },
  {
    img: theHarvardPlate,
    description: 'Почему нельзя голодать для похудения',
    url: '/',
  },
];
