import {createContext} from "react";

const PlantContext = createContext();
function PlantProvider({children, plantInfo, updateRecord}) {
	return(
		<PlantContext.Provider
			value = {{
				plantInfo,
				updateRecord
			}}
		>
			{children}
		</PlantContext.Provider>
	)
}

export { PlantContext, PlantProvider };