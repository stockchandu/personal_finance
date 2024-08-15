import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import mpfSlicer from "./mpfData/mpfSlicer";
import dialogSlicer from "./dialog/dialogSlicer";
import loaderSlicer from "./loader/loaderSlicer";
import loginSlicer from "./login/loginSlicer";
import toastSlicer from "./toast/toastSlicer";

const persistConfig = {
  key : 'root',
  storage,
  // 'mpfData',
  whitelist: ['loginData'],
  blacklist:['dialogData']
}

const rootReducers = combineReducers({
  mpfData: mpfSlicer,
  dialogData : dialogSlicer,
  loaderData : loaderSlicer,
  loginData : loginSlicer,
  toastData : toastSlicer
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