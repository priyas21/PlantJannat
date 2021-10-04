import {data} from "../../PlantData";
import Header from "./Header";
import Plants from "./Plants";
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("light");
    return(
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} />
            <Plants data = {data} theme = {theme} setTheme = {setTheme} />
        </div>
    )
}

export default App;