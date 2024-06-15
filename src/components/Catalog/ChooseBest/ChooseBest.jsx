import React from 'react';
import s from './styles.module.scss';
import plate from '../../../assets/images/plates/choose-best.png';
import platesAnimation from '../../../assets/images/animation.gif'
import { ButtonWithTheme } from '../../ui/Button/ButtonWithTheme';

export const ChooseBest = () => {
  return (
    <div className={s.container}>
		<div className={s.choosebest__InfoBlock}>
      <div className={s.choosebest__Text}>
        <div className={s.choosebest__TextTitles}>
          <p>
            выбери <span className={s.choosebest__TextTitlesPink}>лучшее</span>{' '}
            сам!
          </p>
        </div>
        <p className={s.choosebest__TextParagraph}>
          Мы предлагаем уникальную возможность создать свою тарелку
        </p>
        <ButtonWithTheme colorScheme={1} title={'В КОНСТРУКТОР'} size={1} />
      </div>
		</div>
      <div className={s.choosebest__Img}>
        <img className={s.choosebest__ImgImg} src={platesAnimation} alt="фото тарелки" />
      </div>
    </div>
  );
};
