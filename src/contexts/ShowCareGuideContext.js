import React, {createContext} from "react";
import useShowCareGuide from "../hooks/useShowCareGuide"; 

const ShowCareGuideContext = createContext();

function ShowCareGuideProvider({children, startingShowCareGuide = false}) {
    const { showCareGuide, setShowCareGuide } = useShowCareGuide(startingShowCareGuide);
    
    return(
        <ShowCareGuideContext.Provider value={
            {showCareGuide, setShowCareGuide}
        }>
            {children}
        </ShowCareGuideContext.Provider>
    );
}

export { ShowCareGuideContext, ShowCareGuideProvider };