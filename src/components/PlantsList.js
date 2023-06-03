import React from "react";
import Plant from "./PlantInfo";
import ReactPlaceholder from "react-placeholder";
import useRequestDelay, {REQUEST_STATUS} from "../hooks/useRequestDelay";
import {data} from "../../PlantData";
import {useContext} from "react";
import {PlantsFilterContext} from "../contexts/PlantsFilterContext";

function PlantsList() {
    
	const {
		data: plantsData, 
		requestStatus,
		error,
		updateRecord 
	} = useRequestDelay(1000, data );
    
	const { searchQuery } = useContext(PlantsFilterContext);
    
	if(requestStatus === REQUEST_STATUS.FAILURE) {
		return (
			<div className="danger">
                Error: <b>Loading Plants data failed {error}</b>
			</div>
		);
	}

	console.log(plantsData);
	return(
		<div className="container plants-list">
			<ReactPlaceholder 
				type="media"
				rows={15}
				className="plantslist-placeholder"
				ready={requestStatus===REQUEST_STATUS.SUCCESS}
			>
				<div className="row">
					{plantsData
						.filter(function(plant)
						{
							return(
								plant.plantName.toLowerCase().includes(searchQuery) || plant.botanicalName.toLowerCase().includes(searchQuery)
							);
						}).
						map(function (plantInfo) {
							return (
								<Plant 
									key={plantInfo.id}
									plantInfo = {plantInfo}
									updateRecord = {updateRecord}
								/>
							);})
					}
				</div>
			</ReactPlaceholder>
		</div>
	);
}


export default PlantsList;