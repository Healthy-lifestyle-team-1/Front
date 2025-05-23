import React, { useState, useEffect, useRef } from 'react';
import s from './style.module.scss';
import { ReviewContainer } from '../ReviewContainer';

const DropDown = ({ colorScheme, options, buttonText }) => {
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
        {buttonText}
      </button>
      {isOpen && (
        <ReviewContainer />
      )}
    </div>
  );
};

export default DropDown;
