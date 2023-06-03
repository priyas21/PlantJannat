import React, { useContext, useState } from "react";
import {PlantsFilterContext} from "../contexts/PlantsFilterContext";
import { PlantContext, PlantProvider } from "../contexts/PlantContext";

function CareGuide() {
	const {
		plantInfo:
			{ careGuide:
				{
					difficultyRating,
					plantingTime,
					potting,
					pruning
				}}} = useContext(PlantContext);

	return(
		<span className="careGuide">
			<strong>Difficulty Rating: </strong>{difficultyRating}
			<strong>Planting Time: </strong>{plantingTime}
			<strong>Potting: </strong> {potting}
			<strong>Pruning: </strong> {pruning}
		</span>
	);
}

function PlantImage() {
	const { plantInfo: { plantName, botanicalName } } = useContext(PlantContext);
	return(
		<div className="plant-img d-flex flex-row justify-content-center align-items-center h-300">
			<img
				className="contain-fit"
				src={`/images/${plantName}.jpg`}
				height="200"
				alt={`${{botanicalName}}`}
			/>
		</div>
	);
}
function AddToMyGarden(){
	const {plantInfo, updateRecord} = useContext(PlantContext);

	const[inTransition, setInTransition] = useState(false);
	function doneCallback() {
		setInTransition(false);
	}
    
	return (
		<div className="action padB1">
			<span onClick={ function () {
				setInTransition(true);
				updateRecord({
					...plantInfo,
					addToMyGarden: !plantInfo.addToMyGarden,
				}, doneCallback)
			}}>
				<i className={plantInfo.addToMyGarden === true ?
					"fa fa-star orange" : "fa fa-star-o orange"
				}
				/> {" "}
                Add To My Garden{" "}
				{inTransition ? (
					<span className="fas fa-circle-notch fa-spin"></span>
				) : null}
			</span>
		</div>

	);
}

function PlantDemographics() {
	const plant = useContext(PlantContext);
	const {
		plantName,
		description,
		water,
		fertilization,
		sun,
		soil,
	} = plant.plantInfo;

	return (
		<div className=" box plant-info h-300">
			<div className="d-flex justify-content-between  mb-3">
				<h3 className="text-truncate w-200">
					{plantName.toUpperCase()}
				</h3>
			</div>
			<AddToMyGarden />
			<div>
				<p className="card-description">
					{description}
				</p>
				<div className="social">
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
	);
}

function Plant({plantInfo, updateRecord}) {
	const{ careGuide } = plantInfo;
	const { showCareGuide } = useContext(PlantsFilterContext);
	return(
		<PlantProvider plantInfo={plantInfo} updateRecord={updateRecord} >
			<div className="col-xs-12 col-sm-12 col-md-16 col-lg-4 col-sm-12 col-xs-12">
				<div className="card card-height p-2 mt-3">
					<PlantImage />
					<PlantDemographics />
				</div>
				{showCareGuide === true ?
					<div className="careGuideBox card h-30">
						<CareGuide />
					</div>
					: null }
			</div>
		</PlantProvider>
	);
}

export default Plant;