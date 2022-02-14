import React, {createContext} from "react";
import usePlantsFilter from "../hooks/usePlantsFilter"; 

const PlantsFilterContext = createContext();

function PlantsFilterProvider({children, startingShowCareGuide = false, startingEventYear = "2020"}) {
    const { 
        showCareGuide, setShowCareGuide, 
        eventYear, setEventYear, 
        searchQuery, setSearchQuery
    } = usePlantsFilter(startingShowCareGuide, startingEventYear);
    
    return(
        <PlantsFilterContext.Provider value={
            {
                showCareGuide, setShowCareGuide,
                eventYear, setEventYear,
                searchQuery, setSearchQuery
            }
        }>
            {children}
        </PlantsFilterContext.Provider>
    );
}

export { PlantsFilterContext, PlantsFilterProvider };