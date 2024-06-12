import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { toggleTag } from '../../core/store/tagsSlice';
import Description from '../ui/DescriptionInConstructor/Description';

import cn from 'classnames';
import s from './styles.module.scss';

// Импортируем изображения
import rightPlate from '../../assets/images/halfofplates/right/right.png';
import leftPlate from '../../assets/images/halfofplates/left/left.png';
import back from '../../assets/images/icons/Back.svg';

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

  const handleBackClick = () => {
    setIsPlateCombined(false);
  };

  return (
    <div className={s.plateConstructor}>
      <div className={s.plateConstructor__tagBtns}>
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
      <div className={s.plateConstructor__slider}>
        <Description
          title={title}
          price={price}
          info_title={info_title}
          info_text={info_text}
          descriptions={descriptions}
          activeTags={activeTags}
        />
        {!isPlateCombined && (
          <div className={s.plateConstructor__constructorBlock}>
            <SliderPlates onSelect={handleSelectImage} />
          </div>
        )}

        {isPlateCombined && (
          <div className={s.block}>
            <div
              className={cn(s.plateConstructor__constructorBlock, s.combined)}
            >
              <div className={s.plateConstructor__plateHalf}>
                <img
                  src={leftPlate}
                  alt="left plate"
                  className={s.plateImage}
                />
              </div>
              <div className={s.plateConstructor__plateHalf}>
                <img
                  src={rightPlate}
                  alt="right plate"
                  className={s.plateImage}
                />
              </div>
            </div>
          </div>
        )}
        <Description
          title={title}
          price={price}
          info_title={info_title}
          info_text={info_text}
          descriptions={descriptions}
          activeTags={activeTags}
        />
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          colorScheme={1}
          title={'Собрать'}
          onClick={handleCombinePlate}
          size={1}
        />
      </div>
      {isPlateCombined && (
        <div className={s.plateConstructor__btn_back} onClick={handleBackClick}>
          <img className={s.back__img} src={back} alt={'в конструктор'} />
          <div className={s.plateConstructor__btn_text}>в конструктор</div>
        </div>
      )}
    </div>
  );
};
