import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import s from './styles.module.scss';

const dishes = [
  { id: 1, name: 'Soto sapi pak adin', rating: 4.5, chef: 'Chef A', image: '/images/1.jpg' },
  { id: 2, name: 'Lamb steak potato', rating: 4.3, chef: 'Chef B', image: '/images/2.jpg' },
  { id: 3, name: 'Martabak pak adin', rating: 4.9, chef: 'Chef C', image: '/images/3.jpg' },
];

const DishCard = ({ dish }) => (
  <div className={s.dishCard}>
    <div className={s.dishInfo}>
      <h2>{dish.name}</h2>
      <p>Rating: {dish.rating}</p>
      <p>Chef: {dish.chef}</p>
    </div>
  </div>
);

const DishImage = ({ dish, direction }) => {
  const variants = {
    initial: {
      opacity: 0,
      x: direction === 'next' ? 300 : -300,
      y: -300,
      rotate: direction === 'next' ? -90 : 90,
    },
    animate: { opacity: 1, x: 0, y: 0, rotate: 0 },
    exit: {
      opacity: 0,
      x: direction === 'next' ? -300 : 300,
      y: -300,
      rotate: direction === 'next' ? 90 : -90,
    },
  };

  return (
    <motion.img
      key={dish.id}
      src={dish.image}
      alt={dish.name}
      className={s.dishImage}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      transition={{ type: 'spring', stiffness: 50, damping: 20 }}
    />
  );
};

export const SliderHalfOfPlates = () => {
  const [currentDish, setCurrentDish] = useState(0);
  const [direction, setDirection] = useState('next');

  const nextDish = () => {
    setDirection('next');
    setTimeout(() => {
      setCurrentDish((prev) => (prev + 1) % dishes.length);
    }, 500);
  };

  const prevDish = () => {
    setDirection('prev');
    setTimeout(() => {
      setCurrentDish((prev) => (prev - 1 + dishes.length) % dishes.length);
    }, 500);
  };

  return (
    <div className={s.containerSlider}>
      <div className={s.mainContent}>
        <DishCard key={dishes[currentDish].id} dish={dishes[currentDish]} />
        <AnimatePresence custom={direction}>
          <DishImage key={dishes[currentDish].id} dish={dishes[currentDish]} direction={direction} />
        </AnimatePresence>
      </div>
      <div className={s.thumbnailNavContainer}>
        <button onClick={prevDish} className={s.navButton}>&lt;</button>
        <div className={s.thumbnailContainer}>
          {dishes.map((dish, index) => (
            <img
              key={dish.id}
              src={dish.image}
              alt={dish.name}
              className={`${s.thumbnail} ${index === currentDish ? s.activeThumbnail : ''}`}
              onClick={() => {
                setDirection(index > currentDish ? 'next' : 'prev');
                setTimeout(() => {
                  setCurrentDish(index);
                }, 500);
              }}
            />
          ))}
        </div>
        <button onClick={nextDish} className={s.navButton}>&gt;</button>
      </div>
    </div>
  );
};
