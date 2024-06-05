import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../ui/Button/Button';
import { SliderPlates } from '../ui/Sliders/SliderPlates';
import { toggleTag } from '../../core/store/tagsSlice';

import cn from 'classnames';
import s from './styles.module.scss';

export const PlateConstructor = () => {
  const tags = ['глютен', 'сахар', 'мучное', 'лук', 'морковь', 'ещё'];
  const activeTags = useSelector(state => state.tags);
  const dispatch = useDispatch();

  const handleTagClick = index => {
    console.log('Button clicked:', tags[index]);
    dispatch(toggleTag(index));
  };

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
            <Button
              colorScheme={3}
              key={index}
              title={tag}
              isActive={activeTags.includes(index)}
              onClick={() => handleTagClick(index)}
            />
          ))}
        </div>
        <div className={s.plateConstructor__constructorBlock}>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
              s['plateConstructor__plateHalf--first'],
            )}
          >
            {/* Первый блок с половинкой тарелки */}
            <SliderPlates />
            <div className={s.plateConstructor__constructorBlock}></div>
          </div>
          <div
            className={cn(
              s.plateConstructor__plateHalf,
              s['plateConstructor__plateHalf--second'],
            )}
          >
            {/* Второй блок с половинкой тарелки */}
          </div>
        </div>
      </div>
      <div className={s.plateConstructor__btn}>
        <Button
          className={s.button}
          width="280px"
          title="Собрать тарелку"
          onClick={() => console.log('Button clicked')}
        >
          Собрать тарелку
        </Button>
      </div>
    </div>
  );
};
