import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import x from '../../../assets/images/icons/light/X.svg';
import s from './styles.module.scss';

export const OnBoarding = ({ onClose }) => {
  const [step, setStep] = useState(1); // 1 - balanced method, 2 - build your plate, 3 - nutrition ideology, 4 - exclude from plates

  const handleNext = () => {
    setStep(step + 1);
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
              <span>МЕТОД СБАЛАНСИРОВАННОЙ </span>
              <span>ТАРЕЛКИ</span>
            </div>
            {/* <div className={s.onBoarding__img}>
              <img src={Frame1} alt={'Тарелка'} />
            </div> */}
            <div className={s.onBoarding__text}>
              Тарелки собираются с расчётом необходимых калорий, белков, жиров,
              углеводов, а также микроэлементов
            </div>
            <Button
              title="ПРОДОЛЖИТЬ"
              onClick={handleNext}
              colorScheme={1}
              size={1}
            />
          </div>
        );
      case 2:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>СОБЕРИ СВОЮ </span>
              <span>ЗДОРОВУЮ ТАРЕЛКУ</span>
            </div>
            {/* <div className={s.onBoarding__img}>
              <img src={Frame2} alt={'Конструктор'} />
            </div> */}
            <div className={s.onBoarding__text}>
              Собери тарелку из двух половинок с любимыми ингредиентами на свой
              вкус, и можно исключить свои аллергены с помощью тегов
            </div>
            <Button
              title="ПРОДОЛЖИТЬ"
              onClick={handleNext}
              colorScheme={1}
              size={1}
            />
          </div>
        );
      case 3:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>ИДЕОЛОГИЯ</span>
              <span>ЗДОРОВОГО ПИТАНИЯ</span>
            </div>
            {/* <div className={s.onBoarding__img}>
              <img src={Frame3} alt={'Книга рецептов'} />
            </div> */}
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <Button
              title="ПРОДОЛЖИТЬ"
              onClick={handleNext}
              colorScheme={1}
              size={1}
            />
          </div>
        );
      case 4:
        return (
          <div className={s.onBoarding__content}>
            <div className={s.onBoarding__title}>
              <span>ЧТО НАМ ИСКЛЮЧИТЬ</span>
              <span>ИЗ ТАРЕЛОК?</span>
            </div>
            {/* <div className={s.onBoarding__img}>
              <img src={Frame4} alt={'Выбор аллергенов'} />
            </div> */}
            <div className={s.onBoarding__text}>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </div>
            <Button
              title="В КАТАЛОГ"
              onClick={handleNext}
              colorScheme={1}
              size={1}
            />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={s.modalOverlay} onClick={handleOverlayClick}>
      <div className={s.modal__content}>
        <button className={s.closeButton} onClick={onClose}>
          <img src={x} alt={'Закрыть'} />
        </button>
        {getContent()}
      </div>
    </div>
  );
};
