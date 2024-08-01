import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoader: false,
};

const loaderSlicer = createSlice({
  name: "loader",
  initialState,
  reducers: {
    openLoader(state,action){
        state.isLoader = action.payload;
    }
  },
});

export const { openLoader } = loaderSlicer.actions;
export default loaderSlicer.reducer;
