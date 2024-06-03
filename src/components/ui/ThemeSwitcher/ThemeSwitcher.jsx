import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';

export function ThemeSwitcher({ width}) {
  return (
    <div className={s.switcherContainer} style={{ width }}>
      <label className={s.switcher}>
        <input type="checkbox" className={s.switcher__input} />
        <span className={s.switcher__slider}></span>
      </label>
    </div>
  );
}
