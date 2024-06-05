import React, { useState, useEffect, useRef } from 'react';
import s from './style.module.scss';

const DropDown = ({ colorScheme, options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = event => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`${s.dropdown} ${colorScheme === 1 ? s.colorScheme1 : s.colorScheme2}`}
    >
      <button className={s.dropdownToggle} onClick={handleToggle}>
        Выбрать
      </button>
      {isOpen && (
        <ul className={s.dropdownMenu}>
          {options.map((option, index) => (
            <li key={index}>{option}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;

// const options = ['Что-то', 'Еще что-то', 'Супер что-то']; скопировать и поменять значения в требуемый компонент
