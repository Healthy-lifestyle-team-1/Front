import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
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
      scale: 0.8,
    });

    gsap.set(`.${s.wrapper}`, {
      rotation: -90,
      transformOrigin: 'center',
    });

    gsap.set(items, {
      rotation: 90,
      transformOrigin: 'center',
    });

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.to(`.${s.wrapper}`, {
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
  }, []);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
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
        <div className={`${s.item} ${activeIndex === 10 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateSix} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 11 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateOne} alt="" />
        </div>
        <div className={`${s.item} ${activeIndex === 12 ? s.active : ''}`}>
          <img className={s.itemImg} src={plateTwo} alt="" />
        </div>
        <svg viewBox="0 0 300 300">
          <circle id="holder" className={s.st0} cx="151" cy="151" r="150" fill='none' />
          <image
            className={s.board}
            href={board}
            x="-110"
            y="-110"
            width="520"
            height="500"
          />
        </svg>
        <div color={s.background}></div>
      </div>
    </div>
  );
};
