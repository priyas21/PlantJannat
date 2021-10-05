import PlantToolbar from "./PlantToolbar";
import PlantsList from "./PlantsList";
import {useState} from "react";

function Plants({data, theme, setTheme}){
    const [showCareGuide, setShowCareGuide] = useState(true);
    
    return(
        <>
            <PlantToolbar 
                theme={theme}
                setTheme={setTheme}
                showCareGuide={showCareGuide}
                setShowCareGuide={setShowCareGuide}
            />
            <PlantsList data ={data} showCareGuide={showCareGuide} />
        </>
    )
}

export default Plants;