import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global.js";

import theme from "./styles/theme.js";

// import { Details } from "./pages/Details/index.jsx";
// import { Home } from "./pages/Home/index.jsx";
import { Profile } from "./pages/Profile/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Profile />
    </ThemeProvider>
  </React.StrictMode>
);
