import React from 'react';
import { Button } from '../ui/Button/Button';
import ForkAndKnife from '../../assets/images/plate-with-fork-and-knife.png';
import MaksimKImg from '../../assets/images/MaksimKuderov.png'
import LidaLImg from '../../assets/images/LidaLanskaya.png'
import DottedLine from '../../assets/images/dotted-line-plate-method.png'

import cn from 'classnames';
import s from './styles.module.scss';

export const PlateMethod = () => {
  return (
    <div className={s.container}>
      <div className={s.plateMethodMethod}>
        <div className={s.plateMethodTitle}>
          мет
          <img className={s.plateMethodTitleImg} src={ForkAndKnife} alt="о" />д
          тарелки
        </div>
        <div className={s.plateMethodAutors}>
          <div className={s.plateMethodAutor}>
            <img className={s.plateMethodAutorImg} src={MaksimKImg} alt="Фото Автора" />
            <div className={s.plateMethodAutorName}>Максим Кудеров</div>
            <div className={s.plateMethodAutorDescription}>
              Нутрициолог и фитнес-тренер (FPA), основатель проекта Зожник
            </div>
          </div>
			 <img className={s.plateMethodAutorDottedLineImg} src={DottedLine} alt="" />
          <div className={s.plateMethodAutor}>
            <img className={s.plateMethodAutorImg} src={LidaLImg} alt="Фото Автора" />
            <div className={s.plateMethodAutorName}>Лида Ланская</div>
            <div className={s.plateMethodAutorDescription}>
              Главный редактор ЗОЖ-инстаграма @zozhnik_ru
            </div>
          </div>
        </div>
        <button></button>
      </div>

      <div className={s.plateMethodBook}>

		</div>
    </div>
  );
};
