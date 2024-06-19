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
import back from '../../assets/images/icons/Back.svg';

export const PlateConstructor = () => {
  const tags = ['Глютен', 'Сахар', 'Мучное', 'Лук', 'Морковь', 'Ещё'];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const [isPlateCombined, setIsPlateCombined] = useState(false);
  const [leftImage, setLeftImage] = useState(null);
  const [rightImage, setRightImage] = useState(null);

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [descriptions, setDescriptions] = useState([]);
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/products/1`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Ошибка при получении данных:', errorData);
          throw new Error('Ошибка при получении данных');
        }

        const productData = await response.json();
        setTitle(productData.title);
        setPrice(productData.price);
        setSubtitle(productData.subtitle);
        setDescriptions(productData.descriptions);
        setAllTags(productData.allTags);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchProductData();
  }, []);

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

  const [buttonText, setButtonText] = useState('1300'); /*(plates[0].price)*/
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
          title={title}
          price={price}
          subtitle={subtitle}
          descriptions={descriptions}
          activeTags={activeTags}
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
          title={title}
          price={price}
          subtitle={subtitle}
          descriptions={descriptions}
          activeTags={activeTags}
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
            setButtonText('1300' /*plates[0].price*/);
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
