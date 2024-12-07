import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";
import AppRouter from "./routes/AppRouter";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <AppRouter />
  </ThemeProvider>
);

export default App;
