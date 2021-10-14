import Plant from "./PlantInfo";
import {data} from "../../PlantData";
import {useState} from "react";

function PlantsList({showCareGuide}) {
    const[plantsData, setPlantsData] = useState(data);

    function onAddToMyGardenToggle(id){
        const plantRecPrevious = plantsData.find(function (rec){
            return rec.id === id;
        });
        
        const plantRecUpdated = {
            ...plantRecPrevious,
            addToMyGarden: !plantRecPrevious.addToMyGarden
        };
        
        const plantsDataNew = plantsData.map(function (rec){
            return rec.id === id ? plantRecUpdated : rec;
        });
        
        setPlantsData(plantsDataNew);
    }
    
    return(
        <div className="container plants-list">
            <div className="row">
                {plantsData.map(function (plantInfo) {
                    return (
                        <Plant 
                            key={plantInfo.id}
                            plantInfo = {plantInfo}
                            showCareGuide={showCareGuide}
                            onAddToMyGardenToggle={() => {onAddToMyGardenToggle(plantInfo.id)}}
                        />
                    )})
                }
            </div>
        </div>
    )
}


export default PlantsList;