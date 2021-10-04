import PlantToolbar from "./PlantToolbar";
import PlantsList from "./PlantsList";

function Plants({data, theme, setTheme}){
    return(
        <>
            <PlantToolbar theme={theme} setTheme={setTheme}/>
            <PlantsList data ={data} />
        </>
    )
}

export default Plants;