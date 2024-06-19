import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import s from './styles.module.scss';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Button } from '../../Button';

import plateOne from '../../../../assets/images/plates/plate1.png';
import plateTwo from '../../../../assets/images/plates/plate2.png';
import plateThree from '../../../../assets/images/plates/plate3.png';
import plateFour from '../../../../assets/images/plates/plate4.png';
import plateFive from '../../../../assets/images/plates/plate5.png';
import plateSix from '../../../../assets/images/plates/plate6.png';
import plateSeven from '../../../../assets/images/plates/plate7.png';
import plateEight from '../../../../assets/images/plates/plate8.png';

import glutenFreeDark from '../../../../assets/images/icons/light/глютен.svg';
import vegDark from '../../../../assets/images/icons/light/вег.svg';
import beefDark from '../../../../assets/images/icons/light/говядина.svg';
import nutsDark from '../../../../assets/images/icons/light/орехи.svg';

import glutenFree from '../../../../assets/images/icons/dark/глютен.svg';
import veg from '../../../../assets/images/icons/dark/вег.svg';
import beef from '../../../../assets/images/icons/dark/говядина.svg';
import nuts from '../../../../assets/images/icons/dark/орехи.svg';

gsap.registerPlugin(MotionPathPlugin);

const plates = [
  {
    title: 'Куриная грудка с яйцами, рисом, ростками сои и красной капустой',
    description:
      'Сочная куриная грудка, приправленная специями, сочетается с ароматным рисом, пропитанным вкусом жареных яиц и питательными ростками сои.',
    weight: '560 г',
    calories: '410 ккал',
    img: plateOne,
    price: '1900 ₽',
    labels: [
      { light: vegDark, dark: veg },
      { light: nutsDark, dark: nuts }
    ]
  },
  {
    title:
      'Слабосоленая семга с салатом из помидоров, моцареллы, авокадо и рукколы',
    description:
      'Изысканное блюдо с слабосоленой семгой и нежным салатом создает гармоничное сочетание вкусов и текстур',
    weight: '460 г',
    calories: '575 ккал',
    img: plateTwo,
    price: '1340 ₽',
    labels: [
      { light: nutsDark, dark: nuts },
      { light: glutenFreeDark, dark: glutenFree }
    ]
  },
  {
    title: 'Морской коктейль с пастой, винегретом и огурцами',
    description:
      'Морской коктейль, сопровождаемый аппетитной пастой, ароматным винегретом и освежающими огурцами, представляет собой насыщенное питательное блюдо',
    weight: '530 г',
    calories: '525 ккал',
    img: plateThree,
    price: '1750 ₽',
    labels: [
      { light: nutsDark, dark: nuts },
      { light: beefDark, dark: beef }
    ]
  },
  {
    title: 'Свиная шея с отварным картофелем и капустным салатом',
    description:
      'Свиная шея, приготовленная в сочных пряностях, сочетается с отварным картофелем и капустным салатом придавая блюду насыщенности',
    weight: '430 г',
    calories: '490 ккал',
    img: plateFour,
    price: '1800 ₽',
    labels: [
      { light: glutenFreeDark, dark: glutenFree },
      { light: beefDark, dark: beef }
    ]
  },
  {
    title: 'Фарш из телятины с пастой и овощным салатом',
    description:
      'Ароматный фарш из телятины, подается с пастой, и овощным салатом, делая его здоровым и вкусным выбором',
    weight: '530 г',
    calories: '690 ккал',
    img: plateFive,
    price: '1400 ₽',
    labels: [
      { light: nutsDark, dark: nuts },
      { light: glutenFreeDark, dark: glutenFree }
    ]
  },
  {
    title:
      'Куриная грудка с грибами c картофельным пюре, кукурузой и винегретом',
    description:
      'Золотистая куриная грудка с грибами подается на гарнире из кремового картофельного пюре, с добавлением кукурузы и легкого винегрета',
    weight: '510 г',
    calories: '360 ккал',
    img: plateSix,
    price: '1300 ₽',
    labels: [
      { light: beefDark, dark: beef },
      { light: glutenFreeDark, dark: glutenFree }
    ]
  },
  {
    title: 'Копченый палтус с кускусом, свеклой, помидорами и шпинатом',
    description:
      'Сочетание копченого палтуса с нежным кускусом, свеклой и сочными помидорами отличается своим богатством вкусов и питательностью',
    weight: '560 г',
    calories: '675 ккал',
    img: plateSeven,
    price: '1990 ₽',
    labels: [
      { light: nutsDark, dark: nuts },
      { light: glutenFreeDark, dark: glutenFree }
    ]
  },
  {
    title: 'Индейка с картофелем и салатом из свежей капусты и сочной груши',
    description:
      'Нежное мясо индейки, приготовленное с ароматными специями, подается с картофелем и необычным салатом из свежей капусты и сочной груши',
    weight: '460 г',
    calories: '575 ккал',
    img: plateEight,
    price: '1340 ₽',
    labels: [
      { light: beefDark, dark: beef },
      { light: glutenFreeDark, dark: glutenFree }
    ]
  },
];

export const ArcSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const theme = useSelector(state => state.theme);
  let tl = gsap.timeline({ paused: true, reversed: true });

  const [buttonText, setButtonText] = useState(plates[0].price);

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
		setButtonText(plates[next].price);
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
    }, 11000);

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
		  <div className={s.arcSlider__infoBlock__labels}>
          {plates[activeIndex].labels.map((label, index) => (
            <img key={index} src={theme === 'dark' ? label.dark : label.light} alt="label icon" />
          ))}
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
          title={buttonText}
          onClick={() => console.log('Button clicked')}
          colorScheme={1}
          size={1}
          onMouseEnter={() => setButtonText('в корзину')}
          onMouseLeave={() => setButtonText(plates[activeIndex].price)}
        />
        <div className={s.arcSlider__infoBlock__showAll}>
          <button className={s.arcSlider__infoBlock__showAllBtn}>
            смотреть все →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ArcSlider;
