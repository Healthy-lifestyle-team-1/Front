import React, { useState, useEffect } from "react";
import s from './styles.module.scss';
import compositionOne from '../../../../assets/images/composition1.png';
import compositionTwo from '../../../../assets/images/composition2.png';
import compositionThree from '../../../../assets/images/composition3.png';
import { Button } from "../../Button";
import Test from '../../test/test';

const slides = [
  {
    imgSrc: compositionOne,
    title: "Конструктор сбалансированной тарелки",
    text: "Собери свою тарелку сам, с расчетом необходимых калорий, белков, жиров, углеводов, а так же микроэлементов. Можно вручную исключить нелюбимый продукт",
    btnTitle: "Перейти",
  },
  {
    imgSrc: compositionTwo,
    title: "Уникальная электронная книга",
    text: "Книга «Метод Тарелки» — о том как составить свою личную тарелку здорового питания. Система питания для тех, кто хочет чувствовать себя лучше и удерживать здоровый вес без подсчетов калорий",
    btnTitle: "Перейти",
  },
  {
    imgSrc: compositionThree,
    title: "Продуманное здоровое меню",
    text: "Мы предлагаем готовые блюда, которые помогут поддержать ваше здоровье и обеспечить организм всем необходимым для правильного питания",
    btnTitle: "Перейти",
  }
];

export const ContentSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const titleElement = document.getElementById('title');
    if (titleElement) {
      const titleText = slides[activeIndex].title;
      const lastSpaceIndex = titleText.lastIndexOf(' ');

      if (lastSpaceIndex !== -1) {
        const lastWord = titleText.slice(lastSpaceIndex + 1);
        const newTitle = titleText.slice(0, lastSpaceIndex) + ` <span class="${s.highlight}">${lastWord}</span>`;
        titleElement.innerHTML = newTitle;
      }
    }
  }, [activeIndex]);

  const { imgSrc, title, text, btnTitle } = slides[activeIndex];

  return (
    <div className={s.contentSlider__container}>
      <div className={s.contentSlider__blockImg}><img className={s.contentSlider__img} src={imgSrc} alt="Фото тарелки" /></div>
      <div className={s.contentSlider__blockBtns}>
        <Test onButtonClick={handleButtonClick} activeIndex={activeIndex} />
      </div>
      <div className={s.contentSlider__blockDescription}>
        <div className={s.contentSlider__blockDescription__title} id="title">
          {title}
        </div>
        <div className={s.contentSlider__blockDescription__text}>
          {text}
        </div>
        <div className={s.contentSlider__blockDescription__btn}>
          <Button
            title={btnTitle}
            onClick={() => console.log('Button clicked')}
            colorScheme={1}
            size={1}
          />
        </div>
      </div>
    </div>
  );
};
