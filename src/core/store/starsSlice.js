import { createSlice } from '@reduxjs/toolkit';

// Retrieve initial state from localStorage if available
const initialState =
  JSON.parse(window.localStorage.getItem('activeTags')) || [];

const starsSlice = createSlice({
  name: 'stars',
  initialState,
  reducers: {
    setStarRating: (state, action) => {
      const rating = action.payload;
      return Array.from({ length: rating + 1 }, (_, index) => index);
    },
  },
});

export const { setStarRating } = starsSlice.actions;
export default starsSlice.reducer;
