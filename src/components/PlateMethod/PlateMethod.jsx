import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ForkAndKnife from '../../assets/images/plate-with-fork-and-knife.png';
import MaksimKImg from '../../assets/images/MaksimKuderov.png';
import LidaLImg from '../../assets/images/LidaLanskaya.png';
import DottedLine from '../../assets/images/dotted-line-plate-method.png';
import { Button } from '../ui/Button';
import BgImg2 from '../../assets/images/PlateMethod/перец-и-петрушка.png';
import BgImg3 from '../../assets/images/PlateMethod/чили.png';
import BgImg4 from '../../assets/images/PlateMethod/базилик.png';
import BgImg5 from '../../assets/images/PlateMethod/салатный-лист.png';
import BgImg7 from '../../assets/images/PlateMethod/перец.png';
import BookImg from '../../assets/images/PlateMethod/composition-plate-method.png';
import BookImgDark from '../../assets/images/PlateMethod/composition-plate-method-dark.png';

import s from './styles.module.scss';
import cn from 'classnames';

export const PlateMethod = () => {
  const isAuthorize = useSelector(state => state.auth.isAuthorize);
  const theme = useSelector(state => state.theme);
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleNavigateToBook = () => {
    navigate('/book');
  };

  return (
    <div className={s.plateMethod__container}>
      <img className={s.plateMethod__container__bgImg2} src={BgImg2} alt="" />
      <img className={s.plateMethod__container__bgImg3} src={BgImg3} alt="" />
      <img className={s.plateMethod__container__bgImg4} src={BgImg4} alt="" />
      <img className={s.plateMethod__container__bgImg5} src={BgImg5} alt="" />
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
            title={isHovered ? 'В книгу' : 'Перейти'}
            onClick={handleNavigateToBook}
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

      <div className={s.plateMethod__bookBlock}>
        <div className={s.plateMethod__bookBlockImgs}>
          <img
            className={s.plateMethod__bookBlockImg}
            src={theme === 'dark' ? BookImgDark : BookImg}
            alt="Книга"
          />
        </div>
      </div>
    </div>
  );
};
