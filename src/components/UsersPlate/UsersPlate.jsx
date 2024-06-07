// UsersPlate.js
import React from 'react';
import s from './styles.module.scss';

export const UsersPlate = ({ leftImage, rightImage }) => {
  return (
    <div className={s.usersPlate}>
      <img
        className={s.usersPlate__img}
        src={leftImage}
        alt="Left plate half"
      />
      <img
        className={s.usersPlate__img}
        src={rightImage}
        alt="Right plate half"
      />
    </div>
  );
};
