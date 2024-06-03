import React from 'react';

import { Button } from '../ui/Button/Button';
// import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { SliderLeftPart } from '../ui/Sliders/SliderPlateLeftPart';
import { SliderRightPart } from '../ui/Sliders/SliderPlateRightPart';

import cn from 'classnames';
import s from './styles.module.scss';


export const PlateConstructor = () => {
  const tags = ['глютен', 'сахар', 'мучное', 'лук', 'морковь', 'ещё'];

  return (
    <div className={s.container}>
      <div className={s.plateConstructor}>
        <div className={s.plateConstructor__header}>
          <div className={s.plateConstructor__title}>Конструктор</div>
          <div className={s.plateConstructor__description}>
            Собери свою персональную тарелку
          </div>
        </div>
        <div className={s.plateConstructor__tagBtns}>
          {/* кнопки-теги */}
          {tags.map((tag, index) => (
            <Button key={index} variant='gray' isTag title={tag} />
          ))}
        </div>
        <div className={s.plateConstructor__constructorBlock}>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
              s['plateConstructor__plateHalf--first']
            )}
          >
            {/* Первый блок с половинкой тарелки */}
				<SliderLeftPart />
            <div className={s.plateConstructor__constructorBlock}></div>
          </div>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
              s['plateConstructor__plateHalf--second']
            )}
          >
            {/* Второй блок с половинкой тарелки */}
				<SliderRightPart />
				
          </div>
        </div>
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          className={s.button}
          width='280px'
          title='Собрать тарелку'
          onClick={() => console.log('Button clicked')}
        >
          Собрать тарелку
        </Button>
      </div>
    </div>
  );
}
