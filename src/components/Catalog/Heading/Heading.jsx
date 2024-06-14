import React from 'react';
import s from './styles.module.scss';

export const Heading = () => {
    return (
      <div className={s.container}>
        <div className={s.heading__wrapper}>
          <div className={s.heading__text}>найди тарелку для себя</div>
        </div>
      </div>
    );
  };