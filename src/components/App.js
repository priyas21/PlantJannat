import {data} from "../../PlantData";
import PlantsList from "./PlantsList";
import Header from "./Header";
import PlantToolbar from "./PlantToolbar"
import {useState} from "react";

function App() {
    const [theme, setTheme] = useState("light");
    return(
        <div className={theme === "light" ? "container-fluid light" : "container-fluid dark"}>
            <Header theme={theme} />
            <PlantToolbar theme={theme} setTheme={setTheme}/>
            <PlantsList data ={data} />
        </div>
    )
}

export default App;