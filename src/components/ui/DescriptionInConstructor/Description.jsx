import React from 'react';

import s from './styles.module.scss';

export const Description = () => {
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
      <div className={s.main__info}>{info}</div>

      <div className={s.plateConstructor__tagBtns}>
        {/* кнопки-описание */}
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
