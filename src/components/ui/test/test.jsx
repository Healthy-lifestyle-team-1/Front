import React from 'react';
import { useSelector } from 'react-redux';
import s from './styles.module.scss';
import { ButtonStone } from '../Button';
import stone11 from '../../../assets/images/stones/верхний.камень-розовый1.png';
import stone21 from '../../../assets/images/stones/верхний-камень-голубой2.png';
import stone31 from '../../../assets/images/stones/верхний.камень-жёлтый3.png';
import stone12 from '../../../assets/images/stones/центральный-камень-жёлтый1.png';
import stone22 from '../../../assets/images/stones/центральный-камень-розовый2.png';
import stone32 from '../../../assets/images/stones/центральный-камень-голубой3.png';
import stone13 from '../../../assets/images/stones/нижний-камень-голубой1.png';
import stone23 from '../../../assets/images/stones/нижний-камень-жёлтый2.png';
import stone33 from '../../../assets/images/stones/нижний-камень-розовый3.png';

import stone11Dark from '../../../assets/images/stones/stone11-dark.png';
import stone21Dark from '../../../assets/images/stones/stone21-dark.png';
import stone22Dark from '../../../assets/images/stones/stone22-dark.png';
import stone32Dark from '../../../assets/images/stones/stone32-dark.png';
import stone13Dark from '../../../assets/images/stones/stone13-dark.png';
import stone33Dark from '../../../assets/images/stones/stone23-dark.png';

const Test = ({ onButtonClick, activeIndex }) => {
  const theme = useSelector(state => state.theme); 

  const buttons = [
    { title: 'Тарелка', index: 0 },
    { title: 'Книга', index: 1 },
    { title: 'Каталог', index: 2 },
  ];

  const backgroundImages = {
    light: [
      [stone11, stone12, stone13],
      [stone21, stone22, stone23],
      [stone31, stone32, stone33],
    ],
    dark: [
      [stone11Dark, stone12, stone13Dark],
      [stone21Dark, stone22Dark, stone23],
      [stone31, stone32Dark, stone33Dark],
    ],
  };

  const buttonColors = [
    'backgroundColor__1',
    'backgroundColor__2',
    'backgroundColor__3',
  ];

  const handleClick = index => {
    onButtonClick(index);
  };

  const getBackgroundImage = (position, activeIndex) => {
    const posIndex = position === 'first' ? 0 : position === 'second' ? 1 : 2;
    const themeImages = backgroundImages[theme] || backgroundImages.light;
    return themeImages[activeIndex][posIndex];
  };

  const renderButtons = () => {
    const positions = [
      { position: 'first', button: buttons[(activeIndex + 1) % 3] },
      { position: 'second', button: buttons[activeIndex] },
      { position: 'third', button: buttons[(activeIndex + 2) % 3] },
    ];

    return positions.map(({ position, button }, index) => (
      <div
        key={index}
        className={`${s.position} ${s[position]}`}
        style={{
          backgroundImage: `url(${getBackgroundImage(position, activeIndex)})`,
        }}
      >
        <ButtonStone
          title={button.title}
          onClick={() => handleClick(button.index)}
          className={`${s.button} ${s[buttonColors[button.index]]}`}
        />
      </div>
    ));
  };

  return <div className={s.buttonsContainer}>{renderButtons()}</div>;
};

export default Test;
