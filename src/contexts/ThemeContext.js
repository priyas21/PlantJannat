import React, { createContext } from "react";
import useTheme from "../hooks/useTheme";

export const ThemeContext = createContext();

// We create this custom React Context which allows us to wrap ThemeContext.Provider as well
// as the state in it.
function ThemeProvider({children, startingTheme}) {
    const { theme, setTheme } = useTheme(startingTheme);

    return (
        <ThemeContext.Provider value = {{setTheme, theme}} >
            {children}
        </ThemeContext.Provider>
    );
}
export { ThemeProvider };