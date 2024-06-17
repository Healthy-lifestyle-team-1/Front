// src/assets/images/icons/icons.js

import glutenLight from './light/глютен.svg';
import lactoseLight from './light/лактоза.svg';
import meatLight from './light/говядина.svg';
import sugarLight from './light/сахар.svg';

import glutenDark from './dark/глютен.svg';
import lactoseDark from './dark/лактоза.svg';
import meatDark from './dark/говядина.svg';
import sugarDark from './dark/сахар.svg';

export const icons = {
  dark: {
    Глютен: glutenDark,
    Лактоза: lactoseDark,
    Мясо: meatDark,
    Сахар: sugarDark,
  },
  light: {
    Глютен: glutenLight,
    Лактоза: lactoseLight,
    Мясо: meatLight,
    Сахар: sugarLight,
  },
};
