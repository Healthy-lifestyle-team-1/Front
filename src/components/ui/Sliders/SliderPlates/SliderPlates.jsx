import React, { useRef } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import s from './styles.module.scss';
import rightImage from '../../../../assets/images/halfofplates/right/right.png';
import leftImage from '../../../../assets/images/halfofplates/left/left.png';

const NextArrow = props => {
  const { onClick } = props;
  return (
    <button className={s.rightArrow} onClick={onClick}>
      ⬆️
    </button>
  );
};

const PrevArrow = props => {
  const { onClick } = props;
  return (
    <button className={s.leftArrow} onClick={onClick}>
      ⬇️
    </button>
  );
};

const HiddenArrow = () => {
  return null;
};

export const SliderPlates = ({ onSelect }) => {
  const leftSliderRef = useRef(null);
  const rightSliderRef = useRef(null);

  const leftSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HiddenArrow />,
    prevArrow: <PrevArrow />,
    afterChange: current => onSelect('left', leftImages[current]),
  };

  const rightSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <HiddenArrow />,
    afterChange: current => onSelect('right', rightImages[current]),
  };

  const leftImages = [leftImage, leftImage, leftImage, leftImage];
  const rightImages = [rightImage, rightImage, rightImage, rightImage];

  return (
    <div className={s.carousel__Container}>
      <Slider {...leftSettings} className={s.leftSlider}>
        {leftImages.map((img, idx) => (
          <div key={idx} className={s.imageContainer}>
            <img className={s.slider__image} src={img} alt={`left ${idx}`} />
          </div>
        ))}
      </Slider>
      <Slider ref={rightSliderRef} {...rightSettings} className={s.rightSlider}>
        {rightImages.map((img, idx) => (
          <div key={idx} className={s.imageContainer}>
            <img className={s.slider__image} src={img} alt={`right ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
