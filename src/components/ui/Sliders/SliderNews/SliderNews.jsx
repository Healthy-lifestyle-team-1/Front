import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import s from './styles.module.scss';
import newsImg1 from '../../../../assets/images/News/news1.png';
import newsImg2 from '../../../../assets/images/News/news2.png';
import newsImg3 from '../../../../assets/images/News/news3.png';
import newsImg4 from '../../../../assets/images/News/news4.png';

const newsData = [
  {
    img: newsImg1,
    description: 'Идеология здорового питания по науке',
  },
  {
    img: newsImg2,
    description: '13 требований к идеальному рациону',
  },
  {
    img: newsImg3,
    description: 'Почему нельзя голодать для похудения?',
  },
  {
    img: newsImg4,
    description: 'Самая продаваемая специя в мире',
  },
];

function SliderNews() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className={s.sliderContainer}>
      <Slider {...settings}>
        {newsData.map((item, index) => (
          <div key={index} className={s.newsSlide}>
            <img src={item.img} alt="news" className={s.newsImg} />
            <div className={s.newsDescription}>{item.description}</div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SliderNews;
