import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import { Work } from "./pages/Work/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Work />
    </ThemeProvider>
  </React.StrictMode>
);
