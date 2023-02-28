import { createContext, ReactNode, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = ({ children }:ThemeContextProviderProps) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  function changeTheme(): void {
    setLightMode((prev) => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true);
  }, []);

  useEffect(() => {
    const mode = lightMode ? "light" : "dark";

    localStorage.setItem("theme", mode);
  }, []);

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
