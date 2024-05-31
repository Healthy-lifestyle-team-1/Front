import React from "react";

import imgStories from "../../../../assets/images/img-stories.png";

import cn from "classnames";
import s from "./styles.module.scss";

export const SliderStories = ({ img }) => {
  return (
    <div className={s.container}>
      <div className={s.stories__img}>
        <img className={s.stories__img__img} src={img} alt="фото сторис" />
      </div>
    </div>
  );
};

const images = [
	{ img: imgStories }, 
	{ img: imgStories }, 
	{ img: imgStories }, 
	{ img: imgStories }, 
	{ img: imgStories }, 
	{ img: imgStories }
];

const sliderStories = images.map((item, index) => (
	<SliderStories key={index} {...item} />
 ));


export default sliderStories;