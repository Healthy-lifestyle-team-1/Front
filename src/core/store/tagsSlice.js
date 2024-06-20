import { createSlice } from '@reduxjs/toolkit';

const getActiveTags = () => {
  const savedTags = window.localStorage.getItem('activeTags');
  return Array.isArray(savedTags) ? JSON.parse(savedTags) : [];
};

const initialState = getActiveTags();

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    toggleTag: (state, action) => {
      const tagIndex = action.payload;
      if (state.includes(tagIndex)) {
        return state.filter(index => index !== tagIndex);
      } else {
        return [...state, tagIndex];
      }
    },
    setTags: (state, action) => {
      return action.payload;
    },
  },
});

export const { toggleTag, setTags } = tagsSlice.actions;

export default tagsSlice.reducer;
