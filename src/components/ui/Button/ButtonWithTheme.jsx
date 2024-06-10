import React, { useState } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function ButtonWithTheme({
  title,
  onClick,
  colorScheme,
  isActive,
  size,
  withCounter,
  ...props
}) {
  const [counterValue, setCounterValue] = useState(1); // Начальное значение установлено в 1

  const increment = () => setCounterValue(counterValue + 1);
  const decrement = () =>
    setCounterValue(counterValue > 1 ? counterValue - 1 : 1);

  return (
    <div
      className={cn(s.button, {
        [s[`colorScheme__${colorScheme}`]]: colorScheme,
        [s.active]: isActive,
        [s[`size__${size}`]]: size,
      })}
      onClick={onClick}
      {...props}
    >
      {withCounter === true ? (
        <div className={s.counter}>
          <button
            className={s.counter__btn}
            onClick={e => {
              e.stopPropagation();
              decrement();
            }}
          >
            -
          </button>
          <span className={s.counter__value}>{counterValue}</span>
          <button
            className={s.counter__btn}
            onClick={e => {
              e.stopPropagation();
              increment();
            }}
          >
            +
          </button>
        </div>
      ) : (
        title
      )}
    </div>
  );
}
