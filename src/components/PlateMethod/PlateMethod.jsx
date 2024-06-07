import React from 'react';
import { Button } from '../ui/Button/Button';
import ForkAndKnife from '../../assets/images/plate-with-fork-and-knife.png';
import MaksimKImg from '../../assets/images/MaksimKuderov.png'
import LidaLImg from '../../assets/images/LidaLanskaya.png'
import DottedLine from '../../assets/images/dotted-line-plate-method.png'
import BookImg from '../../assets/images/method-plate-book.png'
import EllipseSalmon from '../../assets/images/Ellipse-salmon.png'

import cn from 'classnames';
import s from './styles.module.scss';

export const PlateMethod = () => {
  return (
    <div className={s.plateMethod__container}>
      <div className={s.plateMethod__method}>
        <div className={s.plateMethod__title}>
          мет
          <img className={s.plateMethod__titleImg} src={ForkAndKnife} alt="о" />д
          тарелки
        </div>
        <div className={s.plateMethod__autors}>
          <div className={s.plateMethod__autor}>
            <img className={s.plateMethod__autorImg} src={MaksimKImg} alt="Фото Автора" />
            <div className={s.plateMethod__autorName}>Максим Кудеров</div>
            <div className={s.plateMethod__autorDescription}>
              Нутрициолог и фитнес-тренер (FPA), основатель проекта Зожник
            </div>
          </div>
			 <img className={s.plateMethod__autorsDottedLineImg} src={DottedLine} alt="" />
          <div className={s.plateMethod__autor}>
            <img className={s.plateMethod__autorImg} src={LidaLImg} alt="Фото Автора" />
            <div className={s.plateMethod__autorName}>Лида Ланская</div>
            <div className={s.plateMethod__autorDescription}>
              Главный редактор ЗОЖ-инстаграма @zozhnik_ru
            </div>
          </div>
        </div>
        <button></button>
      </div>

      <div className={s.plateMethod__book}>
			<div className={s.plateMethod__bookBlock}><img className={s.plateMethod__bookImg} src={BookImg} alt="Фото книги" /></div>
		
		</div>
    </div>
  );
};
