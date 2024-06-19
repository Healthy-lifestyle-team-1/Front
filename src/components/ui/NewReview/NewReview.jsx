import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import s from './style.module.scss';
import { StarRating } from '../StarRating';
import { Button } from '../Button';

import plateImg from '../../../assets/images/plates/plate-quarter.png';

import x from '../../../assets/images/icons/x.svg';
import xDark from '../../../assets/images/icons/xDark.svg';

import vegan from '../../../assets/images/icons/light/вег.svg';
import veganDark from '../../../assets/images/icons/dark/вег.svg';

import glutenFree from '../../../assets/images/icons/light/глютенX.svg';
import glutenFreeDark from '../../../assets/images/icons/dark/глютенX.svg';

import lactoseFree from '../../../assets/images/icons/light/лактозаX.svg';
import lactoseFreeDark from '../../../assets/images/icons/dark/лактозаX.svg';

export const NewReview = ({ image, title, description, weight, calories }) => {
  const theme = useSelector(state => state.theme);

  const [photos, setPhotos] = useState([null, null]);
  const [photoUrls, setPhotoUrls] = useState([null, null]);

  const [isOpen, setIsOpen] = useState(true);

  const [comment, setComment] = useState('');

  const handleFileChange = (e, index) => {
    const files = [...photos];
    const urls = [...photoUrls];
    files[index] = e.target.files[0];
    urls[index] = URL.createObjectURL(e.target.files[0]);
    setPhotos(files);
    setPhotoUrls(urls);
  };

  const handleCommentChange = e => {
    setComment(e.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={s.container}>
      <div className={s.nreview__content}>
        <div className={s.nreview__info}>
          <div className={s.nreview__infoImg}>
            <img src={image} alt="фото блюда" />
          </div>
          <div className={s.nreview__infoText}>
            <div className={s.nreview__infoTextLabels}>
              <img
                src={theme === 'dark' ? veganDark : vegan}
                alt="Растительные продукты"
              ></img>
              <img
                src={theme === 'dark' ? glutenFreeDark : glutenFree}
                alt="Без глютена"
              ></img>
              <img
                src={theme === 'dark' ? lactoseFreeDark : lactoseFree}
                alt="Без глютена"
              ></img>
            </div>
            <div className={s.nreview__infoTextTitle}>{title}</div>
            <div className={s.nreview__infoTextDescription}>{description}</div>
            <div className={s.nreview__infoTextContains}>
              <div className={s.nreview__infoTextContainsWeight}>{weight}</div>
              <div className={s.nreview__infoTextContainsCalories}>
                {calories}
              </div>
            </div>
          </div>
        </div>
        <div className={s.nreview__rating}>
          <button className={s.nreview__ratingX} onClick={handleClose}>
            <img src={theme === 'dark' ? xDark : x} alt="закрыть" />
          </button>
          <div className={s.nreview__ratingTitle}>Общая оценка</div>
          <div className={s.nreview__ratingStars}>
            <StarRating size="27px" />
          </div>
          <div className={s.nreview__ratingTitle}>Расскажите подробнее</div>
          <input
            type="text"
            placeholder="Комментарий"
            value={comment}
            onChange={handleCommentChange}
            className={s.nreview__ratingComment}
          ></input>
          <div className={s.nreview__ratingTitle}>Добавьте фото</div>
          <div className={s.nreview__ratingPhoto}>
            {photoUrls.map((photoUrl, index) => (
              <div key={index} className={s.nreview__ratingPhotoUpload}>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => handleFileChange(e, index)}
                  className={s.nreview__fileInput}
                />
                {photoUrl && (
                  <img
                    src={photoUrl}
                    alt={`Uploaded ${index}`}
                    className={s.nreview__uploadedImg}
                  />
                )}
              </div>
            ))}
            <span className={s.nreview__ratingPhotoMore}>Еще</span>
          </div>
          <div className={s.nreview__ratingButton}>
            <Button
              title={'Отправить'}
              colorScheme={1}
              size={2}
              disabled={!comment || !photoUrls.some(url => url !== null)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const plate = [
  {
    image: plateImg,
    title: 'Тушеная говядина с рисом',
    description: 'с добавлением куркумы, кунжута и восточных ароматных специй',
    weight: '260 г',
    calories: '440 ккал',
  },
];

export const UserNewReview = () => {
  return (
    <div>
      {plate.map((plateItem, index) => (
        <NewReview
          key={index}
          image={plateItem.image}
          title={plateItem.title}
          description={plateItem.description}
          weight={plateItem.weight}
          calories={plateItem.calories}
        />
      ))}
    </div>
  );
};
