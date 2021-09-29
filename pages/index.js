import {data} from "../PlantData";

const IndexPage = () => {
    const {id, plantName, description, botanicalName, water, fertilization, careGuide} = data[0];
    return(
        <div className="container plants-list">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-16 col-lg-4 col-sm-12 col-xs-12">
                    <div className="card card-height p-3 mt-3">
                        <div className="plant-img d-flex flex-row justify-content-center align-items-center h-300">
                            <img 
                                className="contain-fit" 
                                src={`/images/${plantName}.jpg`}
                                height="200"
                                alt={`${{botanicalName}}`}
                            />
                        </div>
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
                        <div className="careGuideBox card h-30">
                            <span className="careGuide w-100 h-100">
                                <strong>Sun: </strong>{careGuide.sun}
                                <strong>Soil: </strong>{careGuide.soil}
                                <strong>Difficulty Rating: </strong>{careGuide.difficultyRating}
                                <strong>Planting Time: </strong>{careGuide.plantingTime}
                                <strong>Potting: </strong> {careGuide.potting}
                                <strong>Pruning: </strong> {careGuide.pruning}
                            </span>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default IndexPage;

