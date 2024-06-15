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
          <div className={s.content}>
            <h2>МЕТОД СБАЛАНСИРОВАННОЙ ТАРЕЛКИ</h2>
            <p>
              Тарелки собираются с расчётом необходимых калорий, белков, жиров,
              углеводов, а также микроэлементов
            </p>
            <Button title="ПРОДОЛЖИТЬ" onClick={handleNext} />
          </div>
        );
      case 2:
        return (
          <div className={s.content}>
            <h2>СОБЕРИ СВОЮ ЗДОРОВУЮ ТАРЕЛКУ</h2>
            <p>
              Собери тарелку из двух половинок с любимыми ингредиентами на свой
              вкус, и можно исключить свои аллергены с помощью тегов
            </p>
            <Button title="ПРОДОЛЖИТЬ" onClick={handleNext} />
          </div>
        );
      case 3:
        return (
          <div className={s.content}>
            <h2>ИДЕОЛОГИЯ ЗДОРОВОГО ПИТАНИЯ</h2>
            <p>
              Современные рекомендации по правильному сбалансированному питанию
              на научной основе
            </p>
            <Button title="ПРОДОЛЖИТЬ" onClick={handleNext} />
          </div>
        );
      case 4:
        return (
          <div className={s.content}>
            <h2>ЧТО НАМ ИСКЛЮЧИТЬ ИЗ ТАРЕЛОК?</h2>
            <Button title="В КАТАЛОГ" onClick={onClose} />
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
