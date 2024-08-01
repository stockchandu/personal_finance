import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDialog: false,
  dialogData : {}
};

const dialogSlicer = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    saveDialogData(state, action) {
      state.dialogData = action.payload.dialogData;
    },
    openDialog(state,action){
        state.isDialog = action.payload.isDialog;
    }
  },
});

export const { saveDialogData ,openDialog} = dialogSlicer.actions;
export default dialogSlicer.reducer;
