import PlantToolbar from "./PlantToolbar";
import PlantsList from "./PlantsList";
import {useState} from "react";

function Plants(){
    const [showCareGuide, setShowCareGuide] = useState(true);
    
    return(
        <>
            <PlantToolbar 
                showCareGuide={showCareGuide}
                setShowCareGuide={setShowCareGuide}
            />
            <PlantsList showCareGuide={showCareGuide} />
        </>
    )
}

export default Plants;