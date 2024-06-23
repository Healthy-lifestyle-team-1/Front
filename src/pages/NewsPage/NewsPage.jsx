import React, { useState, useEffect } from 'react';
import cn from 'classnames';
import s from './styles.module.scss';
import { Input } from '../../components/ui/Input';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Advertisement } from '../../components/Advertisement';
import { CardNewsMain } from '../../components/ui/Cards/CardNewsMain';

// import loadingImage from '../../assets/images/LoadingVideo.png';

export const NewsPage = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  // const [showVideo, setShowVideo] = useState(false);

  const handleScroll = () => {
    const currentScrollTop = window.scrollY;

    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
      // Скроллим вниз
      setIsScrollingUp(false);
    } else if (currentScrollTop < lastScrollTop) {
      // Скроллим вверх
      setIsScrollingUp(true);
    }

    setLastScrollTop(currentScrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  // const handlePlayVideo = () => {
  //   setShowVideo(true);
  // };

  return (
    <div className={s.container}>
      {/* <CardNewsMain className={s.block} /> */}
      <div className={s.news__video}>
        <iframe
          src="https://rutube.ru/video/embed/2d4d7c007d744752f52018b56f78f826/?p=3kBFy2-Cj6p5SGpRKGYz2A"
          style={{ border: 0 }}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="News Video"
          className={s.news__videoFrame}
        ></iframe>
      </div>
      <Advertisement />
      <Footer />
    </div>
  );
};
