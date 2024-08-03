import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isDialog: false,
  dialogData: {},
  pageSource: {
    sectionName: "",
    operation: "", // create , update and edit
  },
  deleteData:[]
};

const dialogSlicer = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    saveDialogData(state, action) {
      state.dialogData = action.payload.dialogData;
    },
    openDialog(state, action) {
      state.isDialog = action.payload.isDialog;
    },
    pageSource(state, action) {
      state.pageSource = action.payload.pageSource;
    },
    saveDeleteData(state, action){
      state.deleteData = action.payload.deleteData;
    }
  },
});

export const { saveDialogData, openDialog, pageSource,saveDeleteData } = dialogSlicer.actions;
export default dialogSlicer.reducer;