import React from 'react';
import { useState } from 'react';
import plateImg from '../../../../assets/images/plates/card-food-img.png';
import line from '../../../../assets/images/dotted-line-card-food.svg';
import cn from 'classnames';
import s from './styles.module.scss';
import emptyLike from '../../../../assets/images/icons/light/пустойЛайк.svg';
import filledLike from '../../../../assets/images/icons/light/закрашенныйЛайк.svg';

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
            <button>Состав</button>
            <button>кБЖУ</button>
          </div>
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
