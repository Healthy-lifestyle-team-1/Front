import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorize: false,
  // другие состояния аутентификации
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: state => {
      state.isAuthorize = true;
    },
    logoutSuccess: state => {
      state.isAuthorize = false;
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
