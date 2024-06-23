import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import x from '../../../assets/images/icons/light/X.svg';
import s from './styles.module.scss';

import plate1 from '../../../assets/images/OnBoarding/plate1.png';
import plate2 from '../../../assets/images/OnBoarding/plate2.png';
import book from '../../../assets/images/OnBoarding/book.png';

import grains_1 from '../../../assets/images/OnBoarding/icons/1-grains.svg';
import legumes_2 from '../../../assets/images/OnBoarding/icons/2-legumes.svg';
import nuts_3 from '../../../assets/images/OnBoarding/icons/3-nuts.svg';
import dairy_4 from '../../../assets/images/OnBoarding/icons/4-dairy.svg';
import sugar_5 from '../../../assets/images/OnBoarding/icons/5-sugar.svg';
import mushroom_6 from '../../../assets/images/OnBoarding/icons/6-mushroom.svg';
import seafood_7 from '../../../assets/images/OnBoarding/icons/7-seafood.svg';
import fish_8 from '../../../assets/images/OnBoarding/icons/8-fish.svg';
import meat_9 from '../../../assets/images/OnBoarding/icons/9-meat.svg';

const Dots = ({ activeStep, onDotClick }) => {
  return (
    <div className={s.dotsContainer}>
      {[1, 2, 3, 4].map(step => (
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
    setStep(prevStep => Math.min(prevStep + 1, 4)); // Ensure the step does not go beyond 4
  };

  const handleDotClick = step => {
    setStep(step);
  };

  const handleOverlayClick = event => {
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
              <span>
                МЕТОД
                <br />
                СБАЛАНСИРОВАННОЙ
                <br />
              </span>
              <span className={s.onBoarding__titleWhite}>ТАРЕЛКИ</span>
            </div>
            <div className={s.onBoarding__img}>
              <img src={plate1} alt={'Тарелка'} />
            </div>
            <div className={s.onBoarding__text}>
              Тарелки собираются с расчётом необходимых калорий, белков, жиров,
              углеводов, а также микроэлементов
            </div>
            <div className={s.onBoarding__clickable}>
              <Dots
                className={s.onBoarding__cickableDots}
                activeStep={step}
                onDotClick={handleDotClick}
              />
              <div className={s.onBoarding__cickableButton}>
                <Button
                  title="ПРОДОЛЖИТЬ"
                  onClick={handleNext}
                  colorScheme={1}
                  size={11}
                />
              </div>
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
            <div className={s.onBoarding__clickable}>
              <Dots
                className={s.onBoarding__cickableDots}
                activeStep={step}
                onDotClick={handleDotClick}
              />
              <div className={s.onBoarding__cickableButton}>
                <Button
                  title="ПРОДОЛЖИТЬ"
                  onClick={handleNext}
                  colorScheme={1}
                  size={11}
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>
                ИДЕОЛОГИЯ
                <br />
              </span>
              <span>
                <span className={s.onBoarding__titleWhite}>ЗДОРОВОГО</span>{' '}
                ПИТАНИЯ
              </span>
            </div>
            <div className={s.onBoarding__img}>
              <img src={book} alt={'Книга рецептов'} />
            </div>
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <div className={s.onBoarding__clickable}>
              <Dots
                className={s.onBoarding__cickableDots}
                activeStep={step}
                onDotClick={handleDotClick}
              />
              <div className={s.onBoarding__cickableButton}>
                <Button
                  title="ПРОДОЛЖИТЬ"
                  onClick={handleNext}
                  colorScheme={1}
                  size={11}
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>
                ЧТО НАМ{' '}
                <span className={s.onBoarding__titlePink}>ИСКЛЮЧИТЬ</span>
                <br />
              </span>
              <span>ИЗ ТАРЕЛОК?</span>
            </div>
            <div className={s.onBoarding__imgTable}>
              <img
                src={grains_1}
                alt={'Зерновые'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={legumes_2}
                alt={'ЗерновыеБобовые'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={nuts_3}
                alt={'Орехи'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={dairy_4}
                alt={'Молочные продкуты'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={sugar_5}
                alt={'Сахар'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={mushroom_6}
                alt={'Грибы'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={seafood_7}
                alt={'Морепродукты'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={fish_8}
                alt={'Рыба'}
                className={s.onBoarding__imgTableItem}
              />
              <img
                src={meat_9}
                alt={'Мясо'}
                className={s.onBoarding__imgTableItem}
              />
            </div>
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <div className={s.onBoarding__clickable}>
              <Dots
                className={s.onBoarding__cickableDots}
                activeStep={step}
                onDotClick={handleDotClick}
              />
              <div className={s.onBoarding__cickableButton}>
                <Button
                  title="В КАТАЛОГ"
                  onClick={handleNext}
                  colorScheme={1}
                  size={11}
                />
              </div>
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
