import Plant from "./PlantInfo";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import {data} from "../../PlantData";

function PlantsList({showCareGuide}) {
    
    const {
        data: plantsData, 
        requestStatus,
        error,
        updateRecord 
    } = useRequestDelay(1000, data );
    
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
                                onAddToMyGardenToggle={(doneCallback) => {
                                    updateRecord({
                                        ...plantInfo,
                                        addToMyGarden: !plantInfo.addToMyGarden,
                                    }, doneCallback);
                                }}
                            />
                        )})
                    }
                </div>
            </ReactPlaceholder>
        </div>
    )
}


export default PlantsList;