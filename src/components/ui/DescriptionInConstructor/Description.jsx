import React, { useState } from 'react';
import { Button } from '../Button';
import s from './styles.module.scss';

const Description = ({
  title = '',
  price = '',
  subtitle = '',
  descriptions = [],
  activeTags = [],
}) => {
  const [visibleDescriptions, setVisibleDescriptions] = useState([0, 1]);

  const handleDescriptionClick = index => {
    const newVisibleDescriptions = [...visibleDescriptions];
    const clickedIndex = newVisibleDescriptions.indexOf(index);
    const remainingDescription = descriptions.findIndex(
      (desc, i) => !newVisibleDescriptions.includes(i),
    );
    newVisibleDescriptions[clickedIndex] = remainingDescription;
    setVisibleDescriptions(newVisibleDescriptions);
  };

  return (
    <div className={s.main__description}>
      <div className={s.main__tags}></div>
      <div className={s.main__title}>{title}</div>
      <div className={s.main__price}>{price}</div>
      <div className={s.main__info_title}>Описание</div>
      <div className={s.main__subtitle}>{subtitle}</div>
    </div>
  );
};

export default Description;
