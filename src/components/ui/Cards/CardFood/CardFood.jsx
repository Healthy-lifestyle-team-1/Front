import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from '../../../../components/ui/Button/Button';
import cn from 'classnames';
import s from './styles.module.scss';
import DropDown from '../../../../components/ui/DropDown/DropDown';
import { Checkbox } from '../../Checkbox/Checkbox';

import line from '../../../../assets/images/dotted-line-card-food.svg';
import plateImg from '../../../../assets/images/plates/card-food-img.png';
import emptyLike from '../../../../assets/images/icons/light/пустойЛайк.svg';
import filledLike from '../../../../assets/images/icons/light/закрашенныйЛайк.svg';
import chartLight from '../../../../assets/images/chart-light.svg';
import chartDark from '../../../../assets/images/chart-dark.svg';

import vegan from '../../../../assets/images/icons/light/вег.svg';
import glutenFree from '../../../../assets/images/icons/light/глютенX.svg';
import lactoseFree from '../../../../assets/images/icons/light/лактозaX.svg';

export const CardFood = ({
  title,
  extra,
  weight,
  calories,
  description,
  img,
}) => {
  const descriptions = ['кБЖУ', 'Состав', 'Описание'];
  const [visibleDescriptions, setVisibleDescriptions] = useState([0, 1]);
  const [activeDescription, setActiveDescription] = useState(2);
  const activeTags = useSelector(state => state.tags);

  const handleDescriptionClick = index => {
    const newVisibleDescriptions = [...visibleDescriptions];
    const clickedIndex = newVisibleDescriptions.indexOf(index);
    const remainingDescription = descriptions.findIndex(
      (desc, i) => !newVisibleDescriptions.includes(i),
    );
    newVisibleDescriptions[clickedIndex] = remainingDescription;
    setVisibleDescriptions(newVisibleDescriptions);
    setActiveDescription(index);
  };

  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const ingredients = ['Говядина', 'Картофель', 'Томаты', 'Салат', 'Лук'];

  const [checkedItems, setCheckedItems] = useState(
    new Array(ingredients.length).fill(true),
  );

  const handleCheckboxChange = index => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const renderContent = () => {
    switch (activeDescription) {
      case 0:
        return (
          <div>
            <div className={s.cardfood__detailsTitle}>кБЖУ</div>
            <img src={chartLight} alt="кБЖУ" />
          </div>
        );
      case 1:
        return (
          <div>
            <span className={s.cardfood__detailsTitle}>Состав</span>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  <Checkbox
                    checked={checkedItems[index]}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>
        );
      case 2:
      default:
        return (
          <div>
            <div className={s.cardfood__detailsTitle}>Описание</div>
            <div className={s.cardfood__detailsDescription}>{description}</div>
          </div>
        );
    }
  };

  return (
    <div className={s.container}>
      <div className={s.cardfood__info}>
        <div className={s.cardfood__labels}>
          <img src={vegan} alt=""></img>
          <img src={glutenFree} alt=""></img>
          <img src={lactoseFree} alt=""></img>
        </div>
        <div className={s.cardfood__title}>{title}</div>
        <div className={s.cardfood__extra}>{extra}</div>
        <div className={s.cardfood__weightCalories}>
          <span className={s.cardfood__weight}>{weight}</span>
          <span className={s.cardfood__calories}>{calories}</span>
        </div>
        <div className={s.cardfood__details}>
          <div className={s.cardfood__detailsSelect}>{renderContent()}</div>
          <div className={s.cardfood__detailsLine}>
            <img src={line} alt="линия"></img>
          </div>
          <div className={s.cardfood__detailsButton}>
            <div className={s.cardfood__tagBtns}>
              {visibleDescriptions.map(descIndex => (
                <Button
                  colorScheme={5}
                  size={7}
                  key={descIndex}
                  title={descriptions[descIndex]}
                  isActive={activeTags.includes(descIndex)}
                  onClick={() => handleDescriptionClick(descIndex)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className={s.cardfood__options}>
          <DropDown colorScheme={2} options={options} buttonText={'Отзывы'} />
          <Button colorScheme={2} title={'В корзину'} size={1} />
        </div>
      </div>
      <div className={s.cardfood__likeAndImg}>
        <button className={s.cardfood__like} onClick={handleLikeClick}>
          <img src={liked ? filledLike : emptyLike} alt="" />
        </button>
        <img
          className={s.cardfood__plateImg}
          src={img}
          alt="фото тарелки"
        ></img>
      </div>
    </div>
  );
};

const options = ['Отзыв 1?', 'Отзыв 2?', 'Отзыв 3?'];

const plates = [
  {
    title: 'Томленая говядина',
    extra: 'в томатном соусе с молодым картофелем в укропе',
    weight: '560 г',
    calories: '675 ккал',
    description:
      'Салат из свежих овощей, с добавлением микро-зелени, приправлен ореховым соусом отличный гарнир на ужин',
    img: plateImg,
  },
];

export const CardFoodList = () => {
  return (
    <div>
      {plates.map((item, index) => (
        <CardFood key={index} {...item} />
      ))}
    </div>
  );
};
