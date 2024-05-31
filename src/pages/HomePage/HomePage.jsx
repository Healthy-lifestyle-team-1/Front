import React from "react";

// import { Main } from "../../components/Main/Main";
import { Header } from "../../components/Header/Header";
import CardFood from "../../components/ui/Cards/CardFood/CardFood";
import StoriesList from "../../components/ui/Stories/StoriesList";

import cn from 'classnames';
import s from './styles.module.scss';

export const HomePage = () => {

  return (
    <div className={s.container}>
      <Header />
      {/* <Main /> */}
      <div className={s.storiesContainer}>
        <StoriesList />
      </div>
      <div className={s.cards}>
        {CardFood.map((card, index) => (
          <div key={index} className={s.card}>
            {card}
          </div>
        ))}
      </div>
    </div>
  );
};
