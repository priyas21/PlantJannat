import {data} from "../../PlantData";
import PlantsList from "./PlantsList";

function AllPlants() {
    return(
        <div className="container-fluid">
            <PlantsList data ={data} />
        </div>
    )
}

export default AllPlants;