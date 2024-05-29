import React from "react";

import { Main } from "../../components/Main/Main";

import cn from 'classnames';
import s from './styles.module.scss';

export const HomePage = () => {

  return (
    <div className={s.container}>
      {/* <Header /> */}
      <Main />
    </div>
  )
}