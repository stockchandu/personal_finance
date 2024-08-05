import { createTheme, ThemeProvider as MaterialThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme({
  typography: {
    fontFamily: [
      '"Lato"',
      // 'Kanit',
      'Roboto', // Fallback fonts
      'sans-serif',
    ].join(','),
  },
});

export const ThemeProvider = ({ children }) => {
  return <MaterialThemeProvider theme={defaultTheme}>{children}</MaterialThemeProvider>;
};
