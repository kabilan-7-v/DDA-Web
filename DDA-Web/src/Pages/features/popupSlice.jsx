// src/features/popupSlice.js
import { createSlice } from "@reduxjs/toolkit";

const popupSlice = createSlice({
  name: "popup",
  initialState: {
    visible: false,
    usercard: false,
    visible1: false,
  },
  reducers: {
    //home customer service
    showPopup: (state) => {
      state.visible = true;
    },
    hidePopup: (state) => {
      state.visible = false;
    },
    togglePopup: (state) => {
      state.visible = !state.visible;
    },
    // service customer service
    showPopup1: (state) => {
      state.visible1 = true;
    },
    hidePopup1: (state) => {
      state.visible1 = false;
    },
    togglePopup1: (state) => {
      state.visible1 = !state.visible1;
    },

    // user details
    showPopup2: (state) => {
      state.usercard = true;
    },
    hidePopup2: (state) => {
      state.usercard = false;
    },
    togglePopup2: (state) => {
      state.usercard = !state.usercard;
    },
  },
});

export const {
  showPopup,
  hidePopup,
  togglePopup,
  showPopup1,
  hidePopup1,
  togglePopup1,
  showPopup2,
  hidePopup2,
  togglePopup2,
} = popupSlice.actions;
export default popupSlice.reducer;
