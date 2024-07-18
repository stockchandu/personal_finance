import { createTheme, ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export const ThemeProvider = ({ children }) => {
  return <MaterialThemeProvider theme={defaultTheme}>{children}</MaterialThemeProvider>;
};
