import Header from "./Header";
import Plants from "./Plants";
import { useState, createContext } from "react";

export const ThemeContext = createContext();

function App() {
    
    const [theme, setTheme] = useState("light");
    return(
        <ThemeContext.Provider value = {{setTheme, theme}} >
            <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
                <Header />
                <Plants />
            </div>
        </ThemeContext.Provider>
    )
}

export default App;