import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import s from './styles.module.scss';
import searchIcon from '../../../assets/images/icons/search.svg';
import searchIconDark from '../../../assets/images/icons/searchDark.svg';

export function Input({ onSearch, width, colorScheme, ...props }) {
  const theme = useSelector(state => state.theme);

  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query);
    }
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const containerClass =
    colorScheme === 1 ? s.colorScheme__1 : s.colorScheme__2;

  const containerWidth = width === 'big' ? '1072px' : '422px';

  return (
    <div
      className={`${s.input__container} ${containerClass}`}
      style={{ width: containerWidth }}
    >
      <button onClick={handleSearch} className={s.input__button}>
        <img
          src={theme === 'dark' ? searchIconDark : searchIcon}
          alt="Search"
          width="24px"
          height="24px"
        />
      </button>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Поиск"
        className={s.input__field}
      />
    </div>
  );
}

Input.propTypes = {
  onSearch: PropTypes.func.isRequired,
  width: PropTypes.oneOf(['big', 'small']),
  colorScheme: PropTypes.number,
};
