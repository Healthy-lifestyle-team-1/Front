import React, { useState } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function Button({
  title,
  onClick,
  colorScheme,
  isActive,
  size,
  counter,
  ...props
}) {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => setCounterValue(counterValue + 1);
  const decrement = () => setCounterValue(counterValue - 1);

  return (
    <button
      className={cn(s.button, {
        [s[`colorScheme__${colorScheme}`]]: colorScheme,
        [s.active]: isActive,
        [s[`size__${size}`]]: size,
      })}
      onClick={onClick}
      {...props}
    >
      {counter === 1 ? (
        <div className={s.counter}>
          <button className={s.counterButton} onClick={decrement}>
            -
          </button>
          <span className={s.counterValue}>{counterValue}</span>
          <button className={s.counterButton} onClick={increment}>
            +
          </button>
        </div>
      ) : (
        title
      )}
    </button>
  );
}
