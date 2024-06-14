import React from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { InProgressLoader } from '../InProgressLoader';

export function InProgress() {
  return (
    <div className={s.InProgressContainer}>
      <div className={s.InProgresText}>
        Данная страница находится в процессе разработки
      </div>
		<InProgressLoader />
    </div>
  );
}
