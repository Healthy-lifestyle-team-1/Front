import React from 'react';
import { useSelector } from 'react-redux';
import ForkAndKnife from '../../assets/images/plate-with-fork-and-knife.png';
import MaksimKImg from '../../assets/images/MaksimKuderov.png';
import LidaLImg from '../../assets/images/LidaLanskaya.png';
import DottedLine from '../../assets/images/dotted-line-plate-method.png';
import BookImg from '../../assets/images/method-plate-book.png';
import { Button } from '../ui/Button';
import BgImg2 from '../../assets/images/PlateMethod/перец-и-петрушка.png';
import BgImg7 from '../../assets/images/PlateMethod/перец.png';
import Ellipse from '../../assets/images/элипс-метод-тарелки-страница.png'
import DottedLineDark from '../../assets/images/dotted-line-plate-method-dark.png';

import s from './styles.module.scss';
import cn from 'classnames';

export const PlateMethodBookPage = () => {
	const isAuthorize = useSelector(state => state.auth.isAuthorize);
	const theme = useSelector(state => state.theme);
	
  return (
    <div className={s.plateMethod__container}>
		<img className={s.plateMethod__container__bgImg2} src={BgImg2} alt="" />
		<img className={s.plateMethod__container__bgImg7} src={BgImg7} alt="" />


      <div className={s.plateMethod__methodBlock}>
        <div className={s.plateMethod__methodBlock__title}>
          мет
          <img
            className={s.plateMethod__methodBlock__titleImg}
            src={ForkAndKnife}
            alt="о"
          />
          д
          <div
            className={`${s.plateMethod__methodBlock__title} ${s['plateMethod__methodBlock__title--salmon']}`}
          >
            {' '}
            тарелки
          </div>
        </div>

		  <div className={s.plateMethod__methodBlock__titleTwo}>
		  Идеология здорового питания
		  по науке
		  </div>

		  <div className={s.plateMethod__methodBlock__text}>
		  электронная книга
		  для смартфонов
		  </div>
       
        <div className={s.plateMethod__methodBlock__btn}>
          <Button
            title="Купить книгу"
            onClick={() => console.log('Button clicked')}
            colorScheme={1}
            size={12}
          />
        </div>
      </div>

<div className={cn(s.plateMethod__methodBlock__autors, { [s.dark]: theme === 'dark', [s.light]: theme !== 'dark' })}>
          <div className={s.plateMethod__methodBlock__autorOne}>
            <img
              className={s.plateMethod__methodBlock__autorTwoImg}
              src={MaksimKImg}
              alt="Фото Автора"
            />
            <div className={s.plateMethod__methodBlock__autorTwoName}>
              Максим Кудеров
            </div>
            <div className={s.plateMethod__methodBlock__autorTwoDescription}>
              Нутрициолог и фитнес-тренер (FPA), основатель проекта Зожник
            </div>
          </div>
          <img
            className={s.plateMethod__methodBlock__autorsDottedLineImg}
				src={theme === 'dark' ? DottedLineDark : DottedLine}
            alt=""
          />
          <div className={s.plateMethod__methodBlock__autorTwo}>
			 <div className={s.plateMethod__methodBlock__autorTwoName}>
              Лида Ланская
            </div>
			 <div className={s.plateMethod__methodBlock__autorTwoDescription}>
              Главный редактор ЗОЖ-инстаграма @zozhnik_ru
            </div>
            <img
              className={s.plateMethod__methodBlock__autorTwoImg}
              src={LidaLImg}
              alt="Фото Автора"
            />
          </div>
        </div>
    </div>
  );
};
