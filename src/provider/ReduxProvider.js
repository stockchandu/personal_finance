import { Provider } from "react-redux";
import { persistor, store } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";

export const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
