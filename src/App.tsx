import React from "react";
import { Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import GlobalStyles from "./styles/globalStyles";

const Home = () => (
  <div>
    <h1>Welcome to the Food App!</h1>
    <nav>
      <Link to="/">Home</Link>
    </nav>
  </div>
);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Routes>
        <Route path="/" element={<Home />} />
    </Routes>
  </ThemeProvider>
  );
};

export default App;
