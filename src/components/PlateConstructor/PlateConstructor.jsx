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
import Description from '../ui/DescriptionInConstructor/Description';

export const PlateConstructor = ({
  title = 'Название блюда',
  price = 'Цена',
  info_title = 'Описание',
  info_text = 'Салат из свежих овощей, с добавлением микро - зеленим, приправлен ореховым соусом отличный гарнир на ужин',
}) => {
  const tags = ['Глютен', 'Сахар', 'Мучное', 'Лук', 'Морковь', 'Ещё'];
  const descriptions = ['кБЖУ', 'Состав', 'Описание'];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const [isPlateCombined, setIsPlateCombined] = useState(false);
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);

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

        {!isPlateCombined && (
          <div className={s.plateConstructor__constructorBlock}>
            <div
              className={cn(
                s.plateConstructor__plateHalf,
                s['plateConstructor__plateHalf--first'],
              )}
            >
              <SliderPlates
                onSelect={handleSelectImage}
                descriptions={descriptions}
                activeTags={activeTags}
                title={title}
                price={price}
                info_title={info_title}
                info_text={info_text}
              />
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
