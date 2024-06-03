import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styles from './styles.module.scss';
import rightImage from '../../../../assets/images/halfofplates/right/Правая.png';
import leftImage from '../../../../assets/images/halfofplates/left/левая.png';

const NextArrow = props => {
  const { onClick } = props;
  return (
    <button className={styles.rightArrow} onClick={onClick}>
      ⬆️
    </button>
  );
};

const PrevArrow = props => {
  const { onClick } = props;
  return (
    <button className={styles.leftArrow} onClick={onClick}>
      ⬇️
    </button>
  );
};

const HiddenArrow = () => {
  return null;
};

export const SliderPlates = () => {
  const leftSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HiddenArrow />,
    prevArrow: <PrevArrow />,
  };

  const rightSettings = {
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <HiddenArrow />,
  };

  const leftImages = [leftImage, leftImage, leftImage, leftImage];
  const rightImages = [rightImage, rightImage, rightImage, rightImage];

  return (
    <div className={styles.carouselContainer}>
      <Slider {...leftSettings} className={styles.leftSlider}>
        {leftImages.map((img, idx) => (
          <div key={idx} className={styles.imageContainer}>
            <img src={img} alt={`left ${idx}`} />
          </div>
        ))}
      </Slider>
      <Slider {...rightSettings} className={styles.rightSlider}>
        {rightImages.map((img, idx) => (
          <div key={idx} className={styles.imageContainer}>
            <img src={img} alt={`right ${idx}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
