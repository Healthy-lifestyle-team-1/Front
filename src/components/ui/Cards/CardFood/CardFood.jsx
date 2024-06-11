import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../../components/ui/Button/Button';
import plateImg from '../../../../assets/images/plates/card-food-img.png';
import line from '../../../../assets/images/dotted-line-card-food.svg';
import cn from 'classnames';
import s from './styles.module.scss';
import emptyLike from '../../../../assets/images/icons/light/пустойЛайк.svg';
import filledLike from '../../../../assets/images/icons/light/закрашенныйЛайк.svg';
import DropDown from '../../../../components/ui/DropDown/DropDown';

// иконки для маркировки продуктов питания
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
  const activeTags = useSelector(state => state.tags);

  const handleDescriptionClick = index => {
    const newVisibleDescriptions = [...visibleDescriptions];
    const clickedIndex = newVisibleDescriptions.indexOf(index);
    const remainingDescription = descriptions.findIndex(
      (desc, i) => !newVisibleDescriptions.includes(i),
    );
    newVisibleDescriptions[clickedIndex] = remainingDescription;
    setVisibleDescriptions(newVisibleDescriptions);
  };

  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
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
          <div className={s.cardfood__detailsText}>
            <div className={s.cardfood__detailsTitle}>Описание</div>
            <div className={s.cardfood__detailsDescription}>{description}</div>
          </div>
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
          <DropDown colorScheme={2} options={options} />
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
  // {
  //   title: 'Томленая говядина',
  //   extra: 'в томатном соусе с молодым картофелем в укропе',
  //   weight: '560 г',
  //   calories: '675 ккал',
  //   description:
  //     'Салат из свежих овощей, с добавлением микро-зелени, приправлен ореховым соусом отличный гарнир на ужин',
  //   img: plateImg,
  // },
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
