import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import Description from '../ui/DescriptionInConstructor/Description';
import { BASE_URL } from '../../core/url';
import cn from 'classnames';
import s from './styles.module.scss';

// Импортируем изображения
import rightPlate from '../../assets/images/halfofplates/right/right.png';
import leftPlate from '../../assets/images/halfofplates/left/left.png';

export const PlateConstructor = () => {
  const tags = [
    'Без глютена',
    'Без сахара',
    'Вегетарианское',
    'Без лактозы',
    'ещё',
  ];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();
  const [isPlateCombined, setIsPlateCombined] = useState(false);
  const [leftDescription, setLeftDescription] = useState({});
  const [rightDescription, setRightDescription] = useState({});
  const [selectedLeftImage, setSelectedLeftImage] = useState(leftPlate);
  const [selectedRightImage, setSelectedRightImage] = useState(rightPlate);
  const [totalPrice, setTotalPrice] = useState(0);

  // New states for default data
  const [defaultLeftDescription, setDefaultLeftDescription] = useState({});
  const [defaultRightDescription, setDefaultRightDescription] = useState({});

  const fetchProductData = async id => {
    try {
      console.log(`Запрос к URL: ${BASE_URL}/product/?id=${id}`);

      const response = await fetch(`${BASE_URL}/product/?id=${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
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

      if (Array.isArray(productData) && productData.length > 0) {
        const productInfo = productData[0]; // Получаем первый элемент массива
        return {
          title: productInfo.title,
          price: productInfo.price,
          subtitle: productInfo.subtitle,
          image: productInfo.image_extra, // Используем image_extra
          tags: productInfo.tags ? productInfo.tags.map(tag => tag.name) : [], // Добавляем теги
        };
      } else {
        console.error('Неверный формат данных:', productData);
        return null;
      }
    } catch (error) {
      console.error('Ошибка при получении данных:', error);
      return null;
    }
  };

  const calculateTotalPrice = (leftPrice, rightPrice) => {
    const left = parseFloat(leftPrice) || 0;
    const right = parseFloat(rightPrice) || 0;
    return left + right;
  };

  useEffect(() => {
    const fetchInitialData = async () => {
      const leftProductData = await fetchProductData(11); // Изменено на 11 для левой стороны
      const rightProductData = await fetchProductData(10); // Изменено на 10 для правой стороны

      if (leftProductData) {
        setLeftDescription(leftProductData);
        setDefaultLeftDescription(leftProductData); // Set default left description
        setSelectedLeftImage(leftProductData.image);
      }

      if (rightProductData) {
        setRightDescription(rightProductData);
        setDefaultRightDescription(rightProductData); // Set default right description
        setSelectedRightImage(rightProductData.image);
      }

      if (leftProductData && rightProductData) {
        setTotalPrice(
          calculateTotalPrice(leftProductData.price, rightProductData.price),
        );
      }
    };

    fetchInitialData();
  }, []);

  const handleTagClick = index => {
    dispatch(toggleTag(index));
  };

  const handleCombinePlate = () => {
    setIsPlateCombined(true);
  };

  const handleSelectImage = async (side, product) => {
    const productData = await fetchProductData(product.id);

    if (productData) {
      if (side === 'right') {
        setLeftDescription(productData);
        setSelectedLeftImage(productData.image);
        setTotalPrice(
          calculateTotalPrice(productData.price, rightDescription.price),
        );
      } else if (side === 'left') {
        setRightDescription(productData);
        setSelectedRightImage(productData.image);
        setTotalPrice(
          calculateTotalPrice(leftDescription.price, productData.price),
        );
      }
    }
  };

  const handleBackClick = () => {
    setLeftDescription(defaultLeftDescription); // Reset to default left description
    setRightDescription(defaultRightDescription); // Reset to default right description
    setIsPlateCombined(false);
  };

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
          subtitle={leftDescription.subtitle}
          tags={leftDescription.tags || []}
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
                    src={selectedLeftImage}
                    alt="left plate"
                    className={s.plateImage}
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </div>
                <div className={s.plateConstructor__plateHalf}>
                  <img
                    src={selectedRightImage}
                    alt="right plate"
                    className={s.plateImage}
                    style={{ transform: 'rotate(180deg)' }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <Description
          title={rightDescription.title}
          price={rightDescription.price}
          subtitle={rightDescription.subtitle}
          tags={rightDescription.tags || []}
        />
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          colorScheme={1}
          title={isHovered ? 'Собрать' : `${totalPrice}`}
          size={11}
          onClick={handleCombinePlate}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
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
