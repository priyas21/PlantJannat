function CareGuide({difficultyRating, plantingTime, potting, pruning}) {
    return(
        <span className="careGuide w-100 h-100">
            <strong>Difficulty Rating: </strong>{difficultyRating}
            <strong>Planting Time: </strong>{plantingTime}
            <strong>Potting: </strong> {potting}
            <strong>Pruning: </strong> {pruning}
        </span>
    )
}

function PlantImage({plantName, botanicalName}) {
    return(
        <div className="plant-img d-flex flex-row justify-content-center align-items-center h-300">
            <img
                className="contain-fit"
                src={`/images/${plantName}.jpg`}
                height="200"
                alt={`${{botanicalName}}`}
            />
        </div>
    )
}

function PlantDemographics({botanicalName, description, water, fertilization, sun, soil }) {
    return (
        <div className="plant-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {botanicalName}
                </h3>
            </div>
            <div>
                <p className="card-description">
                    {description}
                </p>
                <div className="social d-flex flex-row mt-4">
                    <div className="bi-droplet">
                        <h5>Water</h5>
                        <h6>{water}</h6>
                    </div>
                    <div className="bi-flower1">
                        <h5>Fertilization</h5>
                        <h6>{fertilization}</h6>
                    </div>
                    <div className="bi-sun">
                        <h5>Sun</h5>
                        <h6>{sun}</h6>
                    </div>
                    <div className="bi-phone-landscape">
                        <h5>Soil</h5>
                        <h6>{soil}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Plant({plantInfo}) {
    const{plantName, botanicalName, careGuide} = plantInfo;
    return(
        <div className="col-xs-12 col-sm-12 col-md-16 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-3 mt-3">
                <PlantImage plantName = {plantName} botanicalName={botanicalName}/>
                <PlantDemographics {...plantInfo} />
                <div className="careGuideBox card h-30">
                    <CareGuide {...careGuide}/>
                </div>
            </div>
        </div>
    )
}

export default Plant;