import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
  name: "userRegister",
  initialState: {
    error: false,
    userInfo: null,
  },
  reducers: {
    registerStart: (state) => {
    },
    registerSuccess: (state, action) => {
      state.currentUser = action.payload;
    },
    registerFailure: (state) => {
      state.error = true;
    },
  },
});

export const { registerStart, registerSuccess, registerFailure } = registerSlice.actions;
export default registerSlice.reducer;