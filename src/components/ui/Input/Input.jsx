import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import searchIcon from '../../../assets/images/icons/search-icon.svg';

export function Input({ width, color, placeholder }) {
  return (
    <div className={s.inputContainer} style={{ width }}>
      <input
        className={s.input}
        style={{ borderColor: color }}
        type="text"
        placeholder={placeholder}
      />
    </div>
  );
}