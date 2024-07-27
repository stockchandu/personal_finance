import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mpfData: [],
  isMPFData : false
};

const mpfSlicer = createSlice({
  name: "mpf",
  initialState,
  reducers: {
    saveMpfData(state, action) {
    state.mpfData = action.payload;
     if(action.payload){
        state.isMPFData = true
     }
    },
  },
});

export const { saveMpfData } = mpfSlicer.actions;
export default mpfSlicer.reducer;
