import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import s from './styles.module.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Button } from '../../Button';

import plateOne from '../../../../assets/images/plates/Plate.png';
import plateTwo from '../../../../assets/images/plates/Plate2.png';
import plateThree from '../../../../assets/images/plates/Plate3.png';
import plateFour from '../../../../assets/images/plates/Plate4.png';
import plateFive from '../../../../assets/images/plates/Plate5.png';
import plateSix from '../../../../assets/images/plates/Plate6.png';

gsap.registerPlugin(MotionPathPlugin);

const plates = [
  {
    title: 'Куриная грудка, с ростками сои и красной капустой',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '560 г',
    calories: '675 ккал',
    img: plateOne,
    price: '1900 ₽',
  },
  {
    title: 'Свинина, с чем-то там и салат',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '460 г',
    calories: '575 ккал',
    img: plateTwo,
    price: '1340 ₽',
  },
  {
    title: 'Филе сибаса, с рисом и спаржей и свежими овощами',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '530 г',
    calories: '525 ккал',
    img: plateThree,
    price: '1750 ₽',
  },
  {
    title: 'Форель со свежими овощами и картофелем',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '430 г',
    calories: '490 ккал',
    img: plateFour,
    price: '1800 ₽',
  },
  {
    title: 'Томленая говядина, картофель и салат',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '530 г',
    calories: '690 ккал',
    img: plateFive,
    price: '1400 ₽',
  },
  {
    title: 'Сашими из лосося и тунца с салатом из апельсинов и огурцов',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '510 г',
    calories: '360 ккал',
    img: plateSix,
    price: '1300 ₽',
  },
  {
    title: 'Куриная грудка, с ростками сои и красной капустой',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '560 г',
    calories: '675 ккал',
    img: plateOne,
    price: '1990 ₽',
  },
  {
    title: 'Свинина, с чем-то там и салат',
    description:
      'Красочное и аппетитное блюдо - здоровый и сбалансированный выбор для обеда или ужина.',
    weight: '460 г',
    calories: '575 ккал',
    img: plateTwo,
    price: '1340 ₽',
  },
];

export const ArcSlider = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const theme = useSelector(state => state.theme);
	let tl = gsap.timeline({ paused: true, reversed: true });
 
	const updatePathAndItems = () => {
	  const circlePath = MotionPathPlugin.convertToPath('#holder', false)[0];
	  circlePath.id = 'circlePath';
	  const svg = document.querySelector('svg');
	  if (svg) {
		 svg.prepend(circlePath);
	  }
 
	  let items = gsap.utils.toArray(`.${s.item}`);
	  let numItems = items.length;
	  let itemStep = 1 / numItems;
	  let wrapProgress = gsap.utils.wrap(0, 1);
	  let snap = gsap.utils.snap(itemStep);
	  let wrapTracker = gsap.utils.wrap(0, numItems);
	  let tracker = { item: 0 };
 
	  gsap.set(items, {
		 motionPath: {
			path: circlePath,
			align: circlePath,
			alignOrigin: [0.5, 0.5],
			end: i => i / items.length,
		 },
		 scale: 0.6,
	  });
 
	  gsap.set(`.${s.arc__block}`, {
		 rotation: 0,
		 transformOrigin: 'center',
	  });
 
	  gsap.set(items, {
		 rotation: 180,
		 transformOrigin: 'center',
	  });
 
	  tl.clear();
	  tl = gsap.timeline({ paused: true, reversed: true });
 
	  tl.to(`.${s.arc__block}`, {
		 rotation: 360,
		 transformOrigin: 'center',
		 duration: 1,
		 ease: 'none',
	  });
 
	  tl.to(
		 items,
		 {
			rotation: '-=360',
			transformOrigin: 'center',
			duration: 1,
			ease: 'none',
		 },
		 0,
	  );
 
	  tl.to(
		 tracker,
		 {
			item: numItems,
			duration: 1,
			ease: 'none',
			modifiers: {
			  item(value) {
				 return wrapTracker(numItems - Math.round(value));
			  },
			},
		 },
		 0,
	  );
 
	  const moveWheel = amount => {
		 const progress = tl.progress();
		 tl.progress(wrapProgress(snap(tl.progress() + amount)));
		 const next = tracker.item;
		 tl.progress(progress);
 
		 gsap.to(tl, {
			progress: snap(tl.progress() + amount),
			modifiers: {
			  progress: wrapProgress,
			},
		 });
 
		 setActiveIndex(next);
	  };
 
	  items.forEach((el, i) => {
		 el.addEventListener('click', () => {
			const current = tracker.item;
			const diff = current - i;
 
			if (Math.abs(diff) < numItems / 2) {
			  moveWheel(diff * itemStep);
			} else {
			  const amt = numItems - Math.abs(diff);
 
			  if (current > i) {
				 moveWheel(amt * -itemStep);
			  } else {
				 moveWheel(amt * itemStep);
			  }
			}
		 });
	  });
 
	  document
		 .getElementById('next')
		 ?.addEventListener('click', () => moveWheel(-itemStep));
	  document
		 .getElementById('prev')
		 ?.addEventListener('click', () => moveWheel(itemStep));
 
	  return moveWheel;
	};
 
	useEffect(() => {
	  let moveWheel = updatePathAndItems();
 
	  const handleResize = () => {
		 tl.progress(0);
		 tl.clear();
		 moveWheel = updatePathAndItems();
	  };
 
	  window.addEventListener('resize', handleResize);
 
	  const intervalId = setInterval(() => {
		 moveWheel(-1 / plates.length);
	  }, 10000);
 
	  return () => {
		 window.removeEventListener('resize', handleResize);
		 clearInterval(intervalId);
	  };
	}, []);
 
	return (
	  <div className={s.arcSlider__container}>
		 <div className={s.arc__wrapper}>
			<div className={s.arc__block}>
			  {plates.map((plate, index) => (
				 <div
					key={index}
					className={cn(s.item, { [s.active]: activeIndex === index })}
				 >
					<img className={s.itemImg} src={plate.img} alt={plate.title} />
				 </div>
			  ))}
			  <svg className={s.svg} viewBox="0 0 400 400">
				 <circle
					id="holder"
					className={s.st0}
					cx="200"
					cy="200"
					r="139"
					fill="none"
				 />
			  </svg>
			</div>
		 </div>
		 <div className={s.arcSlider__infoBlock}>
			<div className={s.arcSlider__infoBlock__title}>
			  Сбалансированные{' '}
			  <span className={s.arcSlider__infoBlock__title__pink}>готовые</span>{' '}
			  блюда
			</div>
			<div className={s.arcSlider__infoBlock__dishName}>
			  {plates[activeIndex].title}
			</div>
			<div className={s.arcSlider__infoBlock__description}>
			  {plates[activeIndex].description}
			</div>
			<div className={s.arcSlider__infoBlock__nutritionalValues}>
			  <div className={s.arcSlider__infoBlock__nutritionalValues__weight}>
				 {plates[activeIndex].weight}
			  </div>
			  <div className={s.arcSlider__infoBlock__nutritionalValues__calories}>
				 {plates[activeIndex].calories}
			  </div>
			</div>
			<Button
			  title={plates[activeIndex].price}
			  onClick={() => console.log('Button clicked')}
			  colorScheme={1}
			  size={1}
			/>
		 </div>
	  </div>
	);
 };
 
 export default ArcSlider;