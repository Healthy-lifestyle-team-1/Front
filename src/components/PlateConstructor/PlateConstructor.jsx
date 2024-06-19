import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { toggleTag } from '../../core/store/tagsSlice';
import Description from '../ui/DescriptionInConstructor/Description';
import { BASE_URL } from '../../core/url';
import cn from 'classnames';
import s from './styles.module.scss';

// Импортируем изображения
import rightPlate from '../../assets/images/halfofplates/right/right.png';
import leftPlate from '../../assets/images/halfofplates/left/left.png';

export const PlateConstructor = () => {
  const tags = ['Глютен', 'Сахар', 'Мучное', 'Лук', 'Морковь', 'Ещё'];
  const activeTags = useSelector(state => state.tags);
  const token = useSelector(state => state.auth.token); // Получение токена из состояния Redux
  const dispatch = useDispatch();
  const [isPlateCombined, setIsPlateCombined] = useState(false);
  const [leftDescription, setLeftDescription] = useState({});
  const [rightDescription, setRightDescription] = useState({});

  const handleTagClick = index => {
    dispatch(toggleTag(index));
  };

  const handleCombinePlate = () => {
    setIsPlateCombined(true);
  };

  const handleSelectImage = async (side, product) => {
    if (!token) {
      console.error('Токен отсутствует');
      return;
    }

    try {
      console.log(`Используемый токен: ${token}`);
      console.log(`Запрос к URL: ${BASE_URL}/product/${product.id}`);

      const response = await fetch(`${BASE_URL}/product/${product.id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Добавляем токен авторизации
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка при получении данных:', errorData);
        throw new Error(
          `Ошибка при получении данных: ${errorData.detail || response.statusText}`,
        );
      }

      const productData = await response.json();

      const description = {
        title: productData.title,
        price: productData.price,
        subtitle: productData.subtitle,
      };

      if (side === 'left') {
        setLeftDescription(description);
      } else if (side === 'right') {
        setRightDescription(description);
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
    }
  };

  const handleBackClick = () => {
    setIsPlateCombined(false);
  };

  const [buttonText, setButtonText] = useState('1300');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={s.plateConstructor}>
      <div className={s.plateConstructor__title}>
        собери{' '}
        <span className={s.plateConstructor__title__pink}>идеальную </span>
        тарелку
      </div>
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
          title={leftDescription.title}
          price={leftDescription.price}
          subtitle={`Описание Лево: ${leftDescription.subtitle}`}
        />
        <div className={s.plateConstructor__dish}>
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
        </div>
        <Description
          title={rightDescription.title}
          price={rightDescription.price}
          subtitle={`Описание Право: ${rightDescription.subtitle}`}
        />
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          colorScheme={1}
          title={buttonText}
          size={11}
          onClick={handleCombinePlate}
          onMouseEnter={() => {
            setButtonText('Собрать');
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setButtonText('1300');
            setIsHovered(false);
          }}
        />
      </div>
      {isPlateCombined && (
        <div className={s.plateConstructor__btn_back} onClick={handleBackClick}>
          <div className={s.plateConstructor__btn_text}>← в конструктор</div>
        </div>
      )}
    </div>
  );
};
