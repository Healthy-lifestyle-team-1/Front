import React, { useState } from "react";
import s from './styles.module.scss';
import plateOne from '../../../../assets/images/plates/Plate.png';
import plateTwo from '../../../../assets/images/plates/Plate2.png';
import plateThree from '../../../../assets/images/plates/Plate3.png';
import { Button } from "../../Button";
import Test from '../../test/test';

const slides = [
  {
    imgSrc: plateOne,
    title: "Конструктор сбалансированной тарелки",
    text: "Собери свою тарелку сам, с расчетом необходимых калорий, белков, жиров, углеводов, а так же микроэлементов. Можно вручную исключить нелюбимый продукт",
    btnTitle: "Перейти",
  },
  {
    imgSrc: plateTwo,
    title: "Уникальная электронная книга",
    text: "Книга «Метод Тарелки» — о том как составить свою личную тарелку здорового питания. Система питания для тех, кто хочет чувствовать себя лучше и удерживать здоровый вес без подсчетов калорий",
    btnTitle: "Перейти",
  },
  {
    imgSrc: plateThree,
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

  const { imgSrc, title, text, btnTitle } = slides[activeIndex];

  return (
    <div className={s.contentSlider__container}>
      <div className={s.contentSlider__blockImg}><img className={s.contentSlider__img} src={imgSrc} alt="Фото тарелки" /></div>
      <div className={s.contentSlider__blockBtns}>
        <Test onButtonClick={handleButtonClick} activeIndex={activeIndex} />
      </div>
      <div className={s.contentSlider__blockDescription}>
        <div className={s.contentSlider__blockDescription__title}>
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
  )
}

