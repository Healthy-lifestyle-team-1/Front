import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import s from './styles.module.scss';
import plateOne from '../../../../assets/images/plates/Plate.png';
import plateTwo from '../../../../assets/images/plates/Plate2.png';
import plateThree from '../../../../assets/images/plates/Plate3.png';
import plateFour from '../../../../assets/images/plates/Plate4.png';
import plateFive from '../../../../assets/images/plates/Plate5.png';
import plateSix from '../../../../assets/images/plates/Plate6.png';
import board from '../../../../assets/images/Board.png';

gsap.registerPlugin(MotionPathPlugin);

export const ArcSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemsRef = useRef([]);
  const circlePathRef = useRef(null);
  const timelineRef = useRef(null);
  const trackerRef = useRef({ item: 0 });

  const initializeAnimation = () => {
    if (circlePathRef.current) {
      circlePathRef.current.remove();
    }

    const circlePath = MotionPathPlugin.convertToPath('#holder', false)[0];
    circlePath.id = 'circlePath';
    const svg = document.querySelector('svg');
    if (svg) {
      svg.prepend(circlePath);
    }

    circlePathRef.current = circlePath;
    const items = itemsRef.current;
    const numItems = items.length;
    const itemStep = 1 / numItems;
    const wrapProgress = gsap.utils.wrap(0, 1);
    const snap = gsap.utils.snap(itemStep);
    const wrapTracker = gsap.utils.wrap(0, numItems);
    const tracker = trackerRef.current;

    gsap.set(items, {
      motionPath: {
        path: circlePath,
        align: circlePath,
        alignOrigin: [0.5, 0.5],
        end: i => i / items.length,
      },
      scale: 0.6,
    });

    gsap.set(`.${s.arc__wrapper}`, {
      rotation: -90,
      transformOrigin: 'center',
    });

    gsap.set(items, {
      rotation: 90,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.to(`.${s.arc__wrapper}`, {
      rotation: 270,
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

    timelineRef.current = tl;
  };

  useEffect(() => {
    const items = gsap.utils.toArray(`.${s.item}`);
    itemsRef.current = items;
    initializeAnimation();

    const handleResize = () => {
      const progress = timelineRef.current.progress();
      const currentItem = trackerRef.current.item;
      timelineRef.current.kill();
      initializeAnimation();
      timelineRef.current.progress(progress);
      trackerRef.current.item = currentItem;
      setActiveIndex(currentItem);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      timelineRef.current.kill();
    };
  }, []);

  return (
    <div className={s.arc__container}>
      <div className={s.arc__wrapper}>
        <div className={`${s.item} ${activeIndex === 0 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateOne} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 1 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateTwo} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 2 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateThree} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 3 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateFour} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 4 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateFive} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 5 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateSix} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 6 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateOne} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 7 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateTwo} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 8 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateFour} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 9 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateFive} alt="" />
        </div>

        <svg className={s.svg} viewBox="0 0 400 400">
          <circle
            id="holder"
            className={s.st0}
            cx="200"
            cy="200"
            r="139"
            fill="none"
          />
          <image
            className={s.board}
            href={board}
            x="-10"
            y="-19"
            width="421"
            height="421"
          />
        </svg>
      </div>
    </div>
  );
};

<svg className={s.svg} viewBox="0 0 100% 100%">
  <circle id="holder" className={s.st0} cx="50%" cy="50%" r="45%" fill="none" />
  <image
    className={s.board}
    href={board}
    x="-16.25%"
    y="-19%"
    width="132.5%"
    height="132.5%"
  />
</svg>;
