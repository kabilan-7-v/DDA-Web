// src/features/popupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const popupSlice = createSlice({
  name: 'popup',
  initialState: {
    visible: false,
  },
  reducers: {
    showPopup: (state) => {
      state.visible = true;
    },
    hidePopup: (state) => {
      state.visible = false;
    },
    togglePopup: (state) => {
      state.visible = !state.visible;
    },
  },
});

export const { showPopup, hidePopup, togglePopup } = popupSlice.actions;
export default popupSlice.reducer;
