import { createSlice } from '@reduxjs/toolkit';

const selectedTagSlice = createSlice({
  name: 'selectedTag',
  initialState: null,
  reducers: {
    setSelectedTag: (state, action) => action.payload,
  },
});

export const { setSelectedTag } = selectedTagSlice.actions;

export default selectedTagSlice.reducer;
