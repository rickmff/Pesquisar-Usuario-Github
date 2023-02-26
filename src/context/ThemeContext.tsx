import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../styles/themes";

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: any) => {
  const [lightMode, setLightMode] = useState<boolean>(false);

  function changeTheme(): void {
    setLightMode(prev => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "light" && setLightMode(true);

  }, [])

  useEffect(() => {
    const mode = lightMode ? "light" : "dark"

    localStorage.setItem("theme", mode)
  })

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode}}>
        <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
            {props.children}
        </ThemeProvider>
    </ThemeContext.Provider>
  );
};