import React, { useState } from 'react';
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
import { ButtonWithTheme } from '../../components/ui/Button';

import cn from 'classnames';
import s from './styles.module.scss';
import { Checkbox } from '../../components/ui/Checkbox/Checkbox';
import { StarRating } from '../../components/ui/StarRating/StarRating';

const options = ['Что-то', 'Еще что-то', 'Супер что-то'];

export const HomePage = () => {
  const handleSearch = query => {
    console.log('Searching for:', query);
  };

  const [checked, setChecked] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.test}>TEST</div>
      <Header />
      <Button colorScheme={1} title={'Оплатить'} size={1} />
      <Button colorScheme={1} title={'Оплатить'} size={2} />
      <ButtonWithTheme colorScheme={2} title={'100 ₽'} size={3} />
      <ButtonWithTheme colorScheme={2} title={'+'} size={5} />
      <ButtonWithTheme colorScheme={4} size={4} withCounter={true} />
      <DropDown colorScheme={1} options={options} />
      <Checkbox shape="circle" checked={checked} onChange={setChecked} />
      <Checkbox shape="square" checked={checked} onChange={setChecked} />
      <StarRating />
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
