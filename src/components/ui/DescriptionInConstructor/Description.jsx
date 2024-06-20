import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { icons } from '../../../assets/images/icons/icons';

import s from './styles.module.scss';

const Description = ({ title, price, subtitle, tags = [], allTags = [] }) => {
  const theme = useSelector(state => state.theme);

  useEffect(() => {
    console.log('tags:', tags);
    console.log('allTags:', allTags);
  }, [tags, allTags]);

  const getTagNameById = id => {
    const tag = allTags.find(tag => tag.id === id);
    return tag ? tag.name : 'Unknown';
  };

  return (
    <div className={s.main__description}>
      <div className={s.main__tags}>
        {tags.length > 0 ? (
          tags.map((tagId, index) => {
            const tagName = getTagNameById(tagId);
            const iconSrc = icons[theme][tagName];
            return (
              iconSrc && (
                <img
                  key={index}
                  src={iconSrc}
                  alt={tagName}
                  className={s.icon}
                />
              )
            );
          })
        ) : (
          <div className={s.invisibleBlock}></div>
        )}
      </div>
      <div className={s.main__title}>{title}</div>
      <div className={s.main__price}>{price}</div>
      <div className={s.main__info_title}>Описание</div>
      <div className={s.main__subtitle}>{subtitle}</div>
    </div>
  );
};

export default Description;
