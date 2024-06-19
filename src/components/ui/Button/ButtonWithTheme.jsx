import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function ButtonWithTheme({
  title,
  onClick,
  colorScheme,
  isActive,
  size,
  withCounter,
  showRubleSign,
  onIncrement,
  onDecrement,
  ...props
}) {

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
            onClick={(e) => {
              e.stopPropagation();
              onDecrement();
            }}
          >
            -
          </button>
          <span className={s.counter__value}>{title}</span>
          <button
            className={s.counter__btn}
            onClick={(e) => {
              e.stopPropagation();
              onIncrement();
            }}
          >
            +
          </button>
        </div>
      ) : (
        <>
          {title}
          {showRubleSign && ' ₽'}
        </>
      )}
    </div>
  );
}
