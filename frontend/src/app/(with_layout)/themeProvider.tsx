"use client";

import { ThemeProvider } from "@greensight/gds/emotion";
import theme from "./theme";

const ThemeProviderComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
