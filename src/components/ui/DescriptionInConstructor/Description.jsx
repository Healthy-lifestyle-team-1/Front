import React, { useState } from 'react';
import { Button } from '../Button';
import s from './styles.module.scss';

const Description = ({
  title = '',
  price = '',
  info_title = '',
  info_text = '',
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
      <div className={s.main__info_title}>{info_title}</div>
      <div className={s.main__info_text}>{info_text}</div>

      <div className={s.plateConstructor__tagBtns}>
        {visibleDescriptions.map(descIndex => (
          <Button
            colorScheme={5}
            size={7}
            key={descIndex}
            title={descriptions[descIndex]}
            isActive={activeTags.includes(descIndex)}
            onClick={() => handleDescriptionClick(descIndex)}
          />
        ))}
      </div>
    </div>
  );
};

export default Description;
