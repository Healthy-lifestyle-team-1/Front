import React from 'react';
import PropTypes from 'prop-types';
import s from './styles.module.scss';

export const Checkbox = ({
  checkTitle,
  shape = 'square',
  checked = false,
  disabled = false,
  onChange,
  link,
}) => {
  const getShapeClass = () => {
    switch (shape) {
      case 'circle':
        return s.circle;
      case 'square':
      default:
        return s.square;
    }
  };

  return (
    <div
      className={`${s.checkbox__container} ${disabled ? s.disabled : ''}`}
      onClick={() => !disabled && onChange(!checked)}
    >
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
        className={s.checkbox}
      />
      <span
        className={`${s.checkbox__checkmark} ${checked ? s.checked : ''} ${getShapeClass()}`}
      >
        {checked && (
          <span className={shape === 'circle' ? s.dot : s.check}></span>
        )}
      </span>
      <label className={s.checkbox__label}>
        {link ? <a href={link}>{checkTitle}</a> : checkTitle}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  shape: PropTypes.oneOf(['circle', 'square']),
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  link: PropTypes.string,
};
