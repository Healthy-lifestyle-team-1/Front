import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './styles.module.scss';
import compositionOne from '../../../../assets/images/composition1.png';
import compositionTwo from '../../../../assets/images/composition2.png';
import compositionThree from '../../../../assets/images/composition3.png';
import compositionOneDark from '../../../../assets/images/composition1-dark.png';
import compositionTwoDark from '../../../../assets/images/composition2-dark.png';
import compositionThreeDark from '../../../../assets/images/composition3-dark.png';
import { Button } from '../../Button';
import Test from '../../test/test';

const slides = [
  {
    imgSrc: compositionOne,
    imgSrcDark: compositionOneDark,
    title1: 'Конструктор',
    title2: 'сбалансированной',
    title3: 'тарелки',
    text: 'Собери свою тарелку сам, с расчетом необходимых калорий, белков, жиров, углеводов, а так же микроэлементов. Можно вручную исключить нелюбимый продукт',
    btnTitle: 'Перейти',
  },
  {
    imgSrc: compositionTwo,
    imgSrcDark: compositionTwoDark,
    title1: 'Уникальная',
    title2: 'электронная',
    title3: 'книга',
    text: 'Книга «Метод Тарелки» — о том как составить свою личную тарелку здорового питания. Книга содержит сотни иллюстраций и более 120 рецептов',
    btnTitle: 'Перейти',
  },
  {
    imgSrc: compositionThree,
    imgSrcDark: compositionThreeDark,
    title1: 'Продуманное',
    title2: 'здоровое',
    title3: 'меню',
    text: 'Мы предлагаем готовые блюда, которые помогут поддержать ваше здоровье и обеспечить организм всем необходимым для правильного питания',
    btnTitle: 'Перейти',
  },
];

export const ContentSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [buttonColor, setButtonColor] = useState('var(--yellow)'); // Начальный цвет кнопки
  const navigate = useNavigate();
  const theme = useSelector(state => state.theme);

  const handleButtonClick = index => {
    setActiveIndex(index);
  };

  const handleColorChange = color => {
    setButtonColor(color);
  };

  const handleNavigate = () => {
    let path = '';
    switch (buttonColor) {
      case 'var(--yellow)':
        path = '/constructor';
        break;
      case 'var(--blue)':
        path = '/catalog';
        break;
      case 'var(--peach)':
        path = '/book';
        break;
      default:
        path = '/';
        break;
    }
    navigate(path);
  };

  const { imgSrc, imgSrcDark, title1, title2, title3, text, btnTitle } =
    slides[activeIndex];
  const currentImgSrc = theme === 'dark' ? imgSrcDark : imgSrc;

  return (
    <div className={s.contentSlider__container}>
      <div className={s.contentSlider__blockImgAndBtns}>
        <div className={s.contentSlider__blockImg}>
          <img
            className={s.contentSlider__img}
            src={currentImgSrc}
            alt="Фото тарелки"
          />
        </div>
        <div className={s.contentSlider__blockBtns}>
          <Test
            onButtonClick={handleButtonClick}
            activeIndex={activeIndex}
            onColorChange={handleColorChange}
          />
        </div>
      </div>
      <div className={s.contentSlider__blockDescription}>
        <div className={s.contentSlider__blockDescription__title}>
          <div id="title1">{title1}</div>
          <div id="title2">{title2}</div>
          <div id="title3" style={{ color: 'var(--peach)' }}>
            {title3}
          </div>
        </div>
        <div className={s.contentSlider__blockDescription__text}>{text}</div>
        <div className={s.contentSlider__blockDescription__btn}>
          <Button
            title={btnTitle}
            onClick={handleNavigate}
            colorScheme={1}
            size={12}
            style={{ backgroundColor: buttonColor }}
          />
        </div>
      </div>
    </div>
  );
};
