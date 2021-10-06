import Plant from "./PlantInfo";
import {data} from "../../PlantData";
import {useState} from "react";

function PlantsList({showCareGuide}) {
    const[plantsData, setPlantsData] = useState(data);
    
    return(
        <div className="container plants-list">
            <div className="row">
                {plantsData.map(function (plantInfo) {
                    return (
                        <Plant 
                            key={plantInfo.id}
                            plantInfo = {plantInfo}
                            showCareGuide={showCareGuide} 
                        />
                    )})
                }
            </div>
        </div>
    )
}

export default PlantsList;