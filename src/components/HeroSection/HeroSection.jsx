import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import cn from 'classnames';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Animation from '../../assets/images/animationMain12801.gif';
import greeting_wave from '../../assets/images/greeting-wave.png';
import greeting_wave_dark from '../../assets/images/greeting-wave-dark.png';

export const HeroSection = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const theme = useSelector(state => state.theme);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigateToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div
      className={cn(s.heroSection__container, {
        [s.dark]: theme === 'dark',
        [s.light]: theme !== 'dark',
      })}
    >
      <div className={s.heroSection__back}>
        <img
          src={theme === 'dark' ? greeting_wave_dark : greeting_wave}
          alt={''}
          style={{ width: '100vw' }}
        />
      </div>
      <div className={s.heroSection__block}>
        <div className={s.heroSection__infoBlock}>
          <div className={s.heroSection__title}>
            Твоя жизнь, <br /> твоя{' '}
            <span className={s.heroSection__title__pink}>тарелка!</span>
          </div>
          <div className={s.heroSection__text}>
            Современные рекомендации <br /> по правильному, сбалансированному{' '}
            <br />
            питанию на научной основе,
            <br /> по принципу Гарвардской тарелки
          </div>
          <div className={s.heroSection__btn}>
            <Button
              title={isHovered ? 'В каталог' : 'Перейти'}
              onClick={handleNavigateToCatalog}
              colorScheme={1}
              size={12}
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            />
          </div>
        </div>
        <div className={s.heroSection__animationBlock}>
          <img
            className={s.heroSection__animationImg}
            src={Animation}
            alt="Иллюстрация"
          />
        </div>
      </div>
    </div>
  );
};
