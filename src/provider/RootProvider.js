import Loader from "../component/common/Loader";
import ToastMessage from "../component/common/ToastMessage";
import { ReduxProvider } from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";

export const RootProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        <ToastMessage />
        <Loader />
        {children}
      </ReduxProvider>
    </ThemeProvider>
  );
};
