import { ReduxProvider } from "./ReduxProvider";
import { ThemeProvider } from "./ThemeProvider";

export const RootProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <ReduxProvider>
        {children}
      </ReduxProvider>
    </ThemeProvider>
  );
};
