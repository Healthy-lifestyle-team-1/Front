import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function Button({ width, title, onClick, colorScheme, ...props }) {
  return (
    <button
      className={cn(s.button, {
        [s.colorScheme__1]: colorScheme === 1,
        [s.colorScheme__2]: colorScheme === 2,
      })}
      onClick={onClick}
      style={{ width }}
      {...props}
    >
      {title}
    </button>
  );
}
