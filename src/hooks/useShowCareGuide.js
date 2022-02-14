import {useState} from "react";

function useShowCareGuide(startingShowCareGuide) {
    const [showCareGuide, setShowCareGuide] = useState(startingShowCareGuide);

    return {
        showCareGuide,
        setShowCareGuide
    };
}

export default useShowCareGuide;