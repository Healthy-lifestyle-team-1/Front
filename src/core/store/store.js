import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../assets/styles/themes/slice';
import tagsReducer from './tagsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tags: tagsReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('activeTags', JSON.stringify(state.tags));
});
