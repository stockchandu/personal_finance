import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import mpfSlicer from "./mpfData/mpfSlicer";
import dialogSlicer from "./dialog/dialogSlicer";

const persistConfig = {
  key : 'root',
  storage,
  whitelist: ['mpfData'],
  blacklist:['dialogData']
}

const rootReducers = combineReducers({
  mpfData: mpfSlicer,
  dialogData : dialogSlicer
});

const persistedReducer  = persistReducer(persistConfig,rootReducers)

export const store = configureStore({
  reducer: persistedReducer ,
//   to disable enable and check middle ware things
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)