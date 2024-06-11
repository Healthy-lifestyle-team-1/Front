import React, { useState } from 'react';
import s from './styles.module.scss';
import { ButtonStone } from '../Button';

const Test = () => {
  const [buttons, setButtons] = useState([
    { title: 'Кнопка 1', position: 'first', backgroundColor: 1 },
    { title: 'Кнопка 2', position: 'second', backgroundColor: 2 },
    { title: 'Кнопка 3', position: 'third', backgroundColor: 3 },
  ]);

  const handleClick = index => {
    const newButtons = [...buttons];
    [newButtons[1], newButtons[index]] = [newButtons[index], newButtons[1]];
    setButtons(newButtons);
  };

  const getClassName = position => {
    switch (position) {
      case 'first':
        return s.first;
      case 'second':
        return s.second;
      case 'third':
        return s.third;
      default:
        return '';
    }
  };

  return (
    <div>
      {buttons.map((button, index) => (
        <div key={index} className={getClassName(button.position)}>
          <ButtonStone
            title={button.title}
            backgroundColor={button.backgroundColor}
            onClick={() => handleClick(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default Test;
