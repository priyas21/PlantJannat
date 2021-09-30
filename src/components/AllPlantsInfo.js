import {data} from "../../PlantData";
import Plant from "./PlantInfo";

function AllPlantsInfo() {
    return(
        <div className="container plants-list">
            <div className="row">
                {data.map(function (plantInfo) {
                    return (
                        <Plant key={plantInfo.id} plantInfo = {plantInfo} />
                    )})
                }
            </div>
        </div>
    )
}

export default AllPlantsInfo;