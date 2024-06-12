import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../../assets/styles/themes/slice';
import tagsReducer from './tagsSlice';
import authReducer from './authSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    tags: tagsReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('activeTags', JSON.stringify(state.tags));
});
