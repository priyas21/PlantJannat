import React, {createContext} from "react";
import usePlantsFilter from "../hooks/usePlantsFilter"; 

const PlantsFilterContext = createContext();

function PlantsFilterProvider({children, startingShowCareGuide = false}) {
    const { 
        showCareGuide, setShowCareGuide,
        searchQuery, setSearchQuery
    } = usePlantsFilter(startingShowCareGuide);
    
    return(
        <PlantsFilterContext.Provider value={
            {
                showCareGuide, setShowCareGuide,
                searchQuery, setSearchQuery
            }
        }>
            {children}
        </PlantsFilterContext.Provider>
    );
}

export { PlantsFilterContext, PlantsFilterProvider };