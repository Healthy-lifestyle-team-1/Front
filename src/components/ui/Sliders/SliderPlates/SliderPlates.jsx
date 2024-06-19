import React, { useRef, useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './styles.module.scss';

import arrowUp from '../../../../assets/images/icons/arrowUp.svg';
import arrowDown from '../../../../assets/images/icons/arrowDown.svg';
import { BASE_URL } from '../../../../core/url';

const NextArrow = ({ onClick, side }) => (
  <div className={`${s.arrow} ${s[`${side}NextArrow`]}`} onClick={onClick}>
    <img className={s.arrow__img} src={arrowDown} alt="Next" />
  </div>
);

const PrevArrow = ({ onClick, side }) => (
  <div className={`${s.arrow} ${s[`${side}PrevArrow`]}`} onClick={onClick}>
    <img className={s.arrow__img} src={arrowUp} alt="Prev" />
  </div>
);

const SlideIndicator = ({ currentSlide, totalSlides, side }) => {
  const indicatorHeight = 100 / totalSlides;
  const indicatorTop = indicatorHeight * currentSlide;
  return (
    <div className={`${s.slideIndicator} ${s[`${side}SlideIndicator`]}`}>
      <div
        className={s.slideIndicatorActive}
        style={{ height: `${indicatorHeight}%`, top: `${indicatorTop}%` }}
      />
    </div>
  );
};

export const SliderPlates = ({ onSelect }) => {
  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  const [leftCurrentSlide, setLeftCurrentSlide] = useState(0);
  const [rightCurrentSlide, setRightCurrentSlide] = useState(0);
  const [leftImages, setLeftImages] = useState([]);
  const [rightImages, setRightImages] = useState([]);

  useEffect(() => {
    const fetchLeftImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product/?is_prepared=H2`, {
          // Изменено на H2 для левой стороны
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Ошибка при получении данных:', errorData);
          throw new Error('Ошибка при получении данных');
        }

        const data = await response.json();
        setLeftImages(
          data.map(item => ({ id: item.id, src: item.image_extra })),
        ); // Используем image_extra
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    const fetchRightImages = async () => {
      try {
        const response = await fetch(`${BASE_URL}/product/?is_prepared=H1`, {
          // Изменено на H1 для правой стороны
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error('Ошибка при получении данных:', errorData);
          throw new Error('Ошибка при получении данных');
        }

        const data = await response.json();
        setRightImages(
          data.map(item => ({ id: item.id, src: item.image_extra })),
        ); // Используем image_extra
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };

    fetchLeftImages();
    fetchRightImages();
  }, []);

  const leftSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow side="left" />,
    prevArrow: <PrevArrow side="left" />,
    afterChange: current => {
      setLeftCurrentSlide(current);
      onSelect('right', leftImages[current]); // Изменено на 'right' для левой стороны
    },
  };

  const rightSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow side="right" />,
    prevArrow: <PrevArrow side="right" />,
    afterChange: current => {
      setRightCurrentSlide(current);
      onSelect('left', rightImages[current]); // Изменено на 'left' для правой стороны
    },
  };

  return (
    <div className={s.carousel__container}>
      <div className={s.sliderWrapper}>
        <Slider
          ref={leftSliderRef}
          {...leftSettings}
          className={s.carousel__leftSlider}
        >
          {leftImages.map((img, idx) => (
            <div key={idx} className={s.carousel__imageContainer}>
              <img
                className={s.carousel__slider__image}
                src={img.src}
                alt={`left ${idx}`}
                style={{ transform: 'rotate(180deg)' }} // Поворот на 180 градусов
              />
            </div>
          ))}
        </Slider>
        <SlideIndicator
          currentSlide={leftCurrentSlide}
          totalSlides={leftImages.length}
          side="left"
        />
      </div>
      <div className={s.sliderWrapper}>
        <Slider
          ref={rightSliderRef}
          {...rightSettings}
          className={s.carousel__rightSlider}
        >
          {rightImages.map((img, idx) => (
            <div key={idx} className={s.carousel__imageContainer}>
              <img
                className={s.carousel__slider__image}
                src={img.src}
                alt={`right ${idx}`}
              />
            </div>
          ))}
        </Slider>
        <SlideIndicator
          currentSlide={rightCurrentSlide}
          totalSlides={rightImages.length}
          side="right"
        />
      </div>
    </div>
  );
};
