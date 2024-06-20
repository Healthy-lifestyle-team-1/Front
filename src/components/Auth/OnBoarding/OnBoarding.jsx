import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import x from '../../../assets/images/icons/light/X.svg';
import s from './styles.module.scss';

import plate1 from '../../../assets/images/OnBoarding/plate1.png'
import plate2 from '../../../assets/images/OnBoarding/plate2.png'
import book from '../../../assets/images/OnBoarding/book.png'

const Dots = ({ activeStep, onDotClick }) => {
  return (
    <div className={s.dotsContainer}>
      {[1, 2, 3, 4].map((step) => (
        <span
          key={step}
          className={`${s.dot} ${activeStep === step ? s.activeDot : ''}`}
          onClick={() => onDotClick(step)}
        ></span>
      ))}
    </div>
  );
};

export const OnBoarding = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1 - balanced method, 2 - build your plate, 3 - nutrition ideology, 4 - exclude from plates

  const handleNext = () => {
    setStep((prevStep) => Math.min(prevStep + 1, 4)); // Ensure the step does not go beyond 4
  };

  const handleDotClick = (step) => {
    setStep(step);
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const getContent = () => {
    switch (step) {
      case 1:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>МЕТОД<br/>СБАЛАНСИРОВАННОЙ<br/></span>
              <span className={s.onBoarding__titleWhite}>ТАРЕЛКИ</span>
            </div>
            <div className={s.onBoarding__img}>
              <img src={plate1} alt={'Тарелка'} />
            </div>
            <div className={s.onBoarding__text}>
              Тарелки собираются с расчётом необходимых калорий, белков, жиров,
              углеводов, а также микроэлементов
            </div>
            <Dots activeStep={step} onDotClick={handleDotClick} />
            <div className={s.onBoarding__button}>
              <Button
                title="ПРОДОЛЖИТЬ"
                onClick={handleNext}
                colorScheme={1}
                size={11}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>СОБЕРИ СВОЮ </span>
              <span>ЗДОРОВУЮ ТАРЕЛКУ</span>
            </div>
            <div className={s.onBoarding__img}>
              <img src={plate2} alt={'Конструктор'} />
            </div>
            <div className={s.onBoarding__text}>
              Собери тарелку из двух половинок с любимыми ингредиентами на свой
              вкус, и можно исключить свои аллергены с помощью тегов
            </div>
            <Dots activeStep={step} onDotClick={handleDotClick} />
            <div className={s.onBoarding__button}>
              <Button
                title="ПРОДОЛЖИТЬ"
                onClick={handleNext}
                colorScheme={1}
                size={11}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>ИДЕОЛОГИЯ<br/></span>
              <span><span className={s.onBoarding__titleWhite}>ЗДОРОВОГО</span> ПИТАНИЯ</span>
            </div>
            <div className={s.onBoarding__img}>
              <img src={book} alt={'Книга рецептов'} />
            </div>
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <Dots activeStep={step} onDotClick={handleDotClick} />
            <div className={s.onBoarding__button}>
              <Button
                title="ПРОДОЛЖИТЬ"
                onClick={handleNext}
                colorScheme={1}
                size={11}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>ЧТО НАМ <span className={s.onBoarding__titlePink}>ИСКЛЮЧИТЬ</span><br/></span>
              <span>ИЗ ТАРЕЛОК?</span>
            </div>
            {/* <div className={s.onBoarding__img}>
              <img src={Frame4} alt={'Выбор аллергенов'} />
            </div> */}
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <Dots activeStep={step} onDotClick={handleDotClick} />
            <div className={s.onBoarding__button}>
              <Button
                title="В КАТАЛОГ"
                onClick={handleNext}
                colorScheme={1}
                size={11}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={`${s.modal__content} ${s[`modal__content${step}`]}`}>
        <button className={s.closeButton} onClick={onClose}>
          закрыть
        </button>
        {getContent()}
      </div>
    </div>
  );
};
