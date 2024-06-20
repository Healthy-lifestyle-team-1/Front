import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ButtonWithTheme } from '../../Button/ButtonWithTheme';
import { CardFood } from '../CardFood/CardFood'; // Импортируем компонент CardFood

import { icons } from '../../../../assets/images/icons/icons';
import { BASE_URL } from '../../../../core/url';

import cn from 'classnames';
import s from './styles.module.scss';

export const CardCatalog = ({
  id,
  title,
  extra,
  weight,
  calories,
  img,
  price,
  tags = [],
  categories = [],
  allTags = [],
  allCategories = [],
}) => {
  const theme = useSelector(state => state.theme);
  const token = useSelector(state => state.auth.token); // Получение токена
  const [showCardFood, setShowCardFood] = useState(false);

  useEffect(() => {
    console.log('tags:', tags);
    console.log('categories:', categories);
    console.log('allTags:', allTags);
    console.log('allCategories:', allCategories);
  }, [tags, categories, allTags, allCategories]);

  const getTagNameById = id => {
    const tag = allTags.find(tag => tag.id === id);
    return tag ? tag.name : 'Unknown';
  };

  const handleAddToCart = async () => {
    if (!token) {
      console.error('Токен аутентификации отсутствует');
      return;
    }

    // Предполагаем, что сервер ожидает массив идентификаторов категорий и тегов, а не объекты
    const cartItem = {
      product: id,
      quantity: 1,
    };

    console.log('Отправка данных в корзину:', cartItem); // Логирование данных перед отправкой

    try {
      const response = await fetch(`${BASE_URL}/cart_item/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`, // Добавление токена аутентификации
        },
        body: JSON.stringify(cartItem),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка при добавлении в корзину:', errorData);
        throw new Error('Ошибка при добавлении в корзину');
      }

      const result = await response.json();
      console.log('Успешно добавлено в корзину:', result);
    } catch (error) {
      console.error('Ошибка при добавлении в корзину:', error);
    }
  };

  const handleImageClick = () => {
    setShowCardFood(true);
  };

  const handleCloseCardFood = () => {
    setShowCardFood(false);
  };

  return (
    <div className={s.container}>
      {showCardFood && (
        <div className={s.overlay} onClick={handleCloseCardFood}>
          <div className={s.cardFoodWrapper}>
            <CardFood
              title={title}
              extra={extra}
              weight={weight}
              calories={calories}
              description="Описание вашего блюда"
              img={img}
            />
          </div>
        </div>
      )}
      <div className={s.cardfood__info}>
        <div className={s.cardfood__labels}>
          {tags.length > 0 ? (
            tags.map((tagId, index) => {
              const tagName = getTagNameById(tagId);
              const iconSrc = icons[theme][tagName];
              return (
                iconSrc && (
                  <img
                    key={index}
                    src={iconSrc}
                    alt={tagName}
                    className={s.icon}
                  />
                )
              );
            })
          ) : (
            <div className={s.invisibleBlock}></div>
          )}
        </div>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <ButtonWithTheme
          colorScheme={1}
          title={price}
          size={3}
          showRubleSign={true}
          onClick={handleAddToCart} // Добавление обработчика клика
        />
      </div>
      <div className={s.cardfood__Img} style={{ display: 'flex' }}>
        <img
          className={s.cardfood__plateImg}
          src={img}
          alt="фото тарелки"
          onClick={handleImageClick} // Добавление обработчика клика
        />
      </div>
    </div>
  );
};
