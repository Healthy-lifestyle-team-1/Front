import React, { useState } from "react";
import s from './styles.module.scss';
import PlateOne from '../../assets/images/говядинка.png';
import PlateTwo from '../../assets/images/гаспачо.png';
import PlateThree from '../../assets/images/лосось.png';
import BestChoice from '../../assets/images/лучший.выбор.png';


import { Button } from '../ui/Button';

export const DailyRation = () => {
  const [buttonText, setButtonText] = useState('1300 ₽');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={s.dailyRation__container}>
      <div className={s.dailyRation__dishesInfo}>
        <div className={s.dailyRation__dishesInfo__title}>
          ПОДБОРКА РАЦИОНА <span className={s.dailyRation__dishesInfo__title__pink}>НА ДЕНЬ</span>
        </div>
		  <div className={s.dailyRation__dishesInfo__textBlock}>
        <div className={s.dailyRation__dishesInfo__text}>Семга с картофелем и салатом </div>
        <div className={s.dailyRation__dishesInfo__text}>Гуляш из говядины с
		  свежим салатом</div>
        <div className={s.dailyRation__dishesInfo__text}>Томатный гаспачо </div>
        </div>
		  <Button
          title={buttonText}
          onClick={() => console.log('Button clicked')}
          colorScheme={1}
          size={isHovered ? 11 : 10}
          onMouseEnter={() => {
            setButtonText('в корзину');
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setButtonText('1300 ₽');
            setIsHovered(false);
          }}
        />
      </div>
      <div className={s.dailyRation__dishesImgs}>
        <img className={s.dailyRation__dishesImgs__imgOne} src={PlateThree} alt="Фото тарелки" />
        <img className={s.dailyRation__dishesImgs__imgTwo} src={PlateTwo} alt="Фото тарелки" />
        <img className={s.dailyRation__dishesImgs__imgThree} src={PlateOne} alt="Фото тарелки" />
        <img className={s.dailyRation__dishesImgs__imgBestChoice} src={BestChoice} alt="Иконка" />
      </div>
    </div>
  );
};
