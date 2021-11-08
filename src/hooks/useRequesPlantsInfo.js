import {useEffect, useState} from "react";
import {data} from "../../PlantData";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

function useRequestPlantsInfo(delayTime = 1000) {
    const [plantsData, setPlantsData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setPlantsData(data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
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
    return {
        plantsData,
        requestStatus,
        error,
        onAddToMyGardenToggle 
    };
}

export default useRequestPlantsInfo;

