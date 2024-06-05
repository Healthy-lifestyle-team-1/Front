import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function Button({
  width,
  title,
  onClick,
  colorScheme,
  isActive,
  ...props
}) {
  return (
    <button
      className={cn(s.button, {
        [s[`colorScheme__${colorScheme}`]]: colorScheme,
        [s.active]: isActive,
      })}
      onClick={onClick}
      style={{ width }}
      {...props}
    >
      {title}
    </button>
  );
}
