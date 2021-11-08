import {useEffect, useState} from "react";

export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure"
};

function useRequestDelay(delayTime = 1000, initialData = []) {
    const [data, setData] = useState(initialData);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");

    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        async function delayFunc() {
            try {
                await delay(delayTime);
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(data)
            }
            catch (e) {
                setRequestStatus(REQUEST_STATUS.FAILURE)
                setError(e);
            }
        }
        delayFunc();
    },[]);

    function updateRecord(recordUpdated) {
        const newRecords = data.map(function(rec) {
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        }); 
    }
    
    function onAddToMyGardenToggle(id){
        const plantRecPrevious = data.find(function (rec){
            return rec.id === id;
        });

        const plantRecUpdated = {
            ...plantRecPrevious,
            addToMyGarden: !plantRecPrevious.addToMyGarden
        };

        const plantsDataNew = data.map(function (rec){
            return rec.id === id ? plantRecUpdated : rec;
        });

        setData(plantsDataNew);
    }
    return {
        data,
        requestStatus,
        error,
        onAddToMyGardenToggle 
    };
}

export default useRequestDelay;

