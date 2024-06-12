import React, { useState, useEffect } from 'react';
import s from './styles.module.scss';
import { ButtonStone } from '../Button';

const Test = ({ onButtonClick, activeIndex }) => {
  const [buttons, setButtons] = useState([
    { title: 'Кнопка 1', position: 'first', backgroundColor: 1, index: 0 },
    { title: 'Кнопка 2', position: 'second', backgroundColor: 2, index: 1 },
    { title: 'Кнопка 3', position: 'third', backgroundColor: 3, index: 2 },
  ]);

  useEffect(() => {
    const newButtons = [...buttons];
    const activeButton = newButtons.find(button => button.index === activeIndex);
    const activeButtonIndex = newButtons.indexOf(activeButton);

    [newButtons[1], newButtons[activeButtonIndex]] = [newButtons[activeButtonIndex], newButtons[1]];
    setButtons(newButtons);
  }, [activeIndex]);

  const handleClick = index => {
    const newButtons = [...buttons];
    [newButtons[1], newButtons[index]] = [newButtons[index], newButtons[1]];
    setButtons(newButtons);
    onButtonClick(newButtons[1].index);
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
    <div className={s.buttonsContainer}>
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
