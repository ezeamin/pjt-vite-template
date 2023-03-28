import { createSlice } from '@reduxjs/toolkit';

import { themes } from '../constants/themes';

const initialState = { theme: localStorage.getItem('theme') || themes.LIGHT };

const globalDataSlice = createSlice({
  name: 'globalData',
  initialState,
  reducers: {
    setTheme: (state, action) => {
      switch (action.payload) {
        case themes.DARK:
          state.theme = themes.DARK;
          localStorage.setItem('theme', themes.DARK);
          break;
        case themes.LIGHT:
          state.theme = themes.LIGHT;
          localStorage.setItem('theme', themes.LIGHT);
          break;
        default:
          return;
      }
    },
  },
});

export const { setTheme } = globalDataSlice.actions;

export default globalDataSlice.reducer;
