import React from 'react';
import ForkAndKnife from '../../assets/images/plate-with-fork-and-knife.png';
import MaksimKImg from '../../assets/images/MaksimKuderov.png';
import LidaLImg from '../../assets/images/LidaLanskaya.png';
import DottedLine from '../../assets/images/dotted-line-plate-method.png';
import BookImg from '../../assets/images/method-plate-book.png';
import { Button } from '../ui/Button';

import s from './styles.module.scss';
import cn from 'classnames';

export const PlateMethod = () => {
  return (
    <div className={s.plateMethod__container}>
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
        <div className={s.plateMethod__methodBlock__autors}>
          <div className={s.plateMethod__methodBlock__autor}>
            <img
              className={s.plateMethod__methodBlock__autorImg}
              src={MaksimKImg}
              alt="Фото Автора"
            />
            <div className={s.plateMethod__methodBlock__autorName}>
              Максим Кудеров
            </div>
            <div className={s.plateMethod__methodBlock__autorDescription}>
              Нутрициолог и фитнес-тренер (FPA), основатель проекта Зожник
            </div>
          </div>
          <img
            className={s.plateMethod__methodBlock__autorsDottedLineImg}
            src={DottedLine}
            alt=""
          />
          <div className={s.plateMethod__methodBlock__autor}>
            <img
              className={s.plateMethod__methodBlock__autorImg}
              src={LidaLImg}
              alt="Фото Автора"
            />
            <div className={s.plateMethod__methodBlock__autorName}>
              Лида Ланская
            </div>
            <div className={s.plateMethod__methodBlock__autorDescription}>
              Главный редактор ЗОЖ-инстаграма @zozhnik_ru
            </div>
          </div>
        </div>
        <div className={s.plateMethod__methodBlock__btn}>
          <Button
            title="Перейти"
            onClick={() => console.log('Button clicked')}
            colorScheme={1}
            size={1}
          />
        </div>
      </div>

      <div className={s.plateMethod__bookBlock}>
        <div className={s.plateMethod__bookBlockImgs}>
          <img
            className={s.plateMethod__bookBlockImg}
            src={BookImg}
            alt="Книга"
          />
        </div>
      </div>
    </div>
  );
};
