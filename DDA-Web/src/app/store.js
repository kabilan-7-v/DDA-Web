// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import popupReducer from '../Pages/features/popupSlice';

export const store = configureStore({
  reducer: {
    popup: popupReducer,
  },
});
