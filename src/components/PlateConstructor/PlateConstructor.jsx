import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { toggleTag } from '../../core/store/tagsSlice';
import { UsersPlate } from '../UsersPlate';
import cn from 'classnames';
import s from './styles.module.scss';

// Импортируем изображения
import rightPlateImage from '../../assets/images/halfofplates/right/right.png';
import leftPlateImage from '../../assets/images/halfofplates/left/left.png';

export const PlateConstructor = () => {
  const tags = ['Глютен', 'Сахар', 'Мучное', 'Лук', 'Морковь', 'Ещё'];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const [leftImage, setLeftImage] = useState(leftPlateImage); // Устанавливаем начальное значение
  const [rightImage, setRightImage] = useState(rightPlateImage); // Устанавливаем начальное значение
  const [isPlateCombined, setIsPlateCombined] = useState(false);

  const handleTagClick = index => {
    console.log('Button clicked:', tags[index]);
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

  return (
    <div className={s.container}>
      <div className={s.plateConstructor}>
        <div className={s.plateConstructor__header}>
          <div className={s.plateConstructor__title}>Конструктор</div>
          <div className={s.plateConstructor__description}>
            Собери свою персональную тарелку
          </div>
        </div>
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
        {isPlateCombined && leftImage && rightImage && (
          <div className={s.plateConstructor__combined}>
            <UsersPlate leftImage={leftImage} rightImage={rightImage} />
          </div>
        )}
      </div>
      <div>
        <Button
          colorScheme={3}
          width="280px"
          title="Собрать тарелку"
          onClick={handleCombinePlate}
        />
      </div>
    </div>
  );
};
