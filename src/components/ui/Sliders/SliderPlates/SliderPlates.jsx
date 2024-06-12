import React, { useRef, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './styles.module.scss';
import rightImage from '../../../../assets/images/halfofplates/right/right.png';
import leftImage from '../../../../assets/images/halfofplates/left/left.png';

import arrowUp from '../../../../assets/images/icons/arrowUp.svg';
import verticalLine from '../../../../assets/images/icons/verticalLine.svg';
import arrowDown from '../../../../assets/images/icons/arrowDown.svg';

const NextArrow = ({ onClick, side }) => (
  <div className={`${s.arrow} ${s[`${side}Arrow`]}`} onClick={onClick}>
    <img src={arrowDown} alt="Next" />
  </div>
);

const PrevArrow = ({ onClick, side }) => (
  <div className={`${s.arrow} ${s[`${side}Arrow`]}`} onClick={onClick}>
    <img src={arrowUp} alt="Prev" />
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
      onSelect('left', leftImages[current]);
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
      onSelect('right', rightImages[current]);
    },
  };

  const leftImages = [leftImage, leftImage, leftImage, leftImage];
  const rightImages = [rightImage, rightImage, rightImage, rightImage];

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
                src={img}
                alt={`left ${idx}`}
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
                src={img}
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
