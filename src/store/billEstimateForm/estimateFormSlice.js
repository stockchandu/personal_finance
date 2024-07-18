import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fromUnits : "",
    toUnits : ""
}

const slicer = {
    name : 'estimateForm',
    initialState,
    reducers :{
        saveFormFromUnits(state,action){
            const { name, value } = action.payload;
            state[name]  = value
        }
    }
}
export const estimateFormSlice = createSlice(slicer)

export const {saveFormFromUnits} = estimateFormSlice.actions;
export default estimateFormSlice.reducer;