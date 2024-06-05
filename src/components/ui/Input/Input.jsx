import React, { useState } from 'react';
import s from './styles.module.scss';
import searchIcon from '../../../assets/images/icons/search-icon.svg';

export function Input({ onSearch, width = '300px', colorScheme = 1 }) {
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

  return (
    <div
      className={`${s.input__container} ${containerClass}`}
      style={{ width }}
    >
      <button onClick={handleSearch} className={s.input__button}>
        <img src={searchIcon} alt="Search" width="24px" height="24px" />
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
