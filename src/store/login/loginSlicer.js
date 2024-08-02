import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  userInfo: {},
};

const loginSlicer = createSlice({
  name: "login",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.userInfo = action.payload.userInfo;
    },
  },
});

export const { login } = loginSlicer.actions;
export default loginSlicer.reducer;
