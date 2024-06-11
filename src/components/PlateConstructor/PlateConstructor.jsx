import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { toggleTag } from '../../core/store/tagsSlice';
import cn from 'classnames';
import s from './styles.module.scss';

// Импортируем изображения
import rightPlateImage from '../../assets/images/halfofplates/right/right.png';
import leftPlateImage from '../../assets/images/halfofplates/left/left.png';

export const PlateConstructor = () => {
  const tags = ['Глютен', 'Сахар', 'Мучное', 'Лук', 'Морковь', 'Ещё'];
  const descriptions = ['кБЖУ', 'Состав', 'Описание'];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const [isPlateCombined, setIsPlateCombined] = useState(false);
  const [visibleDescriptions, setVisibleDescriptions] = useState([0, 1]);

  const handleTagClick = index => {
    dispatch(toggleTag(index));
  };

  const handleCombinePlate = () => {
    setIsPlateCombined(true);
  };

  const handleSelectImage = (side, image) => {
    if (side === 'left') {
      setLeftImage(image);
    } else if (side === 'right') {
      setRightImage(image);
    }
  };

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
    <div className={s.container}>
      <div className={s.plateConstructor}>
        <div className={s.plateConstructor__tagBtns}>
          {/* кнопки-теги */}
          {tags.map((tag, index) => (
            <Button
              colorScheme={3}
              size={6}
              key={index}
              title={tag}
              isActive={activeTags.includes(index)}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </div>

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

        <div className={s.plateConstructor__main}>
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
          {!isPlateCombined && (
            <div className={s.plateConstructor__constructorBlock}>
              <div
                className={cn(
                  s.plateConstructor__plateHalf,
                  s['plateConstructor__plateHalf--first'],
                )}
              >
                <SliderPlates onSelect={handleSelectImage} />
                <div className={s.plateConstructor__constructorBlock}></div>
              </div>
              <div
                className={cn(
                  s.plateConstructor__plateHalf,
                  s['plateConstructor__plateHalf--second'],
                )}
              ></div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Button
          colorScheme={3}
          width="280px"
          title="Собрать"
          onClick={handleCombinePlate}
        />
      </div>
    </div>
  );
};
