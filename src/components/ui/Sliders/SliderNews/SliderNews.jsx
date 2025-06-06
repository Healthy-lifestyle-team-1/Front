import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
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
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate('/news');
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <div className={s.sliderNews__container}>
      <div className={s.sliderNews__container}>
        <Slider {...settings}>
          {newsData.map((item, index) => (
            <a
              href=""
              target="blank"
              key={index}
              className={`${s.sliderNews__slide} ${index % 2 === 1 ? s.lowered : ''}`}
            >
              <img src={item.img} alt="news" className={s.sliderNews__img} />
              <div className={s.sliderNews__description}>
                {item.description}
              </div>
              <div className={s.sliderNews__btnWrapper}>
                <div className={s.sliderNews__btn} onClick={handleReadMore}>
                  Читать
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SliderNews;
