import {data} from "../../PlantData";
import PlantsList from "./PlantsList";
import Header from "./Header";

function AllPlants() {
    return(
        <div className="container-fluid">
            <Header />
            <PlantsList data ={data} />
        </div>
    )
}

export default AllPlants;