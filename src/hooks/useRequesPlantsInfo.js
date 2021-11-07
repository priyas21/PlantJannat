import {useEffect, useState} from "react";
import {data} from "../../PlantData";

function useRequestPlantsInfo(delayTime = 1000) {
    const [plantsData, setPlantsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                setIsLoading(false);
                setPlantsData(data)
            }
            catch (e) {
                setIsLoading(false);
                setHasErrored(true);
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
        isLoading,
        hasErrored, error,
        onAddToMyGardenToggle 
    };
}

export default useRequestPlantsInfo;

