import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message : "",
  bgColor : "",
  duration : ""
};

const toastSlicer = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast(state,action){
        state.open = action.payload.open;
        state.message = action.payload.message;
        state.bgColor = action.payload.bgColor;
        state.duration = action.payload.duration;
    },
    closeToast(state,action){
        state.open = action.payload.open;
        state.message = ""
        state.bgColor = ""
        state.duration = ""
    }
  },
});

export const { openToast ,closeToast} = toastSlicer.actions;
export default toastSlicer.reducer;
