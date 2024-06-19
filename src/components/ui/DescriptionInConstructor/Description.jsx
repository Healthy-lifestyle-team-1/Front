import React from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import { icons } from '../../../assets/images/icons/icons';

const Description = ({ title, price, subtitle, tags }) => {
  const theme = useSelector(state => state.theme);

  return (
    <div className={s.main__description}>
      <div className={s.main__tags}>
        {tags.map((tag, index) => (
          <img
            key={index}
            src={icons[theme][tag]}
            alt={tag}
            className={s.tag__icon}
          />
        ))}
      </div>
      <div className={s.main__title}>{title}</div>
      <div className={s.main__price}>{price}</div>
      <div className={s.main__info_title}>Описание</div>
      <div className={s.main__subtitle}>{subtitle}</div>
    </div>
  );
};

export default Description;
