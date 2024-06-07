// UsersPlate.js
import React from 'react';
import s from './styles.module.scss';

export const UsersPlate = ({ leftImage, rightImage }) => {
  return (
    <div className={s.usersPlate}>
      <img src={leftImage} alt="Left plate half" />
      <img src={rightImage} alt="Right plate half" />
    </div>
  );
};
