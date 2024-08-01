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
    // state.isDialog = action.payload;
    // TODO : check how to store dialog content data to the db asyn use redux thunk
    },
    openDialog(state,action){
        console.log(action)
        state.isDialog = action.payload.isDialog;
        state.dialogData = action.payload.dialogData;
    }
  },
});

export const { saveDialogData ,openDialog} = dialogSlicer.actions;
export default dialogSlicer.reducer;
