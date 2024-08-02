import Loader from "../component/common/Loader";
import { ReduxProvider } from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";
// Loader

export const RootProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ReduxProvider>
      <Loader />
        {children}
      </ReduxProvider>
    </ThemeProvider>
  );
};
