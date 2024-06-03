import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import $ from 'jquery';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import plateImg from '../../../../assets/images/halfofplates/right/Правая.png';

import cn from 'classnames';
import s from './styles.module.scss';

const PrevArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={className}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Previous"
  ></button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    type="button"
    className={className}
    style={{ ...style }}
    onClick={onClick}
    aria-label="Next"
  ></button>
);

export function SliderRightPart() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    centerPadding: '50px',
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [],
  };

  useEffect(() => {
    const slider = $(sliderRef.current);
    slider.on('wheel', e => {
      e.preventDefault();
      if (e.originalEvent.deltaY < 0) {
        slider.slick('slickPrev');
      } else {
        slider.slick('slickNext');
      }
    });
  }, []);

  return (
    <div className={cn('slider-container', s.sliderContainer)}>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <img className={s.sliderPlates__img} src={plateImg} alt="plate" />
        </div>
        <div>
          <img className={s.sliderPlates__img} src={plateImg} alt="plate" />
        </div>
        <div>
          <img className={s.sliderPlates__img} src={plateImg} alt="plate" />
        </div>
        <div>
          <img className={s.sliderPlates__img} src={plateImg} alt="plate" />
        </div>
        <div>
          <img className={s.sliderPlates__img} src={plateImg} alt="plate" />
        </div>
      </Slider>
    </div>
  );
}
