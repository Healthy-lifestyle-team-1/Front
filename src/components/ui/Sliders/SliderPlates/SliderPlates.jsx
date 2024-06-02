import React from "react";
import Slider from "react-slick";

import plateImg from "../../../../assets/images/halfofplates/left/левая.png";

import cn from "classnames";
import s from "./styles.module.scss";


const SliderPlates = () => {
  return (
    <img className={s.sliderPlates__img} src={plateImg} alt='plate' />
  );
};


export function VerticalMode() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  return (
    <div className={cn("slider-container", s.sliderContainer)}>
      <Slider {...settings}>
        <div><SliderPlates /></div>
        <div><SliderPlates /></div>
        <div><SliderPlates /></div>
        <div><SliderPlates /></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
      </Slider>
    </div>
  );
}
