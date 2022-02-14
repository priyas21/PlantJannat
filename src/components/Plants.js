import PlantToolbar from "./PlantToolbar";
import PlantsList from "./PlantsList";
import { ShowCareGuideProvider } from "../contexts/ShowCareGuideContext";

function Plants(){

    return(
        <ShowCareGuideProvider startingShowCareGuide={false}>
            <PlantToolbar/>
            <PlantsList />
        </ShowCareGuideProvider>
    )
}

export default Plants;