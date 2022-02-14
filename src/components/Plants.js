import PlantToolbar from "./PlantToolbar";
import PlantsList from "./PlantsList";
import { PlantsFilterProvider } from "../contexts/PlantsFilterContext";

function Plants(){

    return(
        <PlantsFilterProvider startingShowCareGuide={false}>
            <PlantToolbar/>
            <PlantsList />
        </PlantsFilterProvider>
    )
}

export default Plants;