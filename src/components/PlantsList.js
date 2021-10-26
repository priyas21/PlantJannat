import Plant from "./PlantInfo";
import {data} from "../../PlantData";
import {useEffect, useState} from "react";
import ReactPlaceholder from "react-placeholder";

function PlantsList({showCareGuide}) {
    const[plantsData, setPlantsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");
    
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    
    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(2000);
                setIsLoading(false);
                setPlantsData(data)
            }
            catch (e) {
                setIsLoading(false);
                setHasErrored(true);
                setError(e);
            }
        }
        delayFunc();
    },[]);

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
    
    if(hasErrored === true) {
        return (
            <div className="danger">
                Error: <b>Loading Plants data failed {error}</b>
            </div>
        )
    }
    
    return(
        <div className="container plants-list">
            <ReactPlaceholder 
                type="media"
                rows={15}
                className="plantslist-placeholder"
                ready={isLoading===false}
            >
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
            </ReactPlaceholder>
        </div>
    )
}


export default PlantsList;