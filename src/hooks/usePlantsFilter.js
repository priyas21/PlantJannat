import { useState } from "react";

function usePlantsFilter(startingShowCareGuide) {
	const [showCareGuide, setShowCareGuide] = useState(startingShowCareGuide);
	const [searchQuery, setSearchQuery] = useState("");
    
	return {
		showCareGuide,
		setShowCareGuide,
		searchQuery,
		setSearchQuery,
	};
}

export default usePlantsFilter;