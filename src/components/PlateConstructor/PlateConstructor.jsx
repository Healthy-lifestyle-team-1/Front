import React from 'react';

import { Button } from '../ui/Button/Button';
// import { SliderPlates } from '../ui/Sliders/SliderPlates';
<<<<<<< HEAD
import { SliderLeftPart } from '../ui/Sliders/SliderPlateLeftPart';
import { SliderRightPart } from '../ui/Sliders/SliderPlateRightPart';
=======
import { VerticalMode } from '../ui/Sliders/SliderPlates';
>>>>>>> aa55477521acea4b727489a2a07cea8d6129c4c4

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
<<<<<<< HEAD
            <Button key={index} variant='gray' isTag title={tag} />
=======
            <Button key={index} variant="gray" isTag title={tag} />
>>>>>>> aa55477521acea4b727489a2a07cea8d6129c4c4
          ))}
        </div>
        <div className={s.plateConstructor__constructorBlock}>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
<<<<<<< HEAD
              s['plateConstructor__plateHalf--first']
            )}
          >
            {/* Первый блок с половинкой тарелки */}
				<SliderLeftPart />
=======
              s["plateConstructor__plateHalf--first"]
            )}
          >
            {/* Первый блок с половинкой тарелки */}
				<VerticalMode />
>>>>>>> aa55477521acea4b727489a2a07cea8d6129c4c4
            <div className={s.plateConstructor__constructorBlock}></div>
          </div>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
<<<<<<< HEAD
              s['plateConstructor__plateHalf--second']
            )}
          >
            {/* Второй блок с половинкой тарелки */}
				<SliderRightPart />
				
=======
              s["plateConstructor__plateHalf--second"]
            )}
          >
            {/* Второй блок с половинкой тарелки */}
>>>>>>> aa55477521acea4b727489a2a07cea8d6129c4c4
          </div>
        </div>
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          className={s.button}
<<<<<<< HEAD
          width='280px'
          title='Собрать тарелку'
          onClick={() => console.log('Button clicked')}
=======
          width="280px"
          title="Собрать тарелку"
          onClick={() => console.log("Button clicked")}
>>>>>>> aa55477521acea4b727489a2a07cea8d6129c4c4
        >
          Собрать тарелку
        </Button>
      </div>
    </div>
  );
}
