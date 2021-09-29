import {data} from "../PlantData";
import Plant from "../src/components/PlantInfo";

const IndexPage = () => {
    const {id, plantName, description, botanicalName, water, fertilization, careGuide} = data[0];
    return(
        <div className="container plants-list">
            <div className="row">
                {data.map(function (plantInfo) {
                    return (
                        <Plant key={plantInfo.id} plantInfo = {plantInfo} />
                    )})
                }
            </div>
        </div>
    )
}

export default IndexPage;

