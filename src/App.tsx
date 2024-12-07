import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <div>App</div>
  </ThemeProvider>
);

export default App;
