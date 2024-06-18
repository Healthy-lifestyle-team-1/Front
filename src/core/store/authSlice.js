import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthorize: false,
  token: null, // добавление состояния токена
  // другие состояния аутентификации
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.isAuthorize = true;
      state.token = action.payload; // сохранение токена при логине
    },
    logoutSuccess: state => {
      state.isAuthorize = false;
      state.token = null; // удаление токена при логауте
    },
  },
});

export const { loginSuccess, logoutSuccess } = authSlice.actions;

export default authSlice.reducer;
