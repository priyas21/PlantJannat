import {useState} from "react";

function CareGuide({difficultyRating, plantingTime, potting, pruning}) {
    return(
        <span className="careGuide">
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
function AddToMyGarden({addToMyGarden, onAddToMyGardenToggle}){
    const[inTransition, setInTransition] = useState(false);
    function doneCallback() {
        setInTransition(false);
    }
    
    return (
        <div className="action padB1">
            <span onClick={ function () {
                setInTransition(true);
                return onAddToMyGardenToggle(doneCallback);
            }}>
                <i className={addToMyGarden === true ?
                    "fa fa-star orange" : "fa fa-star-o orange"
                }
                /> {" "}
                Add To My Garden{" "}
                {inTransition ? (
                    <span className="fas fa-circle-notch fa-spin"></span>
                ) : null}
            </span>
        </div>

    )
}

function PlantDemographics({botanicalName, description, water, fertilization, sun, soil, addToMyGarden, onAddToMyGardenToggle }) {
    return (
        <div className="plant-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {botanicalName}
                </h3>
            </div>
            <AddToMyGarden 
            addToMyGarden = {addToMyGarden} 
            onAddToMyGardenToggle={onAddToMyGardenToggle}/>
            <div>
                <p className="card-description">
                    {description}
                </p>
                <div className="social d-flex flex-row mt-4 mb-2">
                    <div className="bi-droplet">
                        <h5>Water</h5>
                        <h6>{water}</h6>
                    </div>
                    <div className="bi-flower1">
                        <h5>Feed</h5>
                        <h6>{fertilization}</h6>
                    </div>
                    <div className="bi-sun">
                        <h5>Sun</h5>
                        <h6>{sun}</h6>
                    </div>
                    <div className="bi-tree">
                        <h5>Soil</h5>
                        <h6>{soil}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Plant({plantInfo, showCareGuide, onAddToMyGardenToggle}) {
    const{plantName, botanicalName, careGuide} = plantInfo;
    return(
        <div className="col-xs-12 col-sm-12 col-md-16 col-lg-4 col-sm-12 col-xs-12">
            <div className="card card-height p-3 mt-3">
                <PlantImage plantName = {plantName} botanicalName={botanicalName}/>
                <PlantDemographics {...plantInfo} onAddToMyGardenToggle = {onAddToMyGardenToggle} />
                {showCareGuide === true ?
                    <div className="careGuideBox card h-30">
                        <CareGuide {...careGuide}/>
                    </div>
                : null }
            </div>
        </div>
    )
}

export default Plant;