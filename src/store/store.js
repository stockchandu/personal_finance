import { configureStore } from "@reduxjs/toolkit";
import billEstimateReducers from "./billEstimateForm/estimateFormSlice";

const reducers = {
  estimateForm: billEstimateReducers,
};

export const store = configureStore({
  reducer: reducers,
//   to disable enable and check middle ware things
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
});
