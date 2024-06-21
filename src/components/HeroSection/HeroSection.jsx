import React from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import cn from 'classnames';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';
import Animation from '../../assets/images/animationMain.gif';

export const HeroSection = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const theme = useSelector(state => state.theme);
  const navigate = useNavigate();

  const handleNavigateToCatalog = () => {
    navigate('/catalog');
  };

  return (
    <div className={cn(s.heroSection__container, { [s.dark]: theme === 'dark', [s.light]: theme !== 'dark' })}>
      <div className={s.heroSection__infoBlock}>
        <div className={s.heroSection__title}>
          Твоя жизнь, твоя <span className={s.heroSection__title__pink}>тарелка!</span>
        </div>
        <div className={s.heroSection__text}>
          Современные рекомендации <br /> по правильному, сбалансированному <br /> питанию на научной основе,<br /> по принципу Гарвардской тарелки
        </div>
        <div className={s.heroSection__btn}>
          <Button
            title="Перейти"
            onClick={handleNavigateToCatalog}
            colorScheme={1}
            size={12}
          />
        </div>
      </div>
      <div className={s.heroSection__animationBlock}>
        <img src={Animation} alt="Иллюстрация" />
      </div>
    </div>
  );
};
