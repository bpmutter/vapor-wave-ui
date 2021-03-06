import React from "react";
import { ThemeProvider } from "theme-ui";
import "../style/neo-vw.css";
import theme from "../style/theme";

export default function AestheticProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
