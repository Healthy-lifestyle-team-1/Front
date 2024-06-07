import React from 'react';
// import { Main } from "../../components/Main/Main";
import { Header } from '../../components/Header/Header';
import { PlateConstructor } from '../../components/PlateConstructor';
import { HelpfulArticles } from '../../components/HelpfulArticles/HelpfulArticles';
import { Advertisement } from '../../components/Advertisement';

import { Input } from '../../components/ui/Input/Input';
import DropDown from '../../components/ui/DropDown/DropDown';
import { PlateMethod } from '../../components/PlateMethod';
import { ArcSlider } from '../../components/ui/Sliders/ArcSlider';
import { Button } from '../../components/ui/Button/Button';

import cn from 'classnames';
import s from './styles.module.scss';

const options = ['Что-то', 'Еще что-то', 'Супер что-то'];

export const HomePage = () => {
  const handleSearch = query => {
    console.log('Searching for:', query);
  };

  return (
    <div className={s.container}>
      <div className={s.test}>TEST</div>
      <Header />
      <Button colorScheme={2} title={'Заказать'} />
      <DropDown colorScheme={2} options={options} />
      <PlateConstructor />
      <Input width="500px" colorScheme={1} />
      <Advertisement />
      <HelpfulArticles />
      <ArcSlider />
      <PlateMethod />
      {/* <Main /> */}
    </div>
  );
};
