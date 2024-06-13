import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function Button({
  title,
  onClick,
  colorScheme,
  isActive,
  disabled,
  size,
  ...props
}) {
  return (
    <button
      className={cn(s.button, {
        [s[`colorScheme__${colorScheme}`]]: colorScheme,
        [s.active]: isActive,
        [s[`size__${size}`]]: size,
      })}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {title}
    </button>
  );
}
