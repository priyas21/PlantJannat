import Plant from "./PlantInfo";

function PlantsList({data, showCareGuide}) {
    return(
        <div className="container plants-list">
            <div className="row">
                {data.map(function (plantInfo) {
                    return (
                        <Plant key={plantInfo.id} plantInfo = {plantInfo} showCareGuide={showCareGuide} />
                    )})
                }
            </div>
        </div>
    )
}

export default PlantsList;