import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../assets/styles/themes/slice';
import tagsReducer from './tagsSlice';
import authReducer from './authSlice';
import starsReducer from './starsSlice';
import selectedTagReducer from './selectedTagsSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tags: tagsReducer,
    auth: authReducer,
    stars: starsReducer,
    selectedTag: selectedTagReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('activeTags', JSON.stringify(state.tags));
});
