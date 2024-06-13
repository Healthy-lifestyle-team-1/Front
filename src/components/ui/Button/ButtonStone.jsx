import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function ButtonStone({
  title,
  onClick,
  backgroundColor,
  isActive,
  ...props
}) {
  return (
    <button
      className={cn(s.button, {
        [s[backgroundColor]]: backgroundColor,
        [s.active]: isActive,
      })}
      onClick={onClick}
      {...props}
    >
      {title}
    </button>
  );
}
