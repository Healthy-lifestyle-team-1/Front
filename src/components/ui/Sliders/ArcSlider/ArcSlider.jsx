import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import s from './styles.module.scss';
import plateOne from '../../../../assets/images/plates/Plate.png';
import plateTwo from '../../../../assets/images/plates/Plate5.png';
import plateThree from '../../../../assets/images/plates/Plate2.png';

gsap.registerPlugin(MotionPathPlugin);

export const ArcSlider = () => {
  useEffect(() => {
    const circlePath = MotionPathPlugin.convertToPath("#holder", false)[0];
    circlePath.id = "circlePath";
    const svg = document.querySelector("svg");
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
        end: i => i / items.length
      }, 
      scale: 0.9 
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
      ease: 'none'
    });

    tl.to(items, {
      rotation: "-=360", 
      transformOrigin: 'center', 
      duration: 1, 
      ease: 'none',
    }, 0);

    tl.to(tracker, {
      item: numItems,
      duration: 1, 
      ease: 'none',
      modifiers: {
        item(value) {
          return wrapTracker(numItems - Math.round(value));
        }
      }
    }, 0);

    items.forEach((el, i) => {
      el.addEventListener("click", () => {
        const current = tracker.item;
        const activeItem = i;

        if (i === current) {
          return;
        }

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

    document.getElementById('next')?.addEventListener("click", () => moveWheel(-itemStep));
    document.getElementById('prev')?.addEventListener("click", () => moveWheel(itemStep));

    const moveWheel = (amount) => {
      const progress = tl.progress();
      tl.progress(wrapProgress(snap(tl.progress() + amount)));
      const next = tracker.item;
      tl.progress(progress);

      gsap.to(tl, {
        progress: snap(tl.progress() + amount),
        modifiers: {
          progress: wrapProgress
        }
      });

      updateActiveItem(next);
    };

    const updateActiveItem = (activeIndex) => {
      const activeElement = document.querySelector(`.${s.item}.active`);
      if (activeElement) {
        activeElement.classList.remove('active');
      }
      items[activeIndex].classList.add('active');
    };


    updateActiveItem(0);
  }, []);

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.item}><img className={s.itemImg} src={plateOne} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateTwo} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateThree} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateOne} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateTwo} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateThree} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateOne} alt="" /></div>
        <div className={s.item}><img className={s.itemImg} src={plateTwo} alt="" /></div>
        <svg viewBox="0 0 300 300">
          <circle id="holder" className={s.st0} cx="151" cy="151" r="150" />
        </svg>
      </div>
    </div>
  );
};
