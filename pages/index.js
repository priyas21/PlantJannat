import {data} from "../PlantData";

function CareGuide({sun, soil, difficultyRating, plantingTime, potting, pruning}) {
    return(
        <span className="careGuide w-100 h-100">
            <strong>Sun: </strong>{sun}
            <strong>Soil: </strong>{soil}
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

function PlantDemographics({botanicalName, description, water, fertilization }) {
    return (
        <div className="plant-info">
            <div className="d-flex justify-content-between mb-3">
                <h3 className="text-truncate w-200">
                    {botanicalName}
                </h3>
            </div>
            <div>
                <p>
                    {description}{water}{fertilization}
                </p>
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
const IndexPage = () => {
    const {id, plantName, description, botanicalName, water, fertilization, careGuide} = data[0];
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

export default IndexPage;

