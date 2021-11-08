import Plant from "./PlantInfo";
import ReactPlaceholder from "react-placeholder";
import useRequestPlantsInfo, {REQUEST_STATUS} from "../hooks/useRequesPlantsInfo";

function PlantsList({showCareGuide}) {
    
    const {
        plantsData, 
        requestStatus,
        error,
        onAddToMyGardenToggle 
    } = useRequestPlantsInfo(2000);
    
    if(requestStatus === REQUEST_STATUS.FAILURE) {
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
                ready={requestStatus===REQUEST_STATUS.SUCCESS}
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