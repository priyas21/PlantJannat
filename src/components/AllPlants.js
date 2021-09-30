import {data} from "../../PlantData";
import PlantsList from "./PlantsList";
import Header from "./Header";
import PlantToolbar from "./PlantToolbar"

function AllPlants() {
    return(
        <div className="container-fluid">
            <Header />
            <PlantToolbar />
            <PlantsList data ={data} />
        </div>
    )
}

export default AllPlants;